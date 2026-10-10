import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../data";
import { ServiceArt } from "../visuals";
import s from "./detail.module.css";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const service = services.find((item) => item.slug === params.slug);
  return service
    ? { title: `${service.title} | Careform`, description: service.intro }
    : { title: "Service | Careform" };
}
export default function ServiceDetail({ params }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();
  const index = services.findIndex((item) => item.slug === service.slug);
  const next = services[(index + 1) % services.length];
  return (
    <main className={s.page}>
      <div className={s.crumb}>
        <Link href="/services">Services</Link>
        <span> / </span>
        {service.title}
      </div>
      <section className={`${s.hero} ${s[service.color]}`}>
        <div className={s.heroCopy}>
          <div className={s.eyebrow}>
            {service.number} / {service.label}
          </div>
          <h1>
            {service.title.split(" ").slice(0, -1).join(" ")}{" "}
            <em>{service.title.split(" ").slice(-1)}</em>
          </h1>
          <p>{service.intro}</p>
          <a
            className={s.button}
            href={`mailto:hello@careformstudio.com?subject=${encodeURIComponent(`Let’s talk about ${service.title.toLowerCase()}`)}`}
          >
            Talk about your project <Arrow />
          </a>
          <span className={s.forWho}>
            A GOOD FIT FOR
            <br />
            <b>{service.audience}</b>
          </span>
        </div>
        <div className={s.heroVisual}>
          <ServiceArt type={service.visual} />
          <span>CARE, MADE CLEAR</span>
        </div>
      </section>
      <section className={s.offer}>
        <div className={s.offerIntro}>
          <div className={s.eyebrow}>HOW WE CAN HELP</div>
          <h2>
            Thoughtful work.
            <br />
            <em>Useful outcomes.</em>
          </h2>
          <p>
            We shape the work around your team and your goals. Here are some of
            the ways we can help.
          </p>
        </div>
        <div className={s.offerList}>
          {service.offerings.map((item, i) => (
            <div key={item}>
              <span>0{i + 1}</span>
              <b>{item}</b>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>
      <section className={s.outcomes}>
        <div>
          <div className={s.eyebrow}>WHAT BETTER LOOKS LIKE</div>
          <h2>
            Made to move
            <br />
            things <em>forward.</em>
          </h2>
        </div>
        {service.outcomes.map((item, i) => (
          <article key={item}>
            <span>0{i + 1}</span>
            <b>{item}</b>
          </article>
        ))}
      </section>
      <section className={s.deliver}>
        <div className={s.deliverCopy}>
          <div className={s.eyebrow}>WHAT YOU TAKE AWAY</div>
          <h2>
            Clear deliverables.
            <br />
            <em>No guesswork.</em>
          </h2>
          <p>
            We keep the scope visible and the handover useful, so you know what
            you’re getting and how to build on it.
          </p>
          <div className={s.timeline}>
            <span>✳</span>
            <div>
              <small>PLANNING RANGE</small>
              <b>{service.timeline}</b>
            </div>
          </div>
        </div>
        <div className={s.deliverList}>
          {service.deliverables.map((item, i) => (
            <div key={item}>
              <span>✓</span>
              <b>{item}</b>
            </div>
          ))}
        </div>
      </section>
      <section className={s.process}>
        <div className={s.eyebrow}>A COLLABORATIVE WAY OF WORKING</div>
        <h2>
          Small steps.
          <br />
          <em>Good momentum.</em>
        </h2>
        <div className={s.steps}>
          <article>
            <span>01</span>
            <b>Listen & focus</b>
            <p>
              We learn how your team works and agree on the outcome that matters
              most.
            </p>
          </article>
          <article>
            <span>02</span>
            <b>Design & build</b>
            <p>
              We share work early, invite feedback and keep decisions grounded
              in real use.
            </p>
          </article>
          <article>
            <span>03</span>
            <b>Launch & learn</b>
            <p>
              We support the launch and help you plan sensible improvements from
              there.
            </p>
          </article>
        </div>
      </section>
      <section className={s.next}>
        <div>
          <div className={s.eyebrow}>NEXT UP</div>
          <h2>{next.title}</h2>
        </div>
        <Link href={`/services/${next.slug}`}>
          Explore this service <Arrow />
        </Link>
      </section>
      <section className={s.cta}>
        <div className={s.eyebrow}>READY WHEN YOU ARE</div>
        <h2>
          Let’s make a<br />
          <em>good start.</em>
        </h2>
        <p>
          Tell us a little about your team and what you want to improve. We’ll
          take it from there.
        </p>
        <a href="mailto:hello@careformstudio.com" className={s.buttonLight}>
          Start a conversation <Arrow />
        </a>
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
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
