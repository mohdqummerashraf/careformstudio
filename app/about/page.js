import Link from "next/link";
import s from "./about.module.css";
import ContactSection from "../component/ContactSection";
export const metadata = {
  title: "About Careform | Healthcare technology, made human",
  description:
    "Meet Careform, an independent healthcare digital studio designing useful, welcoming websites and software for better care.",
};
export default function AboutPage() {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.eyebrow}>
          <span /> A SMALL studio FOR A BIG HUMAN NEED
        </div>
        <h1>
          Healthcare has
          <br />
          enough hard things.
          <br />
          <em>Digital can help.</em>
        </h1>
        <p>
          We’re Careform: a small, independent digital studio helping healthcare
          teams make useful technology feel more human.
        </p>
        <Link className={s.button} href="/contact-us">
          Come say hello <Arrow />
        </Link>
        <div className={s.heroArt}>
          <div className={s.orbit} />
          <div className={s.center}>
            care
            <br />
            <b>+</b>
            <br />
            clarity
          </div>
          <span className={s.spark}>✳</span>
          <span className={s.sticker}>
            BUILT AROUND
            <br />
            REAL PEOPLE
          </span>
        </div>
      </section>
      <section className={s.story}>
        <div className={s.storyTitle}>
          <div className={s.eyebrow}>WHY WE’RE HERE</div>
          <h2>
            Technology should
            <br />
            make care feel <em>closer.</em>
          </h2>
        </div>
        <div className={s.storyCopy}>
          <p>
            Finding care can be confusing. Running a practice can be full of
            little workarounds. And the digital tools around healthcare don’t
            always make either experience easier.
          </p>
          <p>
            Careform exists to help change that, one thoughtful project at a
            time. We bring design and software development together to make
            clearer websites, more welcoming patient journeys and practical
            tools for care teams.
          </p>
          <p>
            We believe the best work starts by listening to the people who will
            use it—and stays useful by keeping them involved as it takes shape.
          </p>
        </div>
      </section>
      <section className={s.principles}>
        <div className={s.principleHead}>
          <div className={s.eyebrow}>WHAT WE BELIEVE</div>
          <h2>
            Good work feels
            <br />
            <em>good to use.</em>
          </h2>
          <p>
            Our principles keep the work grounded in what matters: people,
            clarity and lasting usefulness.
          </p>
        </div>
        <div className={s.principleList}>
          <article>
            <span>01</span>
            <div>
              <h3>People before pixels</h3>
              <p>
                We get to know the patient, practitioner and team behind the
                request before shaping the solution.
              </p>
            </div>
            <b>♡</b>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Clear beats clever</h3>
              <p>
                Simple language, obvious next steps and considerate interfaces
                earn trust.
              </p>
            </div>
            <b>✳</b>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Useful is beautiful</h3>
              <p>
                We care about craft, and we care that what we make works in the
                rhythm of a real day.
              </p>
            </div>
            <b>⌘</b>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Better, together</h3>
              <p>
                We collaborate closely, share work early and leave room for your
                expertise in every decision.
              </p>
            </div>
            <b>↗</b>
          </article>
        </div>
      </section>
      <section className={s.impact}>
        <div className={s.impactHead}>
          <div className={s.eyebrow}>WHERE THOUGHTFUL DIGITAL HELPS</div>
          <h2>
            Better experiences
            <br />
            at every <em>touchpoint.</em>
          </h2>
          <p>
            Healthcare is a connected experience. We look at the moments around
            care—not just the screen—and make the useful next step easier to
            see.
          </p>
        </div>
        <div className={s.impactGrid}>
          <article>
            <div className={s.impactIcon}>
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="15" r="8" />
                <path d="M9 41c1-9 6-14 15-14s14 5 15 14" />
                <path d="M34 9h8m-4-4v8" />
              </svg>
            </div>
            <span>FOR PATIENTS</span>
            <h3>Confidence before care</h3>
            <p>
              Clear information, welcoming design and journeys that help people
              understand what to do next.
            </p>
          </article>
          <article>
            <div className={s.impactIcon}>
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect x="7" y="9" width="34" height="29" rx="4" />
                <path d="M14 17h20M14 23h11M14 30h16" />
                <circle cx="34" cy="29" r="4" />
              </svg>
            </div>
            <span>FOR CARE TEAMS</span>
            <h3>More room for good work</h3>
            <p>
              Practical tools and simpler workflows that respect the pace and
              responsibilities of care.
            </p>
          </article>
          <article>
            <div className={s.impactIcon}>
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="24" r="17" />
                <path d="M24 13v22M13 24h22" />
                <circle cx="24" cy="24" r="5" />
              </svg>
            </div>
            <span>FOR THE SERVICE</span>
            <h3>A stronger foundation</h3>
            <p>
              Digital foundations designed to adapt as your services, teams and
              patient needs evolve.
            </p>
          </article>
        </div>
      </section>
      <section className={s.way}>
        <div className={s.wayArt}>
          <div className={s.wayCircle}>
            <span>✳</span>
            <b>
              Dedicated Team.
              <br />
              Full <em>care.</em>
            </b>
          </div>
          <div className={s.wayNote}>
            DIRECT ACCESS
            <br />
            FROM DAY ONE
          </div>
        </div>
        <div className={s.wayCopy}>
          <div className={s.eyebrow}>A DIFFERENT KIND OF PARTNER</div>
          <h2>
            One Dedicated Team.
            <br />
            <em>All the way through.</em>
          </h2>
          <p>
            You work directly with the people thinking through, designing and
            building your project. That means fewer handoffs, honest
            conversations and decisions made with the whole picture in mind.
          </p>
          <p>
            We can join you for a focused website or stay alongside your team as
            a digital product takes shape. Either way, we make the plan together
            and keep the next step clear.
          </p>
          <Link className={s.inline} href="/services">
            See how we can help <Arrow />
          </Link>
        </div>
      </section>
      <section className={s.audience}>
        <div className={s.eyebrow}>GOOD COMPANY FOR</div>
        <div>
          <span>Independent doctors</span>
          <i>✳</i>
          <span>Clinics & hospitals</span>
          <i>✳</i>
          <span>Diagnostics teams</span>
          <i>✳</i>
          <span>Health innovators</span>
        </div>
      </section>
      <section className={s.cta}>
        <div className={s.eyebrow}>
          A GOOD THING CAN START WITH A CONVERSATION
        </div>
        <h2>
          Tell us what you
          <br />
          want to make <em>better.</em>
        </h2>
        <p>
          Big plan, small frustration or still figuring it out? We’re happy to
          start wherever you are.
        </p>
        <Link className={s.buttonLight} href="/contact-us">
          Let’s talk about it <Arrow />
        </Link>
      </section>
      <ContactSection variant="about" />
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
