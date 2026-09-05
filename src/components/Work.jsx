import { WORK } from '../data/siteData.js';
import useReveal from '../hooks/useReveal.js';

function WorkCard({ item }) {
  const ref = useReveal();
  return (
    <article className="work-card" ref={ref}>
      <div className="work-visual">
        <img src={item.image} alt={item.title} loading="lazy" />
        <span className="work-badge">{item.badge}</span>
      </div>
      <div className="work-body">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="work-tags">
          {item.tags.map(tag => <span key={tag} className="work-tag">{tag}</span>)}
        </div>
        <div className="work-result">
          <span className="result-badge">{item.result}</span>
          <span>{item.resultLabel}</span>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">أعمالنا</p>
          <h2>مشاريع تتحدث عن نفسها</h2>
          <p className="section-sub">نتائج حقيقية لعملاء حقيقيين — هذا ما نبنيه عندما نعمل معاً.</p>
        </div>
        <div className="work-grid">
          {WORK.map(item => <WorkCard key={item.title} item={item} />)}
        </div>
        <div className="work-cta">
          <p>مشروعك ممكن يكون التالي — <a href="#contact">احكي لنا عن فكرتك</a></p>
        </div>
      </div>
    </section>
  );
}
