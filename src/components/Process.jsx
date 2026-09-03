import { PROCESS_STEPS } from '../data/siteData.js';
import useReveal from '../hooks/useReveal.js';

function ProcessStep({ step }) {
  const ref = useReveal();
  return (
    <li ref={ref}>
      <span className="step-index">{step.num}</span>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </li>
  );
}

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">كيف نعمل</p>
          <h2>من أول رسالة إلى التسليم</h2>
          <p className="section-sub">عملية واضحة وشفافة — تعرف بالضبط ماذا يحدث في كل مرحلة.</p>
        </div>
        <ol className="process-steps">
          {PROCESS_STEPS.map(step => <ProcessStep key={step.num} step={step} />)}
        </ol>
      </div>
    </section>
  );
}
