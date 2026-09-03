import { STATS } from '../data/siteData.js';
import useCounter from '../hooks/useCounter.js';

function StatItem({ stat }) {
  const { ref, count } = useCounter(stat.target);
  return (
    <div className="stat-item" ref={ref}>
      <strong className="stat-num">{count}</strong>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="container stats-grid">
        {STATS.map(stat => <StatItem key={stat.label} stat={stat} />)}
      </div>
    </section>
  );
}
