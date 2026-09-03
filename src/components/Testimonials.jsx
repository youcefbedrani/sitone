import { TESTIMONIALS } from '../data/siteData.js';
import useReveal from '../hooks/useReveal.js';

function TestimonialCard({ item }) {
  const ref = useReveal();
  return (
    <article className="testimonial-card" ref={ref}>
      <div className="testimonial-stars" aria-label="5 من 5">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
      <p className="testimonial-quote">{item.quote}</p>
      <div className="testimonial-author">
        <span className="author-avatar">{item.avatar}</span>
        <div>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">آراء العملاء</p>
          <h2>ماذا يقول عملاؤنا عنا</h2>
          <p className="section-sub">ثقة عملائنا هي أغلى ما نملك — وهذه بعض كلماتهم.</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map(item => <TestimonialCard key={item.name} item={item} />)}
        </div>
      </div>
    </section>
  );
}
