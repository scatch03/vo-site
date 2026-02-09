import styles from './PostgreSQLIndexesPage.module.scss';
import heroImage from '../../assets/pgi.jpg';
import indexTypesOverviewDiagram from '../../assets/postgres-index-types-overview.svg';
import decisionFlowDiagram from '../../assets/postgres-index-decision-flow.svg';

const PostgreSQLIndexesPage = () => {
  return (
    <article className={styles.post}>
      <a className={styles.post__backLink} href="/">
        &lt; Back
      </a>

      <figure className={styles.post__hero}>
        <img className={styles.post__heroImage} src={heroImage} alt="Database query planning concept" />
        <figcaption className={styles.post__heroCaption}>
          Indexes reduce scan cost, but only when their type and structure match your real query
          operators.
        </figcaption>
      </figure>

      <header className={styles.post__header}>
        <p className={styles.post__eyebrow}>PostgreSQL / Query Performance</p>
        <h1 className={styles.post__title}>Types of PostgreSQL Indexes: When to Use Each One</h1>
        <p className={styles.post__meta}>Estimated read: 13 minutes</p>
        <p className={styles.post__lead}>
          Many teams create indexes reactively and default to B-Tree for everything. That works
          for many workloads, but breaks down for JSONB, full-text, range operators, and massive
          time-series tables. This guide compares PostgreSQL index types with concrete examples and
          a simple decision flow.
        </p>
      </header>

      <nav className={styles.post__toc} aria-label="Table of contents">
        <p className={styles.post__tocTitle}>Table of Contents</p>
        <ul className={styles.post__tocList}>
          <li>
            <a href="#basics">What an index really does</a>
          </li>
          <li>
            <a href="#types">Main PostgreSQL index types</a>
          </li>
          <li>
            <a href="#practical">Practical index patterns</a>
          </li>
          <li>
            <a href="#validation">How to validate with EXPLAIN</a>
          </li>
          <li>
            <a href="#checklist">Production checklist</a>
          </li>
        </ul>
      </nav>

      <section id="basics" className={styles.post__section}>
        <h2>What an index really does</h2>
        <p>
          PostgreSQL indexes are secondary data structures that let the planner locate matching
          rows without scanning the entire table. Each index type supports a specific set of
          operators efficiently.
        </p>
        <p>
          The core mistake is choosing an index by column type only. You should choose by
          <strong> query operator + data distribution + workload shape</strong>.
        </p>
        <pre className={styles.post__code}>
          <code>{`-- table
CREATE TABLE events (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  category TEXT NOT NULL,
  payload JSONB NOT NULL,
  occurred_at TIMESTAMPTZ NOT NULL
);`}</code>
        </pre>
      </section>

      <figure className={styles.post__figure}>
        <img
          className={styles.post__figureImage}
          src={indexTypesOverviewDiagram}
          alt="Overview of PostgreSQL index types and their use cases"
        />
        <figcaption className={styles.post__figureCaption}>
          PostgreSQL offers multiple index families; no single index fits every query pattern.
        </figcaption>
      </figure>

      <section id="types" className={styles.post__section}>
        <h2>Main PostgreSQL index types</h2>

        <h3>1. B-Tree (default)</h3>
        <p>
          Best for equality and range comparisons (<code>=</code>, <code>&lt;</code>,
          <code>&lt;=</code>, <code>&gt;</code>, <code>BETWEEN</code>) and for ordered scans.
        </p>
        <pre className={styles.post__code}>
          <code>{`CREATE INDEX idx_events_user_id ON events (user_id);
CREATE INDEX idx_events_occurred_at ON events (occurred_at DESC);`}</code>
        </pre>

        <h3>2. Hash</h3>
        <p>
          Useful for equality-only predicates. In most cases B-Tree is still enough, but hash can
          be considered for very specific workloads.
        </p>
        <pre className={styles.post__code}>
          <code>{`CREATE INDEX idx_events_category_hash ON events USING HASH (category);`}</code>
        </pre>

        <h3>3. GIN (Generalized Inverted Index)</h3>
        <p>
          Strong option for composite values such as JSONB, arrays, and full-text search.
        </p>
        <pre className={styles.post__code}>
          <code>{`-- JSONB containment: payload @> '{"source":"ad"}'
CREATE INDEX idx_events_payload_gin ON events USING GIN (payload);

-- Full-text search
CREATE INDEX idx_articles_fts ON articles USING GIN (to_tsvector('english', content));`}</code>
        </pre>

        <h3>4. GiST (Generalized Search Tree)</h3>
        <p>
          Used for geometric data, ranges, and nearest-neighbor style operations.
        </p>
        <pre className={styles.post__code}>
          <code>{`CREATE INDEX idx_bookings_period_gist
ON bookings USING GIST (tsrange(starts_at, ends_at));`}</code>
        </pre>

        <h3>5. BRIN (Block Range Index)</h3>
        <p>
          Very compact index for huge append-only tables where physical row order correlates with
          value order (for example time-series data).
        </p>
        <pre className={styles.post__code}>
          <code>{`CREATE INDEX idx_events_occurred_at_brin
ON events USING BRIN (occurred_at);`}</code>
        </pre>

        <h3>6. SP-GiST</h3>
        <p>
          Specialized tree structure for certain data/operator classes (for example partitioned
          search spaces). Less common, but powerful in the right domain.
        </p>
      </section>

      <figure className={styles.post__figure}>
        <img
          className={styles.post__figureImage}
          src={decisionFlowDiagram}
          alt="Decision flow for choosing PostgreSQL index type by operator and table characteristics"
        />
        <figcaption className={styles.post__figureCaption}>
          Start with operators and access paths, then validate planner behavior.
        </figcaption>
      </figure>

      <section id="practical" className={styles.post__section}>
        <h2>Practical index patterns beyond index type</h2>
        <h3>Composite index</h3>
        <pre className={styles.post__code}>
          <code>{`-- Supports WHERE user_id = ? AND occurred_at >= ?
CREATE INDEX idx_events_user_time
ON events (user_id, occurred_at DESC);`}</code>
        </pre>
        <p>
          Column order matters. Put the most selective and frequently filtered prefixes first.
        </p>

        <h3>Partial index</h3>
        <pre className={styles.post__code}>
          <code>{`CREATE INDEX idx_events_errors_only
ON events (occurred_at DESC)
WHERE category = 'error';`}</code>
        </pre>
        <p>
          Partial indexes are smaller and faster when you query only a stable subset of rows.
        </p>

        <h3>Covering index with INCLUDE</h3>
        <pre className={styles.post__code}>
          <code>{`CREATE INDEX idx_orders_lookup
ON orders (customer_id, created_at DESC)
INCLUDE (total_amount, status);`}</code>
        </pre>
        <p>
          <code>INCLUDE</code> can reduce heap visits for common read queries and enable more
          index-only scans.
        </p>

        <div className={styles.post__tableWrap}>
          <table className={styles.post__table}>
            <thead>
              <tr>
                <th>Query pattern</th>
                <th>Recommended index</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>WHERE email = ?</code>
                </td>
                <td>B-Tree (or Hash)</td>
                <td>B-Tree is usually enough and more flexible</td>
              </tr>
              <tr>
                <td>
                  <code>WHERE payload @&gt; ...</code>
                </td>
                <td>GIN on JSONB</td>
                <td>Use the right operator class if needed</td>
              </tr>
              <tr>
                <td>
                  Range overlaps <code>&amp;&amp;</code>
                </td>
                <td>GiST</td>
                <td>Useful for booking/conflict checks</td>
              </tr>
              <tr>
                <td>Huge time-series scan</td>
                <td>BRIN on timestamp</td>
                <td>Very low storage overhead</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="validation" className={styles.post__section}>
        <h2>Validate index value with EXPLAIN</h2>
        <p>
          Never trust assumptions. Use execution plans before and after index changes.
        </p>
        <pre className={styles.post__code}>
          <code>{`EXPLAIN (ANALYZE, BUFFERS)
SELECT id, user_id, occurred_at
FROM events
WHERE user_id = 42
  AND occurred_at >= NOW() - INTERVAL '7 days'
ORDER BY occurred_at DESC
LIMIT 100;`}</code>
        </pre>
        <p>
          Look for index scan usage, buffer reads, and total execution time. If planner ignores the
          index, investigate selectivity, outdated statistics, and query shape.
        </p>
        <div className={styles.post__note}>
          Measure write overhead too. Every additional index adds cost to INSERT/UPDATE/DELETE.
        </div>
      </section>

      <section id="checklist" className={styles.post__section}>
        <h2>Production checklist</h2>
        <ul>
          <li>Map real query operators before creating indexes</li>
          <li>Pick index type by operator class, not only by column type</li>
          <li>Use composite and partial indexes deliberately</li>
          <li>
            Run <code>EXPLAIN (ANALYZE, BUFFERS)</code> for high-traffic queries
          </li>
          <li>Monitor bloat and rebuild/reindex when necessary</li>
          <li>Drop unused indexes to reduce write amplification</li>
        </ul>
        <p>
          Good indexing is an iterative process. Start with clear query patterns, verify with plans,
          and tune continuously as data volume and access behavior evolve.
        </p>
      </section>
    </article>
  );
};

export default PostgreSQLIndexesPage;
