import { WHY_US } from '../data/siteData.js';
import useReveal from '../hooks/useReveal.js';

function WhyCard({ item }) {
  const ref = useReveal();
  return (
    <div className="why-card" ref={ref}>
      <span className="why-icon">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d={item.icon} /></svg>
      </span>
      <span className="why-num">{item.title}</span>
      <p>{item.desc}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">لماذا OnTime</p>
          <h2>نبني علاقة عمل، مش مجرد مشروع</h2>
        </div>
        <div className="why-grid">
          {WHY_US.map(item => <WhyCard key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}
