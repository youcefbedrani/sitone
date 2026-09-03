import { useState } from 'react';
import { FAQS } from '../data/siteData.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">الأسئلة الشائعة</p>
          <h2>عندك سؤال؟ الجواب غالباً هنا</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, index) => (
            <details
              key={item.q}
              className="faq-item"
              open={openIndex === index}
              onToggle={(e) => {
                if (e.target.open) {
                  setOpenIndex(index);
                }
              }}
            >
              <summary>{item.q}<span className="faq-icon" aria-hidden="true"></span></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
