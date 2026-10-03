import Link from "next/link";
import s from "./contactPage.module.css";
import ContactSection from "../component/ContactSection";
export const metadata = {
  title: "Contact Careform | Let’s talk healthcare digital",
  description:
    "Tell Careform about your healthcare website, patient experience or software project.",
};
export default function ContactPage() {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.heroCopy}>
          <div className={s.eyebrow}>
            <span /> YOUR FIRST HELLO STARTS HERE
          </div>
          <h1>
            Let’s talk about
            <br />
            what could work
            <br />
            <em>better.</em>
          </h1>
          <p>
            Share the idea, the sticking point or the “we’re not quite sure
            yet.” We’ll take it from there, together.
          </p>
          <div className={s.reply}>
            <div className={s.replyIcon}>✳</div>
            <div>
              <b>A real person reads every note.</b>
              <span>We’ll get back to you as soon as we can.</span>
            </div>
          </div>
          <div className={s.direct}>
            <span>Prefer email?</span>
            <a href="mailto:hello@careform.studio">hello@careform.studio ↗</a>
          </div>
        </div>
        <div className={s.heroArt}>
          <svg
            className={s.careScene}
            viewBox="0 0 440 320"
            role="img"
            aria-labelledby="sceneTitle sceneDesc"
          >
            <title id="sceneTitle">Healthcare people and digital tools</title>
            <desc id="sceneDesc">
              A doctor and patient beside a clinic, with an appointment and care
              dashboard between them.
            </desc>
            <ellipse
              cx="220"
              cy="277"
              rx="189"
              ry="23"
              fill="#b7d7c2"
              opacity=".55"
            />
            <circle cx="214" cy="157" r="127" fill="#d1e8d5" />
            <circle
              cx="214"
              cy="157"
              r="103"
              fill="none"
              stroke="#acd0b6"
              strokeWidth="1.5"
            />
            <path
              d="M20 245V123q0-9 9-9h65q9 0 9 9v122"
              fill="#fffaf0"
              stroke="#94bea0"
              strokeWidth="2"
            />
            <path d="M41 114V91q0-8 8-8h25q8 0 8 8v23" fill="#c0dfc7" />
            <path
              className={s.pulse}
              d="M59 91V68m-12 11h24"
              stroke="#087f73"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <g fill="#d5e8d5">
              <rect x="35" y="135" width="16" height="19" rx="3" />
              <rect x="71" y="135" width="16" height="19" rx="3" />
              <rect x="35" y="169" width="16" height="19" rx="3" />
              <rect x="71" y="169" width="16" height="19" rx="3" />
            </g>
            <path d="M53 245v-33q0-14 14-14t14 14v33" fill="#e6c5ad" />
            <g className={s.doctor}>
              <path
                d="M101 259q4-59 40-59t40 59"
                fill="#f7fbf4"
                stroke="#78a98b"
                strokeWidth="2"
              />
              <path
                d="M126 201l15 22 15-22"
                fill="none"
                stroke="#79aa8a"
                strokeWidth="2"
              />
              <circle cx="141" cy="173" r="23" fill="#e7b99c" />
              <path
                d="M119 170q1-26 23-26 20 1 22 24-9-8-19-8-10 11-26 10"
                fill="#244c42"
              />
              <path
                d="M133 174h1m14 0h1"
                stroke="#123b39"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M135 186q6 5 12 0"
                fill="none"
                stroke="#a35f54"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M143 204v26q15 7 16 21"
                fill="none"
                stroke="#087f73"
                strokeWidth="2.5"
              />
              <circle cx="158" cy="252" r="4" fill="#ff8068" />
            </g>
            <g className={s.patient}>
              <path d="M321 259q3-56 39-56t39 56" fill="#f2a18b" />
              <circle cx="360" cy="172" r="22" fill="#9b654d" />
              <path
                d="M339 170q2-25 22-25 18 0 21 23-12-9-22-8-9 9-21 10"
                fill="#3c302c"
              />
              <path
                d="M352 174h1m14 0h1"
                stroke="#123b39"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M353 184q6 5 12 0"
                fill="none"
                stroke="#774a3c"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <g className={s.dashboard}>
              <rect
                x="151"
                y="194"
                width="167"
                height="103"
                rx="11"
                fill="#123b39"
              />
              <rect
                x="158"
                y="201"
                width="153"
                height="86"
                rx="7"
                fill="#fffdf6"
              />
              <rect
                x="203"
                y="292"
                width="62"
                height="5"
                rx="2.5"
                fill="#8db99a"
              />
              <text
                x="171"
                y="219"
                fill="#4d8271"
                fontSize="7"
                fontFamily="Arial"
                letterSpacing="1"
              >
                PATIENT OVERVIEW
              </text>
              <text
                x="171"
                y="235"
                fill="#123b39"
                fontSize="11"
                fontWeight="700"
                fontFamily="Arial"
              >
                Your care, connected.
              </text>
              <rect
                x="171"
                y="245"
                width="63"
                height="28"
                rx="5"
                fill="#e5f1e6"
              />
              <circle cx="182" cy="258" r="6" fill="#ff8068" />
              <rect
                x="193"
                y="253"
                width="33"
                height="3"
                rx="1.5"
                fill="#7d9b89"
              />
              <rect
                x="193"
                y="260"
                width="25"
                height="3"
                rx="1.5"
                fill="#b5c8b9"
              />
              <rect
                x="241"
                y="245"
                width="58"
                height="28"
                rx="5"
                fill="#f2f0d7"
              />
              <text
                x="248"
                y="256"
                fill="#5d7b68"
                fontSize="5.5"
                fontFamily="Arial"
              >
                NEXT VISIT
              </text>
              <text
                x="248"
                y="266"
                fill="#123b39"
                fontSize="7"
                fontWeight="700"
                fontFamily="Arial"
              >
                10:30 am
              </text>
            </g>
            <circle
              className={s.sceneSpark}
              cx="370"
              cy="92"
              r="17"
              fill="#d8f36a"
            />
            <path
              d="M370 82v20m-10-10h20"
              stroke="#087f73"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="117" cy="102" r="8" fill="#ff8068" />
            <circle cx="303" cy="123" r="5" fill="#087f73" />
          </svg>
          <span className={s.artCaption}>
            CARE TEAMS, PATIENTS & THOUGHTFUL TECHNOLOGY
          </span>
        </div>
      </section>
      <section className={s.nextSteps}>
        <div className={s.nextIntro}>
          <div className={s.eyebrow}>WHAT HAPPENS NEXT</div>
          <h2>
            A small note can
            <br />
            start <em>good work.</em>
          </h2>
          <p>
            No pitch deck. No pressure. Just a thoughtful first conversation
            about the care experience you want to improve.
          </p>
        </div>
        <div className={s.nextGrid}>
          <article>
            <span>01</span>
            <h3>We read your note</h3>
            <p>
              A real person gets the context and what you’re hoping to change.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>We get curious</h3>
            <p>
              We’ll ask a few useful questions about your team, patients and
              current tools.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>We find a next step</h3>
            <p>
              You’ll leave the first conversation with a clearer idea of where
              to begin.
            </p>
          </article>
        </div>
      </section>
      <ContactSection />

      <section className={s.bottom}>
        <div>
          <div className={s.eyebrow}>A LITTLE MORE ABOUT US</div>
          <h2>
            Small studio.
            <br />
            <em>Full attention.</em>
          </h2>
          <p>
            We work directly with healthcare teams to make thoughtful digital
            experiences and practical software.
          </p>
        </div>
        <Link href="/about">
          Get to know Careform <Arrow />
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
