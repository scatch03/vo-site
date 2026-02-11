import styles from './MongoDbTimeSeriesPage.module.scss';
import heroImage from '../../assets/mts.png';
import timeSeriesFlowDiagram from '../../assets/mongodb-timeseries-flow.svg';
import bucketModelDiagram from '../../assets/mongodb-timeseries-bucket-model.svg';

const MongoDbTimeSeriesPage = () => {
  return (
    <article className={styles.post}>
      <a className={styles.post__backLink} href="/">
       &lt; Back
      </a>

      <figure className={styles.post__hero}>
        <img className={styles.post__heroImage} src={heroImage} alt="Monitoring dashboard and time series charts" />
        <figcaption className={styles.post__heroCaption}>
          MongoDB time series collections are optimized for high-ingest measurements and recent-range
          analytics.
        </figcaption>
      </figure>

      <header className={styles.post__header}>
        <p className={styles.post__eyebrow}>MongoDB / Data Engineering</p>
        <h1 className={styles.post__title}>Using MongoDB for Time Series Data</h1>
        <p className={styles.post__meta}>Estimated read: 12 minutes</p>
        <p className={styles.post__lead}>
          Time series workloads are different from ordinary CRUD data: write-heavy ingest, mostly
          append-only updates, and frequent range aggregations over recent windows. MongoDB includes
          native time series collections designed specifically for that shape. This guide covers
          practical setup, query patterns, and production tradeoffs.
        </p>
      </header>

      <nav className={styles.post__toc} aria-label="Table of contents">
        <p className={styles.post__tocTitle}>Table of Contents</p>
        <ul className={styles.post__tocList}>
          <li>
            <a href="#why">Why use MongoDB time series collections</a>
          </li>
          <li>
            <a href="#setup">Collection setup and schema shape</a>
          </li>
          <li>
            <a href="#querying">Querying and aggregation patterns</a>
          </li>
          <li>
            <a href="#operations">Retention, indexing, and operations</a>
          </li>
          <li>
            <a href="#checklist">Practical checklist</a>
          </li>
        </ul>
      </nav>

      <section id="why" className={styles.post__section}>
        <h2>Why MongoDB for time series</h2>
        <p>
          Native time series collections store measurements in internal buckets, which improves
          compression and scan efficiency for temporal ranges. The result is lower storage overhead
          and better read performance for common analytics queries.
        </p>
        <ul>
          <li>Fast ingest for event/metric streams</li>
          <li>Automatic internal bucketing and compression</li>
          <li>Efficient time-window queries with aggregation pipeline</li>
          <li>Built-in retention with TTL using the time field</li>
        </ul>
      </section>

      <figure className={styles.post__figure}>
        <img
          className={styles.post__figureImage}
          src={timeSeriesFlowDiagram}
          alt="MongoDB time series write and read flow"
        />
        <figcaption className={styles.post__figureCaption}>
          Ingest measurements, query by time ranges and metadata, then aggregate for dashboards or
          APIs.
        </figcaption>
      </figure>

      <section id="setup" className={styles.post__section}>
        <h2>Collection setup and data model</h2>
        <p>
          Define a <code>timeField</code> and a stable <code>metaField</code>. The metadata should
          represent the source identity (for example sensor, device, tenant) and change rarely.
        </p>
        <pre className={styles.post__code}>
          <code>{`db.createCollection("measurements", {
  timeseries: {
    timeField: "ts",
    metaField: "meta",
    granularity: "minutes"
  },
  expireAfterSeconds: 60 * 60 * 24 * 30 // 30 days
});`}</code>
        </pre>
        <p>
          Keep each measurement document lean. Put frequently queried tags inside the meta object.
        </p>
        <pre className={styles.post__code}>
          <code>{`{
  ts: ISODate("2026-02-10T12:01:00Z"),
  meta: { sensorId: "A1", location: "dc-eu-1" },
  temperature: 22.4,
  humidity: 0.43
}`}</code>
        </pre>
      </section>

      <figure className={styles.post__figure}>
        <img
          className={styles.post__figureImage}
          src={bucketModelDiagram}
          alt="MongoDB internal bucket representation for time series"
        />
        <figcaption className={styles.post__figureCaption}>
          Application-level events are grouped into internal bucket documents for storage
          efficiency.
        </figcaption>
      </figure>

      <section id="querying" className={styles.post__section}>
        <h2>Query and aggregation patterns</h2>
        <h3>Recent window by source</h3>
        <pre className={styles.post__code}>
          <code>{`db.measurements.find({
  "meta.sensorId": "A1",
  ts: { $gte: ISODate("2026-02-10T11:00:00Z") }
}).sort({ ts: -1 }).limit(500);`}</code>
        </pre>

        <h3>Time-bucket aggregation with date truncation</h3>
        <pre className={styles.post__code}>
          <code>{`db.measurements.aggregate([
  {
    $match: {
      "meta.location": "dc-eu-1",
      ts: { $gte: ISODate("2026-02-10T00:00:00Z"), $lt: ISODate("2026-02-11T00:00:00Z") }
    }
  },
  {
    $group: {
      _id: {
        minute: { $dateTrunc: { date: "$ts", unit: "minute", binSize: 5 } }
      },
      avgTemp: { $avg: "$temperature" },
      maxTemp: { $max: "$temperature" }
    }
  },
  { $sort: { "_id.minute": 1 } }
]);`}</code>
        </pre>

        <div className={styles.post__tableWrap}>
          <table className={styles.post__table}>
            <thead>
              <tr>
                <th>Pattern</th>
                <th>Recommended approach</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Last N points</td>
                <td>filter by meta + sort by ts desc + limit</td>
                <td>fast recent reads</td>
              </tr>
              <tr>
                <td>Chart series</td>
                <td>$match + $dateTrunc + $group</td>
                <td>stable downsampled output</td>
              </tr>
              <tr>
                <td>Retention</td>
                <td>expireAfterSeconds on collection</td>
                <td>automatic old-data cleanup</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="operations" className={styles.post__section}>
        <h2>Retention, indexing, and operational notes</h2>
        <ul>
          <li>Index metadata fields used in high-frequency filters</li>
          <li>Use bounded retention windows with TTL to control storage growth</li>
          <li>Batch writes with <code>bulkWrite</code> for higher throughput</li>
          <li>Prefer append-only ingestion over frequent historical updates</li>
          <li>Validate query shape with explain plans before scaling traffic</li>
        </ul>
        <div className={styles.post__note}>
          Time series collections are optimized for measurement events, not arbitrary document update
          workloads.
        </div>
      </section>

      <section id="checklist" className={styles.post__section}>
        <h2>Practical checklist</h2>
        <ul>
          <li>Choose clear timeField and stable metaField</li>
          <li>Enable retention from day one</li>
          <li>Model queries before production data volume arrives</li>
          <li>Benchmark ingest and aggregation on realistic traffic</li>
          <li>Monitor query latency and storage growth continuously</li>
        </ul>
        <p>
          Used correctly, MongoDB time series collections provide a practical balance between
          developer speed and operational efficiency for metrics, telemetry, and event analytics.
        </p>
      </section>
    </article>
  );
};

export default MongoDbTimeSeriesPage;
