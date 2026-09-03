import { WHATSAPP_LINK } from '../data/siteData.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-grid"></div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">وكالة حلول رقمية متكاملة</p>
          <h1 className="hero-title">
            حوّل زوارك إلى عملاء<br />
            <span className="accent">بموقع يبيع بدل ما يزيّن</span>
          </h1>
          <p className="hero-sub">
            نصمم مواقع، تطبيقات، أنظمة إدارة، وحملات إعلانية <strong>مصممة للتحويل</strong> — كل تفصيلة في مشروعك تخدم هدف واحد: نمو أعمالك.

          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_LINK('مرحباً، أريد استشارة مجانية عن مشروعي')} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" className="ico-sm" aria-hidden="true"><path fill="currentColor" d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.4.9.9-3.3-.2-.3C3.7 14.7 3.2 13.4 3.2 12c0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8-4 8.2-8.8 8.2z"/></svg>
              احصل على استشارة مجانية
            </a>
            <a href="#work" className="btn btn-ghost btn-lg">شاهد أعمالنا</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item"><strong>+30</strong><span>مشروع منجز</span></div>
            <div className="trust-item"><strong>+20</strong><span>عميل سعيد</span></div>
            <div className="trust-item"><strong>24/7</strong><span>دعم فني</span></div>
            <div className="trust-item"><strong>100%</strong><span>حلول مخصصة</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mock-phone">
            <div className="mock-notch"></div>
            <div className="mock-screen">
              <div className="mock-bar"></div>
              <div className="mock-card mock-card-1">
                <span className="mock-dot"></span>
                <div className="mock-lines"><span></span><span className="short"></span></div>
              </div>
              <div className="mock-card mock-card-2">
                <div className="mock-chart">
                  <span style={{ '--h': '40%' }}></span><span style={{ '--h': '65%' }}></span><span style={{ '--h': '35%' }}></span><span style={{ '--h': '80%' }}></span><span style={{ '--h': '55%' }}></span><span style={{ '--h': '92%' }}></span>
                </div>
              </div>
              <div className="mock-card mock-card-3">
                <div className="mock-lines"><span></span><span className="short"></span></div>
                <span className="mock-pill">✓</span>
              </div>
              <div className="mock-card mock-card-4">
                <div className="mock-lines"><span></span><span className="short"></span></div>
                <span className="mock-pill">✓</span>
              </div>
            </div>
          </div>
          <div className="float-chip chip-1">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6z" /></svg>
            <span>تطوير</span>
          </div>
          <div className="float-chip chip-2">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            <span>تصميم</span>
          </div>
          <div className="float-chip chip-3">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M13 2 3 14h7v8l10-12h-7z" /></svg>
            <span>أتمتة</span>
          </div>
          <div className="float-chip chip-4">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15-4-4 1.4-1.4L10 14.2l6.6-6.6L18 9l-8 8z" /></svg>
            <span>تحويل</span>
          </div>
        </div>
      </div>
    </section>
  );
}
