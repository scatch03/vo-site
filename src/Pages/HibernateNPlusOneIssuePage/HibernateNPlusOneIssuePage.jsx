import styles from './HibernateNPlusOneIssuePage.module.scss';
import nPlusOneFlowDiagram from '../../assets/n-plus-one-flow.svg';
import queryComparisonDiagram from '../../assets/n-plus-one-query-comparison.svg';
import nplus1 from '../../assets/nplus1.jpg';

const HibernateNPlusOneIssuePage = () => {
  return (
    <article className={styles.post}>
      <a className={styles.post__backLink} href="/">
        &lt; Back
      </a>

      <figure className={styles.post__hero}>
        <img
          className={styles.post__heroImage}
          src={nplus1}
          alt="Laptop with development environment"
        />
        <figcaption className={styles.post__heroCaption}>
          Hibernate can look fast in local testing and still fail under production load because of
          hidden query explosions.
        </figcaption>
      </figure>

      <header className={styles.post__header}>
        <p className={styles.post__eyebrow}>Java Persistence / Hibernate</p>
        <h1 className={styles.post__title}>N+1 Issue in Hibernate: Why It Happens and How to Fix It</h1>
        <p className={styles.post__meta}>Estimated read: 12 minutes</p>
        <p className={styles.post__lead}>
          The N+1 query problem is one of the most common and expensive mistakes in Hibernate
          applications. It happens quietly, passes code review, and often appears only after real
          traffic arrives. This post explains what causes it, how to recognize it early, and how
          to choose the right fix for each endpoint.
        </p>
      </header>

      <nav className={styles.post__toc} aria-label="Table of contents">
        <p className={styles.post__tocTitle}>Table of Contents</p>
        <ul className={styles.post__tocList}>
          <li>
            <a href="#overview">What N+1 really means</a>
          </li>
          <li>
            <a href="#example">How it appears in code</a>
          </li>
          <li>
            <a href="#impact">Impact on performance</a>
          </li>
          <li>
            <a href="#fixes">Fix strategies and tradeoffs</a>
          </li>
          <li>
            <a href="#checklist">Production checklist</a>
          </li>
        </ul>
      </nav>

      <section id="overview" className={styles.post__section}>
        <h2>What is the N+1 issue?</h2>
        <p>
          N+1 happens when your code loads a collection of entities (query number one), and then
          Hibernate lazily loads a related association one entity at a time (N extra queries).
          Instead of one intentional data fetch, the database receives a storm of small queries.
        </p>
        <p>
          If your endpoint loads 200 parents and touches one lazy relation on each parent, that
          endpoint can execute 201 SQL statements. On low traffic this might still look fine. Under
          concurrency it can become a bottleneck.
        </p>
      </section>

      <figure className={styles.post__figure}>
        <img
          className={styles.post__figureImage}
          src={nPlusOneFlowDiagram}
          alt="Diagram showing one query for parent entities and many child queries"
        />
        <figcaption className={styles.post__figureCaption}>
          N+1 is usually caused by lazy relationships read inside loops.
        </figcaption>
      </figure>

      <section id="example" className={styles.post__section}>
        <h2>Typical setup that creates N+1</h2>
        <p>
          Consider a simple blog domain where each author has many posts. The mapping itself is not
          wrong. The issue starts when we load many authors and access <code>posts</code> in a loop.
        </p>
        <h3>Entity mapping</h3>
        <pre className={styles.post__code}>
          <code>{`@Entity
public class Author {
    @Id
    private Long id;

    private String name;

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY)
    private List<Post> posts = new ArrayList<>();
}

@Entity
public class Post {
    @Id
    private Long id;

    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    private Author author;
}`}</code>
        </pre>
        <h3>Service method that triggers N+1</h3>
        <pre className={styles.post__code}>
          <code>{`@Transactional(readOnly = true)
public List<AuthorSummaryDto> findAuthors() {
    List<Author> authors = authorRepository.findAll();

    return authors.stream()
        .map(author -> new AuthorSummaryDto(
            author.getName(),
            author.getPosts().size() // lazy load per author
        ))
        .toList();
}`}</code>
        </pre>
        <h3>How SQL logs usually look</h3>
        <pre className={styles.post__code}>
          <code>{`-- First query (1)
select a.id, a.name
from author a;

-- Repeated query (N times)
select p.id, p.title, p.author_id
from post p
where p.author_id = ?;`}</code>
        </pre>
      </section>

      <section id="impact" className={styles.post__section}>
        <h2>Why this hurts real systems</h2>
        <p>
          The issue is not only query count. N+1 increases network round-trips, holds DB
          connections longer, and amplifies p95/p99 latency under load. This is why endpoints that
          are acceptable in test environments become unstable in production.
        </p>
        <ul>
          <li>Higher average response time due to extra round trips</li>
          <li>Worse tail latency when many requests run simultaneously</li>
          <li>Connection pool pressure and thread blocking</li>
          <li>More CPU spent parsing/executing repetitive SQL</li>
        </ul>

        <figure className={styles.post__figure}>
          <img
            className={styles.post__figureImage}
            src={queryComparisonDiagram}
            alt="Bar chart comparing query count for fetch join, entity graph, batch fetch and N+1"
          />
          <figcaption className={styles.post__figureCaption}>
            Query count differences grow quickly as dataset size increases.
          </figcaption>
        </figure>

        <div className={styles.post__tableWrap}>
          <table className={styles.post__table}>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Typical Query Count</th>
                <th>Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fetch join</td>
                <td>1</td>
                <td>Small or medium relation graph for one endpoint</td>
              </tr>
              <tr>
                <td>EntityGraph</td>
                <td>1-3</td>
                <td>Reusable repository fetch plans</td>
              </tr>
              <tr>
                <td>Batch fetch</td>
                <td>~10-20</td>
                <td>When full join would be too large</td>
              </tr>
              <tr>
                <td>N+1 pattern</td>
                <td>1 + N</td>
                <td>Should be avoided</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="fixes" className={styles.post__section}>
        <h2>How to fix it in Hibernate</h2>
        <p>
          There is no single universal fix. Choose strategy by endpoint shape, payload size, and
          paging requirements.
        </p>

        <h3>1. Use fetch join in JPQL</h3>
        <pre className={styles.post__code}>
          <code>{`@Query("""
   select a
   from Author a
   left join fetch a.posts
   where a.active = true
""")
List<Author> findActiveAuthorsWithPosts();`}</code>
        </pre>
        <p>
          This is often the fastest option because it collapses relation loading into one SQL
          statement.
        </p>
        <div className={styles.post__note}>
          Caution: fetch-joining large collections together with pagination can produce duplicates
          or large intermediate result sets.
        </div>

        <h3>2. Use EntityGraph</h3>
        <pre className={styles.post__code}>
          <code>{`@EntityGraph(attributePaths = {"posts", "profile"})
@Query("select a from Author a where a.active = true")
List<Author> findActiveAuthors();`}</code>
        </pre>
        <p>
          EntityGraph keeps repository signatures clean and lets you switch fetch shape per use
          case without hardcoding joins in every query.
        </p>

        <h3>3. Batch loading for lazy relations</h3>
        <pre className={styles.post__code}>
          <code>{`# application.yml
spring:
  jpa:
    properties:
      hibernate:
        default_batch_fetch_size: 50`}</code>
        </pre>
        <p>
          Batch fetching does not remove all extra queries, but replaces many tiny queries with a
          smaller number of grouped queries. It is a low-risk optimization for existing code.
        </p>

        <h3>4. DTO projections for read endpoints</h3>
        <pre className={styles.post__code}>
          <code>{`@Query("""
   select new com.example.AuthorPostCountDto(a.id, a.name, count(p.id))
   from Author a
   left join a.posts p
   group by a.id, a.name
""")
List<AuthorPostCountDto> findAuthorPostCounts();`}</code>
        </pre>
        <p>
          For list pages and dashboards, DTO projections are usually the most predictable approach.
          You fetch exactly the columns you need and avoid accidental lazy traversal.
        </p>
      </section>

      <section id="checklist" className={styles.post__section}>
        <h2>Production checklist</h2>
        <p>
          Use this checklist during PR review and performance testing:
        </p>
        <ul>
          <li>Keep associations LAZY by default</li>
          <li>For each endpoint, define explicit fetch plan</li>
          <li>Track query count in integration tests</li>
          <li>Review SQL logs for repeated `where parent_id = ?` patterns</li>
          <li>Choose DTO queries for read-heavy APIs</li>
          <li>Retest after each mapping or query change</li>
        </ul>

        <p>
          If you remember one rule, make it this: do not rely on implicit lazy access inside loops.
          Fetch intentionally.
        </p>
      </section>
    </article>
  );
};

export default HibernateNPlusOneIssuePage;
