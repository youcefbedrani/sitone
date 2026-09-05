import { SERVICE_DETAILS, WHATSAPP_LINK } from '../data/siteData.js';
import useReveal from '../hooks/useReveal.js';

function ServiceDetailSection({ service, index }) {
  const ref = useReveal();
  const isEven = index % 2 === 0;

  return (
    <section className={`service-detail ${isEven ? '' : 'service-detail--alt'}`} id={service.id}>
      <div className="container">
        <div className={`service-detail-inner ${isEven ? '' : 'service-detail-inner--alt'}`} ref={ref}>
          <div className="service-detail-visual">
            <img src={service.image} alt={service.title} loading="lazy" />
            <div className="service-detail-badge">
              <svg viewBox="0 0 24 24" className="ico-sm" aria-hidden="true"><path fill="currentColor" d={service.icon} /></svg>
              <span>{service.subtitle}</span>
            </div>
          </div>
          <div className="service-detail-content">
            <p className="eyebrow">{service.title}</p>
            <h2>{service.intro}</h2>
            <p className="service-detail-desc">{service.description}</p>

            <div className="service-detail-lists">
              <div className="service-detail-col">
                <h4>ماذا نقدم؟</h4>
                <ul className="service-detail-features">
                  {service.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className="service-detail-col">
                <h4>ماذا تكسب؟</h4>
                <ul className="service-detail-benefits">
                  {service.benefits.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>

            <div className="service-detail-market">
              <svg viewBox="0 0 24 24" className="ico-sm" aria-hidden="true"><path fill="currentColor" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
              <p>{service.marketNote}</p>
            </div>

            <a href={WHATSAPP_LINK(`مرحباً، أريد الاستفسار عن ${service.title}`)} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" className="ico-sm" aria-hidden="true"><path fill="currentColor" d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.4.9.9-3.3-.2-.3C3.7 14.7 3.2 13.4 3.2 12c0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8-4 8.2-8.8 8.2z"/></svg>
              استفسر عن هذه الخدمة
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetails() {
  return (
    <>
      {SERVICE_DETAILS.map((service, idx) => (
        <ServiceDetailSection key={service.id} service={service} index={idx} />
      ))}
    </>
  );
}
