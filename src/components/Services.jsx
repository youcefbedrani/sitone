import { SERVICES } from '../data/siteData.js';
import useReveal from '../hooks/useReveal.js';

function ServiceCard({ service, href }) {
  const ref = useReveal();
  return (
    <article className="service-card" ref={ref}>
      <div className="service-icon">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d={service.icon} /></svg>
      </div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <span className="service-gain">{service.gain}</span>
      <a href={href} className="service-card-link">اكتشف المزيد ←</a>
    </article>
  );
}

export default function Services() {
  const detailMap = {
    'تطوير المواقع الإلكترونية': '#service-websites',
    'تطبيقات الموبايل والكمبيوتر': '#service-apps',
    'المتاجر الإلكترونية': '#service-websites',
    'أنظمة ERP': '#service-erp',
    'أنظمة CRM': '#service-crm',
    'التسويق الرقمي وإدارة الإعلانات': '#service-ads',
    'أتمتة الأعمال بالذكاء الاصطناعي': '#service-automation',
    'الصيانة والدعم المستمر': '#contact'
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">خدماتنا</p>
          <h2>كل ما تحتاجه لتنمية عملك رقمياً<br />في مكان واحد</h2>
          <p className="section-sub">من الموقع الأول إلى النظام الذي يدير شركتك بالكامل — نغطي المسار كاملاً.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map(service => (
            <ServiceCard key={service.title} service={service} href={detailMap[service.title] || '#contact'} />
          ))}
        </div>
      </div>
    </section>
  );
}
