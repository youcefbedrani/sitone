import { PRICING, WHATSAPP_LINK } from '../data/siteData.js';
import useReveal from '../hooks/useReveal.js';

function PricingCard({ plan }) {
  const ref = useReveal();
  return (
    <article className={`pricing-card${plan.featured ? ' pricing-featured' : ''}`} ref={ref}>
      {plan.featured && <span className="pricing-tag">الأكثر طلباً</span>}
      <h3 className="pricing-name">{plan.name}</h3>
      <p className="pricing-desc">{plan.desc}</p>
      <div className="pricing-price"><span className="price-currency">دج</span><strong>{plan.price}</strong></div>
      <ul className="pricing-features">
        {plan.features.map(feature => <li key={feature}>{feature}</li>)}
      </ul>
      <a href={WHATSAPP_LINK(plan.waText)} target="_blank" rel="noopener" className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'} pricing-btn`}>{plan.cta}</a>
    </article>
  );
}

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">الباقات</p>
          <h2>باقات واضحة، بدون مفاجآت</h2>
          <p className="section-sub">اختر الباقة المناسبة لمرحلة مشروعك — وكل الباقات تبدأ باستشارة مجانية.</p>
        </div>
        <div className="pricing-grid">
          {PRICING.map(plan => <PricingCard key={plan.name} plan={plan} />)}
        </div>
        <p className="pricing-note">* الأسعار تقريبية وتختلف حسب تفاصيل المشروع — الاستشارة الأولى مجانية دائماً.</p>
      </div>
    </section>
  );
}
