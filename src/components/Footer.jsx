import { WHATSAPP_LINK } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <a href="#top" className="brand" aria-label="OnTime Digital Solutions">
          <span className="brand-mark">
            <svg viewBox="0 0 100 100" className="brand-logo" aria-hidden="true">
              <rect width="100" height="100" rx="24" fill="#0A0E1A" />
              <path d="M38 30a20 20 0 1 0 0 40 20 20 0 0 0 0-40z" fill="none" stroke="#F2F5FA" strokeWidth="9" />
              <path d="M56 26h24M68 26v38" stroke="#2E6BFF" strokeWidth="9" strokeLinecap="round" />
            </svg>
          </span>
          <span className="brand-text">OnTime <em>Digital</em></span>
        </a>
        <p className="footer-tag">حلول رقمية متكاملة — من الفكرة إلى الإطلاق</p>
        <div className="footer-links">
          <a href="#services">خدماتنا</a>
          <a href="#work">أعمالنا</a>
          <a href="#pricing">الباقات</a>
          <a href="#faq">الأسئلة الشائعة</a>
        </div>
        <a href={WHATSAPP_LINK('')} target="_blank" rel="noopener" className="footer-wa">تواصل عبر واتساب</a>
      </div>
      <div className="container">
        <p className="footer-copy">© 2026 OnTime Digital Solutions. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
