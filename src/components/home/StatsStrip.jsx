
import { statistics } from "../../data/homeData";

export default function StatsStrip() {
  return (
    <section
      className="stats-strip"
      aria-label="Company highlights"
    >
      <div className="container">
        <div className="stats-grid">
          {statistics.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <strong className="stat-value">
                {stat.value}
              </strong>

              <span className="stat-label">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
