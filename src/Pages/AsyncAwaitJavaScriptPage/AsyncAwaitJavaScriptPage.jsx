import styles from './AsyncAwaitJavaScriptPage.module.scss';
import heroImage from '../../assets/asaw.png';
import asyncAwaitFlowDiagram from '../../assets/async-await-flow.svg';
import eventLoopDiagram from '../../assets/async-await-event-loop.svg';

const AsyncAwaitJavaScriptPage = () => {
  return (
    <article className={styles.post}>
      <a className={styles.post__backLink} href="/">
        &lt; Back
      </a>

      <figure className={styles.post__hero}>
        <img className={styles.post__heroImage} src={heroImage} alt="JavaScript code editor" />
        <figcaption className={styles.post__heroCaption}>
          `async/await` makes asynchronous logic readable, but performance and correctness still
          depend on how you compose Promises.
        </figcaption>
      </figure>

      <header className={styles.post__header}>
        <p className={styles.post__eyebrow}>JavaScript / Asynchronous Programming</p>
        <h1 className={styles.post__title}>
          Async/Await in JavaScript: Practical Patterns, Pitfalls, and Performance
        </h1>
        <p className={styles.post__meta}>Estimated read: 11 minutes</p>
        <p className={styles.post__lead}>
          Async/await is often described as “syntax sugar over Promises,” but that description is
          too shallow for production systems. In this article we break down how async/await works,
          how it interacts with the event loop, and how to structure API calls safely and
          efficiently.
        </p>
      </header>

      <nav className={styles.post__toc} aria-label="Table of contents">
        <p className={styles.post__tocTitle}>Table of Contents</p>
        <ul className={styles.post__tocList}>
          <li>
            <a href="#overview">Why async/await exists</a>
          </li>
          <li>
            <a href="#event-loop">How await works under the hood</a>
          </li>
          <li>
            <a href="#patterns">Patterns that scale</a>
          </li>
          <li>
            <a href="#pitfalls">Common mistakes</a>
          </li>
          <li>
            <a href="#checklist">Production checklist</a>
          </li>
        </ul>
      </nav>

      <section id="overview" className={styles.post__section}>
        <h2>Why async/await exists</h2>
        <p>
          JavaScript started with callbacks, then moved to Promise chains, then to async/await.
          Each step reduced accidental complexity in async control flow.
        </p>
        <h3>Callback style</h3>
        <pre className={styles.post__code}>
          <code>{`loadUser(userId, (err, user) => {
  if (err) return handleError(err);
  loadPermissions(user.id, (err2, permissions) => {
    if (err2) return handleError(err2);
    renderDashboard(user, permissions);
  });
});`}</code>
        </pre>
        <h3>Promise chain</h3>
        <pre className={styles.post__code}>
          <code>{`loadUser(userId)
  .then((user) => loadPermissions(user.id).then((permissions) => ({ user, permissions })))
  .then(({ user, permissions }) => renderDashboard(user, permissions))
  .catch(handleError);`}</code>
        </pre>
        <h3>Async/await style</h3>
        <pre className={styles.post__code}>
          <code>{`async function initDashboard(userId) {
  try {
    const user = await loadUser(userId);
    const permissions = await loadPermissions(user.id);
    renderDashboard(user, permissions);
  } catch (error) {
    handleError(error);
  }
}`}</code>
        </pre>
        <p>
          The async/await version is easier to review because it reads top-to-bottom like
          synchronous code while preserving non-blocking execution.
        </p>
      </section>

      <figure className={styles.post__figure}>
        <img
          className={styles.post__figureImage}
          src={asyncAwaitFlowDiagram}
          alt="Diagram comparing sequential await versus Promise.all execution"
        />
        <figcaption className={styles.post__figureCaption}>
          Sequential awaits are simple but can be slower when calls are independent.
        </figcaption>
      </figure>

      <section id="event-loop" className={styles.post__section}>
        <h2>What await does under the hood</h2>
        <p>
          `await` pauses only the current async function. JavaScript keeps running other work on the
          event loop. When the awaited Promise resolves, continuation is scheduled as a microtask.
        </p>
        <pre className={styles.post__code}>
          <code>{`console.log('A');

async function run() {
  console.log('B');
  await Promise.resolve();
  console.log('C');
}

run();
console.log('D');
// Output: A, B, D, C`}</code>
        </pre>

        <figure className={styles.post__figure}>
          <img
            className={styles.post__figureImage}
            src={eventLoopDiagram}
            alt="Event loop diagram showing call stack, web apis, and microtask queue"
          />
          <figcaption className={styles.post__figureCaption}>
            Promise continuations from `await` run in the microtask queue before timer callbacks.
          </figcaption>
        </figure>
      </section>

      <section id="patterns" className={styles.post__section}>
        <h2>Patterns that scale in production</h2>
        <h3>1. Run independent requests in parallel</h3>
        <pre className={styles.post__code}>
          <code>{`const [profile, stats, notifications] = await Promise.all([
  fetchProfile(userId),
  fetchStats(userId),
  fetchNotifications(userId)
]);`}</code>
        </pre>
        <p>
          If requests do not depend on each other, `Promise.all` is usually faster than sequential
          awaits.
        </p>

        <h3>2. Use Promise.allSettled for partial success</h3>
        <pre className={styles.post__code}>
          <code>{`const results = await Promise.allSettled([
  fetchProfile(userId),
  fetchRecommendations(userId),
  fetchBilling(userId)
]);

const [profileResult, recommendationsResult, billingResult] = results;`}</code>
        </pre>
        <p>
          This prevents one failed request from canceling the entire page payload when partial data
          is acceptable.
        </p>

        <h3>3. Add cancellation for stale requests</h3>
        <pre className={styles.post__code}>
          <code>{`const controller = new AbortController();

const response = await fetch('/api/search?q=java', {
  signal: controller.signal
});

// later (new search or component unmount)
controller.abort();`}</code>
        </pre>
        <div className={styles.post__note}>
          Cancellation is essential in UIs with fast navigation or autocomplete to avoid race
          conditions and stale rendering.
        </div>

        <div className={styles.post__tableWrap}>
          <table className={styles.post__table}>
            <thead>
              <tr>
                <th>Pattern</th>
                <th>Use it when</th>
                <th>Tradeoff</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sequential await</td>
                <td>Operation B depends on A result</td>
                <td>Higher total latency</td>
              </tr>
              <tr>
                <td>Promise.all</td>
                <td>Operations are independent</td>
                <td>Fails fast if one Promise rejects</td>
              </tr>
              <tr>
                <td>Promise.allSettled</td>
                <td>Partial failures are acceptable</td>
                <td>Needs result-status handling</td>
              </tr>
              <tr>
                <td>AbortController</td>
                <td>Request can become stale</td>
                <td>Extra cancellation plumbing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="pitfalls" className={styles.post__section}>
        <h2>Common async/await mistakes</h2>
        <h3>Using async callback with `forEach`</h3>
        <pre className={styles.post__code}>
          <code>{`// Avoid:
items.forEach(async (item) => {
  await saveItem(item);
});

// Better:
for (const item of items) {
  await saveItem(item);
}

// Or in parallel:
await Promise.all(items.map((item) => saveItem(item)));`}</code>
        </pre>

        <h3>Swallowing errors</h3>
        <pre className={styles.post__code}>
          <code>{`try {
  await processOrder(orderId);
} catch (error) {
  logger.error(error);
  throw error; // rethrow when caller must know
}`}</code>
        </pre>
        <p>
          Async code should have clear error ownership. If you catch an error, either recover
          explicitly or rethrow.
        </p>
      </section>

      <section id="checklist" className={styles.post__section}>
        <h2>Production checklist</h2>
        <ul>
          <li>Prefer async/await for readability in business logic</li>
          <li>Use `Promise.all` for independent IO</li>
          <li>Use `Promise.allSettled` for tolerant aggregate endpoints</li>
          <li>Add timeout and cancellation strategy for user-driven requests</li>
          <li>Keep error boundaries explicit and observable</li>
          <li>Test both success and rejection paths</li>
        </ul>
        <p>
          Async/await improves readability, but architecture decisions still determine reliability
          and speed. Treat concurrency and error handling as first-class design concerns.
        </p>
      </section>
    </article>
  );
};

export default AsyncAwaitJavaScriptPage;
