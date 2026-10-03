import ContactSection from "./component/ContactSection";
import s from "./page.module.css";
const Arrow = ({ up = false }) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d={up ? "M7 17 17 7M7 7h10v10" : "M5 12h14M13 6l6 6-6 6"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQS = [
  {
    q: "What kind of healthcare teams do you work with?",
    a: "We work with independent practitioners, clinics, hospitals, diagnostics providers and healthcare startups. We shape the work around your team, your patients and the challenge you want to solve.",
  },
  {
    q: "Can we start with a website and expand later?",
    a: "Yes. A focused website can be a useful first step, with a clear foundation for patient tools, workflow software or other digital services as your needs grow.",
  },
  {
    q: "Do I need a detailed brief before getting in touch?",
    a: "No. A rough idea, a recurring frustration or a goal you are exploring is enough to start a conversation. We can help clarify the scope together.",
  },
  {
    q: "Can you connect a new tool to our existing systems?",
    a: "We can explore integrations with your current tools. We review the available systems and requirements first, then confirm what is practical before it becomes part of the scope.",
  },
];
export default function Home() {
  return (
    <main className={s.page}>
      <section className={s.hero} id="top">
        <div className={s.heroText}>
          <div className={s.eyebrow}>
            <span /> DIGITAL HEALTH, MADE HUMAN <b>✳</b>
          </div>
          <h1>
            Care deserves
            <br />a <em>better</em>
            <br />
            digital side.
          </h1>
          <p>
            We design and build the websites, patient experiences and custom
            software that help healthcare teams move forward.
          </p>
          <div className={s.actions}>
            <a className={s.primary} href="#services">
              See how we help <Arrow />
            </a>
            <a className={s.quiet} href="/work">
              A little of our work <span>↓</span>
            </a>
          </div>
          <div className={s.heroProof}>
            <div className={s.avatars}>
              <i>DR</i>
              <i>+</i>
              <i>✳</i>
            </div>
            <span>
              Thoughtful partners for
              <br />
              <b>better care experiences</b>
            </span>
          </div>
        </div>
        <div className={s.heroArt}>
          <div className={s.artBlob} />
          <div className={s.artSun}>✳</div>
          <div className={s.artTitle}>care, connected.</div>
          <div className={s.phone}>
            <div className={s.phoneTop}>
              <span>9:41</span>
              <span>•••</span>
            </div>
            <div className={s.phoneBrand}>
              <b>northstar</b>
              <span>HEALTH</span>
              <i>☰</i>
            </div>
            <div className={s.welcome}>
              A little more
              <br />
              <em>you time.</em>
            </div>
            <div className={s.phoneCopy}>
              Care that fits your life.
              <br />
              Right when you need it.
            </div>
            <div className={s.phoneDoc}>
              <div className={s.docAvatar}>MS</div>
              <div>
                <small>YOUR CARE TEAM</small>
                <b>Dr. Meera Shah</b>
                <span>Cardiology · 4.9 ★</span>
              </div>
              <i>↗</i>
            </div>
            <div className={s.phoneButton}>
              Book an appointment <Arrow />
            </div>
            <div className={s.phoneNav}>
              <span>
                ⌂<small>Home</small>
              </span>
              <span>
                ♡<small>My care</small>
              </span>
              <span>
                ◷<small>Visits</small>
              </span>
              <span>
                ☻<small>Profile</small>
              </span>
            </div>
          </div>
          <div className={s.noteCard}>
            <span>✳</span>
            <div>
              <b>Designed to feel human</b>
              <small>Built around real care</small>
            </div>
          </div>
          <div className={s.statCard}>
            <small>THE DIFFERENCE?</small>
            <b>
              Less friction.
              <br />
              <em>More connection.</em>
            </b>
          </div>
          <div className={s.artFoot}>
            <span>STRATEGY · DESIGN · SOFTWARE</span>
            <span>01 / A BETTER FIRST HELLO</span>
          </div>
        </div>
      </section>
      <div className={s.trust}>
        <span>GOOD COMPANY FOR</span>
        <div>
          <b>Doctors & practices</b>
          <i>✳</i>
          <b>Clinics & hospitals</b>
          <i>✳</i>
          <b>Diagnostics</b>
          <i>✳</i>
          <b>Health startups</b>
        </div>
      </div>
      <section className={s.services} id="services">
        <div className={s.sectionLead}>
          <div>
            <div className={s.label}>
              WHAT WE MAKE <span>01 — 03</span>
            </div>
            <h2>
              Thoughtful tech.
              <br />
              <em>Real-world care.</em>
            </h2>
          </div>
          <p>
            From your first hello online to the tools your team uses every day,
            we bring the right mix of design and development to make healthcare
            work better.
          </p>
        </div>
        <div className={s.serviceGrid}>
          <article className={s.service}>
            <div className={s.serviceTop}>
              <b>01 / SHOW UP WELL</b>
              <span className={s.sunIcon}>✳</span>
            </div>
            <div className={s.serviceVisual}>
              <div className={s.browser}>
                <div className={s.browserTop}>
                  <span>● ● ●</span>
                  <span>yourpractice.health</span>
                </div>
                <div className={s.browserBody}>
                  <small>CARE, CLOSER TO HOME</small>
                  <b>
                    Good health
                    <br />
                    starts <em>here.</em>
                  </b>
                  <i>Find a doctor →</i>
                  <div className={s.browserCircle} />
                </div>
              </div>
            </div>
            <h3>Healthcare websites</h3>
            <p>
              Make a confident first impression, explain what makes your care
              different and turn visits into enquiries.
            </p>
            <div className={s.tags}>
              <span>Clinic & hospital sites</span>
              <span>Doctor profiles</span>
              <span>SEO foundations</span>
            </div>
            <a className={s.cardLink} href="/services/healthcare-websites">
              Explore websites <Arrow up />
            </a>
          </article>
          <article className={`${s.service} ${s.featured}`}>
            <div className={s.serviceTop}>
              <b>02 / MAKE IT EASIER</b>
              <span className={s.heartIcon}>♡</span>
            </div>
            <div className={s.serviceVisual}>
              <div className={s.portal}>
                <div className={s.portalHead}>
                  <span>Good morning, Asha</span>
                  <b>☀</b>
                </div>
                <small>YOUR NEXT VISIT</small>
                <div className={s.visit}>
                  <span>
                    THU
                    <br />
                    <b>24</b>
                  </span>
                  <div>
                    <b>Dr. Anika Rao</b>
                    <small>Dermatology · 10:30 am</small>
                  </div>
                  <i>↗</i>
                </div>
                <div className={s.portalPills}>
                  <span>Care plan</span>
                  <span>
                    Messages <b>2</b>
                  </span>
                  <span>Results</span>
                </div>
              </div>
              <div className={s.sparkle}>✳</div>
            </div>
            <h3>Patient experiences</h3>
            <p>
              Make the journey from “I need care” to “I feel looked after”
              clear, calm and connected.
            </p>
            <div className={s.tags}>
              <span>Appointment flows</span>
              <span>Patient portals</span>
              <span>Service design</span>
            </div>
            <a className={s.cardLink} href="/services/patient-experiences">
              Explore experiences <Arrow up />
            </a>
          </article>
          <article className={s.service}>
            <div className={s.serviceTop}>
              <b>03 / HELP GOOD WORK FLOW</b>
              <span className={s.codeIcon}>⌘</span>
            </div>
            <div className={s.serviceVisual}>
              <div className={s.dashboard}>
                <div className={s.dashTitle}>
                  <span>Practice overview</span>
                  <b>•••</b>
                </div>
                <div className={s.dashStats}>
                  <div>
                    <small>THIS WEEK</small>
                    <b>148</b>
                    <i>appointments</i>
                  </div>
                  <div>
                    <small>NEW PATIENTS</small>
                    <b>+24</b>
                    <i>this month</i>
                  </div>
                </div>
                <div className={s.bars}>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className={s.dashFoot}>
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
            <h3>Custom software</h3>
            <p>
              Replace repetitive admin and disconnected systems with practical
              tools made for your team.
            </p>
            <div className={s.tags}>
              <span>Web applications</span>
              <span>Workflow tools</span>
              <span>Dashboards</span>
            </div>
            <a className={s.cardLink} href="/services/healthcare-software">
              Explore software <Arrow up />
            </a>
          </article>
        </div>
      </section>
      <div className={s.allServices}>
        <a href="/services">
          Explore all twelve services <Arrow up />
        </a>
      </div>
      <section className={s.capabilities}>
        <div className={s.capIntro}>
          <div className={s.label}>HEALTHCARE, UNDERSTOOD</div>
          <h2>
            Built around
            <br />
            <em>the whole picture.</em>
          </h2>
          <p>
            Good healthcare technology respects everyone in the room: the
            patient, the practitioner and the team keeping things moving.
          </p>
          <a href="/contact-us">
            Tell us what you’re working on <Arrow />
          </a>
          <div className={s.orbit}>
            <div>
              PEOPLE
              <br />
              <b>+</b>
              <br />
              PURPOSE
            </div>
            <i>✳</i>
          </div>
        </div>
        <div className={s.capList}>
          <article>
            <span className={s.capNum}>01</span>
            <div>
              <h3>Earn patient trust</h3>
              <p>
                Accessible content and thoughtful journeys that answer real
                questions and make the next step feel clear.
              </p>
            </div>
            <span className={s.capSymbol}>♡</span>
          </article>
          <article>
            <span className={s.capNum}>02</span>
            <div>
              <h3>Support your care team</h3>
              <p>
                Useful, intuitive tools that reduce busywork and leave more room
                for meaningful patient care.
              </p>
            </div>
            <span className={s.capSymbol}>✳</span>
          </article>
          <article>
            <span className={s.capNum}>03</span>
            <div>
              <h3>Grow with confidence</h3>
              <p>
                A flexible digital foundation that can evolve with your
                services, your patients and your ambitions.
              </p>
            </div>
            <span className={s.capSymbol}>↗</span>
          </article>
        </div>
      </section>
      <section className={s.work} id="work">
        <div className={s.workLead}>
          <div>
            <div className={s.label}>
              A FEW GOOD THINGS <span>SELECTED WORK</span>
            </div>
            <h2>
              Made with care.
              <br />
              <em>Ready for people.</em>
            </h2>
          </div>
          <p>
            Every healthcare team has its own story. Here’s a glimpse of how
            digital can help tell it.
          </p>
        </div>
        <div className={s.workGrid}>
          <article>
            <div className={s.workImage + " " + s.workOne}>
              <div className={s.workDecor}>
                A more
                <br />
                <em>human</em>
                <br />
                kind of health.
              </div>
              <div className={s.workShape} />
              <div className={s.workMini}>
                everwell <span>+</span>
                <hr />
                Family medicine
                <br />
                <b>Find care that feels right →</b>
              </div>
              <span className={s.workLabel}>BRAND + WEBSITE</span>
            </div>
            <div className={s.workMeta}>
              <div>
                <h3>Everwell Family Clinic</h3>
                <p>
                  A welcoming digital front door for a growing family practice.
                </p>
              </div>
              <Arrow up />
            </div>
          </article>
          <article>
            <div className={s.workImage + " " + s.workTwo}>
              <div className={s.workDash}>
                <div>
                  <small>GOOD MORNING, AMINA</small>
                  <b>Your practice at a glance</b>
                </div>
                <div className={s.workDashStats}>
                  <span>
                    <small>APPOINTMENTS</small>
                    <b>128</b>
                    <i>↑ 12%</i>
                  </span>
                  <span>
                    <small>NEW PATIENTS</small>
                    <b>36</b>
                    <i>↑ 8%</i>
                  </span>
                </div>
                <div className={s.chart}>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <span className={s.workLabel}>CLINIC WEB APPLICATION</span>
            </div>
            <div className={s.workMeta}>
              <div>
                <h3>Goodwell Practice Portal</h3>
                <p>A calmer way to keep the day moving.</p>
              </div>
              <Arrow up />
            </div>
          </article>
        </div>
        <div className={s.workNote}>
          <span>✳</span> These are illustrative concept projects. Let’s make
          something true to your team.
        </div>
        <div className={s.workAll}>
          <a href="/work">
            Explore the project portfolio <Arrow up />
          </a>
        </div>
      </section>
      <section
        className={s.outcomes}
        aria-label="What better digital care makes possible"
      >
        <div className={s.outcomesLead}>
          <div className={s.label}>THE DIFFERENCE GOOD DIGITAL MAKES</div>
          <h2>
            A smoother day
            <br />
            <em>for everyone.</em>
          </h2>
        </div>
        <article>
          <span>01 / FOR PATIENTS</span>
          <b>Clear next steps.</b>
          <p>
            People can find the right service, understand what to expect and
            reach your team with confidence.
          </p>
        </article>
        <article>
          <span>02 / FOR YOUR TEAM</span>
          <b>Less friction.</b>
          <p>
            Practical digital tools help reduce repetitive admin and keep
            important information within reach.
          </p>
        </article>
        <article>
          <span>03 / FOR YOUR PRACTICE</span>
          <b>Room to grow.</b>
          <p>
            A considered digital foundation makes it easier to improve, expand
            and adapt as care changes.
          </p>
        </article>
      </section>
      <section className={s.approach} id="approach">
        <div className={s.approachLead}>
          <div className={s.label}>HOW WE GET THERE</div>
          <h2>
            Clear steps.
            <br />
            <em>Good chemistry.</em>
          </h2>
          <p>
            Direct access to the people doing the work, thoughtful checkpoints
            and no mystery about what happens next.
          </p>
          <div className={s.approachBadge}>
            FOCUSED &
            <br />
            <b>FULL ATTENTION</b>
          </div>
        </div>
        <div className={s.steps}>
          <article>
            <span>01</span>
            <div>
              <h3>Listen closely</h3>
              <p>
                We learn how your team works, what patients need and where the
                friction lives.
              </p>
            </div>
            <b>◉</b>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Find the right shape</h3>
              <p>
                We agree on the goals, map a clear plan and design around real
                people.
              </p>
            </div>
            <b>✳</b>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Build together</h3>
              <p>
                We share progress early, invite feedback and make the details
                feel right.
              </p>
            </div>
            <b>⌘</b>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Launch & keep improving</h3>
              <p>
                We help you go live, learn from real use and keep making things
                better.
              </p>
            </div>
            <b>↗</b>
          </article>
        </div>
      </section>
      <section className={s.about} id="about">
        <div className={s.aboutArt}>
          <svg
            className={s.aboutIllustration}
            viewBox="0 0 520 310"
            role="img"
            aria-labelledby="aboutSceneTitle aboutSceneDesc"
          >
            <title id="aboutSceneTitle">
              Healthcare teams and thoughtful digital tools
            </title>
            <desc id="aboutSceneDesc">
              A doctor and patient connected by a simple digital care dashboard.
            </desc>
            <ellipse
              cx="260"
              cy="276"
              rx="211"
              ry="17"
              fill="#a9d1bb"
              opacity=".55"
            />
            <circle cx="260" cy="151" r="116" fill="#dff0df" />
            <circle
              cx="260"
              cy="151"
              r="91"
              fill="none"
              stroke="#b6d7c1"
              strokeWidth="1.5"
            />
            <g className={s.aboutDoctor}>
              <circle cx="106" cy="116" r="24" fill="#e8b89a" />
              <path
                d="M82 115q1-27 25-27 22 1 24 25-12-8-23-7-11 10-26 9"
                fill="#264d43"
              />
              <path
                d="M68 259q4-91 39-91t40 91"
                fill="#fffdf6"
                stroke="#7eae91"
                strokeWidth="2"
              />
              <path
                d="m94 171 13 20 14-20m-14 20v43"
                fill="none"
                stroke="#087f73"
                strokeWidth="2.5"
              />
              <path
                d="M98 118h1m14 0h1m-12 12q6 5 12 0"
                fill="none"
                stroke="#684b3f"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <g className={s.aboutPatient}>
              <circle cx="414" cy="118" r="23" fill="#a86e53" />
              <path
                d="M391 116q1-26 24-26 21 1 23 24-12-8-23-6-10 9-24 8"
                fill="#3d302c"
              />
              <path d="M374 259q4-88 40-88t40 88" fill="#f2a18b" />
              <path
                d="M406 119h1m14 0h1m-12 12q6 5 12 0"
                fill="none"
                stroke="#342e2a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <g className={s.aboutDashboard}>
              <rect
                x="167"
                y="116"
                width="188"
                height="124"
                rx="13"
                fill="#123b39"
              />
              <rect
                x="175"
                y="124"
                width="172"
                height="102"
                rx="8"
                fill="#fffdf6"
              />
              <text
                x="190"
                y="146"
                fill="#628674"
                fontSize="7"
                fontFamily="Arial"
                letterSpacing="1.1"
              >
                YOUR CARE, CONNECTED
              </text>
              <text
                x="190"
                y="164"
                fill="#123b39"
                fontSize="12"
                fontWeight="700"
                fontFamily="Arial"
              >
                A clearer next step.
              </text>
              <rect
                x="190"
                y="177"
                width="72"
                height="32"
                rx="6"
                fill="#e6f1e5"
              />
              <circle cx="204" cy="193" r="6" fill="#ff8068" />
              <rect
                x="216"
                y="188"
                width="36"
                height="3"
                rx="1.5"
                fill="#81a38e"
              />
              <rect
                x="216"
                y="196"
                width="28"
                height="3"
                rx="1.5"
                fill="#b8cbbd"
              />
              <rect
                x="270"
                y="177"
                width="63"
                height="32"
                rx="6"
                fill="#f1f1dc"
              />
              <path
                d="M282 193h10m-5-5v10"
                stroke="#087f73"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="299"
                y="191"
                width="23"
                height="3"
                rx="1.5"
                fill="#9bb4a1"
              />
            </g>
            <circle
              className={s.aboutPulse}
              cx="153"
              cy="71"
              r="12"
              fill="#d8f36a"
            />
            <path
              d="M153 64v14m-7-7h14"
              stroke="#087f73"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className={s.aboutSpark}
              d="m372 57 4 10 10 4-10 4-4 10-4-10-10-4 10-4z"
              fill="#ff8068"
            />
          </svg>
          <div className={s.aboutSticker}>
            PEOPLE
            <br />
            FIRST
          </div>
          <div className={s.aboutCaption}>
            DESIGN THINKING
            <br />
            WITH HEALTHCARE HEART
          </div>
        </div>
        <div className={s.aboutText}>
          <div className={s.label}>HEALTHCARE, WITH A HUMAN TOUCH</div>
          <h2>
            Thoughtful digital.
            <br />
            <em>Grounded in care.</em>
          </h2>
          <p>
            Careform is an independent digital studio partnering with healthcare
            teams to make useful, welcoming technology. You work directly with a
            senior designer and developer from the first conversation through
            launch—and beyond.
          </p>
          <ul>
            <li>
              <b>01</b> One thoughtful team, start to finish
            </li>
            <li>
              <b>02</b> Design choices grounded in real needs
            </li>
            <li>
              <b>03</b> A partner who sticks around
            </li>
          </ul>
        </div>
      </section>
      <section className={s.faq}>
        <div className={s.faqLead}>
          <div className={s.label}>QUESTIONS, ANSWERED</div>
          <h2>
            Before you
            <br />
            <em>reach out.</em>
          </h2>
          <p>Helpful details for your first conversation with Careform.</p>
          <div className={s.faqArt}>
            <svg
              viewBox="0 0 440 250"
              role="img"
              aria-labelledby="faqSceneTitle faqSceneDesc"
            >
              <title id="faqSceneTitle">A clear path to your next step</title>
              <desc id="faqSceneDesc">
                An animated care note, calendar and support symbol connected by
                a dotted path.
              </desc>
              <path
                d="M53 177c61 37 99-64 166-32s101 59 169-10"
                fill="none"
                stroke="#9dc9aa"
                strokeWidth="2"
                strokeDasharray="5 7"
              />
              <g className={s.faqNote}>
                <rect
                  x="51"
                  y="57"
                  width="133"
                  height="145"
                  rx="12"
                  fill="#fffdf6"
                  stroke="#c9dfcd"
                  strokeWidth="2"
                />
                <rect
                  x="72"
                  y="80"
                  width="45"
                  height="6"
                  rx="3"
                  fill="#087f73"
                />
                <rect
                  x="72"
                  y="98"
                  width="89"
                  height="4"
                  rx="2"
                  fill="#b2cabc"
                />
                <rect
                  x="72"
                  y="110"
                  width="77"
                  height="4"
                  rx="2"
                  fill="#d0ded1"
                />
                <rect
                  x="72"
                  y="134"
                  width="91"
                  height="47"
                  rx="7"
                  fill="#e8f2e7"
                />
                <path
                  d="m84 157 9 9 17-19"
                  fill="none"
                  stroke="#087f73"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="119"
                  y="151"
                  width="31"
                  height="4"
                  rx="2"
                  fill="#83a58f"
                />
                <rect
                  x="119"
                  y="162"
                  width="24"
                  height="4"
                  rx="2"
                  fill="#b2cabc"
                />
              </g>
              <g className={s.faqCalendar}>
                <rect
                  x="208"
                  y="91"
                  width="116"
                  height="110"
                  rx="12"
                  fill="#123b39"
                />
                <rect
                  x="216"
                  y="99"
                  width="100"
                  height="94"
                  rx="8"
                  fill="#fffdf6"
                />
                <path d="M216 123h100" stroke="#d4e5d6" strokeWidth="2" />
                <path
                  d="M238 91v17m56-17v17"
                  stroke="#087f73"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="240" cy="144" r="5" fill="#d8f36a" />
                <circle cx="266" cy="144" r="5" fill="#c5dcc9" />
                <circle cx="292" cy="144" r="5" fill="#c5dcc9" />
                <circle cx="240" cy="169" r="5" fill="#c5dcc9" />
                <circle cx="266" cy="169" r="5" fill="#ff8068" />
                <circle cx="292" cy="169" r="5" fill="#c5dcc9" />
              </g>
              <g className={s.faqHelp}>
                <circle cx="371" cy="103" r="34" fill="#d8f36a" />
                <path
                  d="M360 93a11 11 0 1 1 18 8c-5 4-7 6-7 12m0 9v1"
                  fill="none"
                  stroke="#087f73"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
              <circle
                className={s.faqDot}
                cx="192"
                cy="152"
                r="7"
                fill="#ff8068"
              />
              <path
                d="M353 184q18 15 36 0"
                fill="none"
                stroke="#82b391"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span>CLARITY, ONE STEP AT A TIME</span>
          </div>
        </div>
        <div className={s.faqList}>
          {FAQS.map((item) => (
            <details key={item.q} className={s.faqItem}>
              <summary>
                <span>{item.q}</span>
                <i aria-hidden="true">+</i>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className={s.cta}>
        <div className={s.ctaFlower}>✳</div>
        <div className={s.ctaContent}>
          <div className={s.label}>YOUR NEXT CHAPTER STARTS HERE</div>
          <h2>
            Let’s make care
            <br />
            <em>work better.</em>
          </h2>
          <p>
            Have a website in mind, a workflow to untangle or an early idea you
            want to explore? We’d love to hear about it.
          </p>
          <a href="/contact-us" className={s.ctaButton}>
            Start a conversation <Arrow />
          </a>
        </div>
        <div className={s.ctaBottom}>
          <span>GOOD THINGS BEGIN WITH A HELLO.</span>
          <span>CAREFORM studio · DIGITAL HEALTH, MADE HUMAN</span>
        </div>
      </section>
      <ContactSection variant="home" />
    </main>
  );
}
