import Link from "next/link";
import CostEstimator from "./CostEstimator";
import s from "./pricing.module.css";

export const metadata = {
  title: "Project costing | Careform",
  description:
    "Explore indicative budgets for healthcare websites, patient experiences and custom healthcare software.",
};

const inclusions = [
  [
    "01",
    "A clear scope",
    "We agree what is included, what is optional and what can wait for a later phase.",
  ],
  [
    "02",
    "Visible milestones",
    "You see the sequence, decision points and delivery checkpoints before work begins.",
  ],
  [
    "03",
    "A useful handover",
    "Launch planning and documentation are shaped around how your team will use the work.",
  ],
];

export default function PricingPage() {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.heroCopy}>
          <div className={s.eyebrow}>
            <span /> PROJECT COSTING · HEALTHCARE DIGITAL
          </div>
          <h1>
            Good planning
            <br />
            starts with a <em>clear range.</em>
          </h1>
          <p>
            Explore a realistic starting point for your project. Choose a
            service and scope to see an indicative budget before we shape a
            detailed proposal together.
          </p>
          <Link className={s.heroLink} href="#estimator">
            Estimate your project <Arrow />
          </Link>
        </div>
        <div className={s.heroArt} aria-hidden="true">
          <div className={s.orbit} />
          <div className={s.artCard}>
            <span>PROJECT PLAN</span>
            <b>
              Clear scope.
              <br />
              <em>Better decisions.</em>
            </b>
            <i>✳</i>
          </div>
          <div className={s.artTag}>THOUGHTFUL BY DESIGN</div>
        </div>
      </section>

      <section className={s.estimator} id="estimator">
        <div className={s.sectionHead}>
          <div className={s.eyebrow}>A USEFUL PLACE TO BEGIN</div>
          <h2>
            Compare feature-wise
            <br />
            <em>packages.</em>
          </h2>
          <p>
            Select a service to compare three scope levels, included features
            and planning ranges. Each package can be tailored to your workflows.
          </p>
        </div>
        <CostEstimator />
      </section>

      <section className={s.includes}>
        <div className={s.includesHead}>
          <div className={s.eyebrow}>HOW A PROPOSAL TAKES SHAPE</div>
          <h2>
            Clear scope.
            <br />
            <em>Clear decisions.</em>
          </h2>
          <p>
            Your proposal spells out the deliverables, assumptions and
            dependencies, so you can make a decision with the whole picture in
            view.
          </p>
        </div>
        <div className={s.includeList}>
          {inclusions.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <b aria-hidden="true">↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className={s.note}>
        <div className={s.noteMark}>✳</div>
        <div>
          <div className={s.eyebrow}>A NOTE ON ESTIMATES</div>
          <p>
            All figures are indicative planning ranges in INR. They are not a
            fixed quote and may change with scope, third-party services, data
            migration or integration requirements. We’ll confirm the scope and
            costs with you before work starts.
          </p>
        </div>
        <Link href="/contact">
          Talk through your project <Arrow />
        </Link>
      </section>

      <section className={s.cta}>
        <div className={s.eyebrow}>A CLEAR FIRST STEP</div>
        <h2>
          Tell us what you’re
          <br />
          hoping to <em>make easier.</em>
        </h2>
        <p>
          Share the idea, the challenge or the part you’re still working out.
          We’ll help you define a practical next step.
        </p>
        <Link className={s.ctaButton} href="/contact">
          Start a conversation <Arrow />
        </Link>
      </section>
    </main>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
