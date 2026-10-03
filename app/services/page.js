import Link from "next/link";
import { services } from "./data";
import { ServiceArt } from "./visuals";
import s from "./services.module.css";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Healthcare web design & software",
  description:
    "Healthcare websites, patient experience design and custom software for doctors, clinics, hospitals, diagnostic centres and health startups.",
  path: "/services",
});
export default function ServicesPage() {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.eyebrow}>HEALTHCARE DIGITAL, BUILT AROUND PEOPLE</div>
        <h1>
          Good care needs
          <br />
          good <em>digital.</em>
        </h1>
        <p>
          Websites, patient experiences and custom software to help healthcare
          teams connect with people and do their best work.
        </p>
        <a className={s.button} href="#services">
          Explore our services ↓
        </a>
        <div className={s.heroArt}>
          <ServiceArt type="patient" />
          <span>DESIGN · DEVELOPMENT · PARTNERSHIP</span>
        </div>
      </section>
      <section className={s.listing} id="services">
        <div className={s.sectionHead}>
          <div className={s.eyebrow}>WHAT WE DO</div>
          <h2>
            Choose a place
            <br />
            to <em>begin.</em>
          </h2>
          <p>
            Start with the challenge in front of you. We’ll help you shape the
            right next step, then build something useful around it.
          </p>
        </div>
        <div className={s.cards}>
          {services.map((service) => (
            <article className={s.card} key={service.slug}>
              <div className={`${s.art} ${s[service.color]}`}>
                <ServiceArt type={service.visual} />
                <span>{service.number}</span>
              </div>
              <div className={s.cardBody}>
                <div className={s.cardLabel}>{service.label}</div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <Link href={`/services/${service.slug}`} className={s.cardLink}>
                  Explore service <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={s.promise}>
        <span>✳</span>
        <div>
          <small>ONE SMALL, SENIOR TEAM</small>
          <h2>
            Thoughtful from first sketch
            <br />
            to the day it goes live.
          </h2>
        </div>
        <p>
          Clear communication, considered design, practical engineering and a
          real person to call when you need a hand.
        </p>
      </section>
      <section className={s.bottom}>
        <div className={s.eyebrow}>HAVE A QUESTION OR A HALF-FORMED IDEA?</div>
        <h2>
          Let’s find your
          <br />
          <em>next step.</em>
        </h2>
        <p>
          Tell us what you’re trying to make easier. We’ll help you work out
          where to start.
        </p>
        <a href="mailto:hello@careform.studio" className={s.buttonLight}>
          Start a conversation ↗
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
