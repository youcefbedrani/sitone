import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/siteData.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, message } = form;

    if (!name || !phone || !service || !message) {
      alert('المرجو ملء جميع الحقول المطلوبة.');
      return;
    }

    const text = encodeURIComponent(
      `مرحباً OnTime Digital Solutions،\n\n` +
      `الاسم: ${name}\n` +
      `رقم الهاتف: ${phone}\n` +
      `الخدمة المطلوبة: ${service}\n\n` +
      `تفاصيل المشروع:\n${message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">تواصل معنا</p>
          <h2>جاهز تبدأ مشروعك؟</h2>
          <p className="contact-sub">املأ النموذج وسنراسلك خلال ساعات — أو راسلنا مباشرة على واتساب.</p>
          <div className="contact-points">
            <div className="contact-point">
              <span className="contact-point-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
              </span>
              <div>
                <strong>نخدم كل الجزائر</strong>
                <span>وعملاء حول العالم عن بعد</span>
              </div>
            </div>
            <div className="contact-point">
              <span className="contact-point-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.4.9.9-3.3-.2-.3C3.7 14.7 3.2 13.4 3.2 12c0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8-4 8.2-8.8 8.2z" /></svg>
              </span>
              <div>
                <strong>رد سريع</strong>
                <span>نرد على استفسارك خلال ساعات العمل</span>
              </div>
            </div>
            <div className="contact-point">
              <span className="contact-point-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15-4-4 1.4-1.4L10 14.2l6.6-6.6L18 9l-8 8z" /></svg>
              </span>
              <div>
                <strong>استشارة مجانية</strong>
                <span>بدون أي التزام — نتحدث عن فكرتك فقط</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">الاسم الكامل *</label>
              <input type="text" id="name" name="name" placeholder="مثال: أحمد بن علي" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">رقم الهاتف / واتساب *</label>
              <input type="tel" id="phone" name="phone" placeholder="05XX XX XX XX" value={form.phone} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="service">الخدمة المطلوبة *</label>
            <select id="service" name="service" value={form.service} onChange={handleChange} required>
              <option value="" disabled>اختر الخدمة...</option>
              <option value="موقع إلكتروني">موقع إلكتروني</option>
              <option value="متجر إلكتروني">متجر إلكتروني</option>
              <option value="تطبيق موبايل">تطبيق موبايل</option>
              <option value="نظام ERP">نظام ERP</option>
              <option value="نظام CRM">نظام CRM</option>
              <option value="تسويق رقمي">تسويق رقمي</option>
              <option value="أتمتة بالذكاء الاصطناعي">أتمتة بالذكاء الاصطناعي</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">اشرح لنا فكرتك *</label>
            <textarea id="message" name="message" rows="4" placeholder="مثال: أريد موقعاً لمطعمي مع إمكانية حجز الطاولات..." value={form.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg form-submit">
            <svg viewBox="0 0 24 24" className="ico-sm" aria-hidden="true"><path fill="currentColor" d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5  ️0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.4.9.9-3.3-.2-.3C3.7 14.7 3.2 13.4 3.2 12c0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8-4 8.2-8.8 8.2z"/></svg>
            أرسل الطلب عبر واتساب
          </button>
          <p className="form-note">بالضغط على الزر، سيتم فتح واتساب برسالة جاهزة تحتوي على معلوماتك.</p>
        </form>
      </div>
    </section>
  );
}
