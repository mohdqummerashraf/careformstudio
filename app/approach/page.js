import Link from "next/link";
import s from "./approach.module.css";
export const metadata = {
  title: "Our approach | Careform",
  description:
    "A thoughtful, collaborative process for healthcare websites, patient experiences and custom software.",
};
const phases = [
  {
    number: "01",
    eyebrow: "LISTEN & UNDERSTAND",
    title: "Start with the real world.",
    body: "We learn how your team works, what patients need and where the friction lives. We ask questions before we make assumptions.",
    includes: [
      "Team and stakeholder conversations",
      "Patient and service context",
      "Current workflow review",
    ],
    visual: "listen",
  },
  {
    number: "02",
    eyebrow: "FRAME THE OPPORTUNITY",
    title: "Find the right problem.",
    body: "Together, we turn what we learn into a focused brief. We make priorities, constraints and a useful first release clear before the build begins.",
    includes: [
      "Shared goals and success signals",
      "Information and journey mapping",
      "Practical scope and roadmap",
    ],
    visual: "frame",
  },
  {
    number: "03",
    eyebrow: "DESIGN WITH PURPOSE",
    title: "Make it feel clear.",
    body: "We shape the content, interface and interactions around real people. You see the work early, so your expertise is part of the design—not an afterthought.",
    includes: [
      "Content structure and prototypes",
      "Responsive visual design",
      "Accessibility-minded interaction patterns",
    ],
    visual: "design",
  },
  {
    number: "04",
    eyebrow: "BUILD IN THE OPEN",
    title: "Make the idea useful.",
    body: "We turn the agreed direction into a working website or product, sharing progress and inviting feedback at meaningful checkpoints.",
    includes: [
      "Modern, maintainable development",
      "Regular previews and feedback",
      "Quality, performance and device checks",
    ],
    visual: "build",
  },
  {
    number: "05",
    eyebrow: "LAUNCH & KEEP LEARNING",
    title: "Make room to improve.",
    body: "We prepare your team for launch, hand over clearly and stay available for the next round of thoughtful improvements.",
    includes: [
      "Launch planning and team handover",
      "Documentation and training",
      "Ongoing support and iteration",
    ],
    visual: "launch",
  },
];
function PhaseArt({ type }) {
  if (type === "listen")
    return (
      <svg
        viewBox="0 0 360 230"
        role="img"
        aria-label="People and care needs coming into focus"
      >
        <circle cx="180" cy="114" r="73" fill="#e4efe4" />
        <circle cx="180" cy="114" r="49" fill="#d5e7d7" />
        <circle cx="179" cy="90" r="15" fill="#efa993" />
        <path
          d="M151 151q3-39 29-39t29 39"
          fill="#fffaf2"
          stroke="#6c9e7d"
          strokeWidth="2"
        />
        <circle cx="80" cy="91" r="19" fill="#ff8068" />
        <circle cx="278" cy="75" r="15" fill="#d8f36a" />
        <circle cx="267" cy="163" r="12" fill="#8dbfa0" />
        <path
          d="M99 96q24 17 39 12m105-20q18-17 35-13m-16 73q-22-17-38-22"
          fill="none"
          stroke="#6a9e7b"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <rect x="37" y="162" width="73" height="31" rx="6" fill="#fffdf7" />
        <rect x="250" y="33" width="74" height="30" rx="6" fill="#fffdf7" />
        <rect x="273" y="184" width="54" height="24" rx="5" fill="#fffdf7" />
        <path
          d="M53 176h37m-37 7h27M263 45h46m-46 7h31m-2 140h27"
          stroke="#96ae9c"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "frame")
    return (
      <svg
        viewBox="0 0 360 230"
        role="img"
        aria-label="A focused project plan and clear priorities"
      >
        <rect x="57" y="36" width="246" height="162" rx="11" fill="#fffdf8" />
        <rect x="57" y="36" width="246" height="30" rx="11" fill="#173f39" />
        <rect x="57" y="55" width="246" height="11" fill="#173f39" />
        <circle cx="75" cy="51" r="4" fill="#ff8068" />
        <circle cx="89" cy="51" r="4" fill="#d8f36a" />
        <text x="77" y="91" fontSize="8" fill="#708d7e" fontFamily="Arial">
          PROJECT NORTH STAR
        </text>
        <rect x="77" y="101" width="124" height="11" rx="4" fill="#123b39" />
        <rect x="77" y="121" width="192" height="6" rx="3" fill="#c1d0c4" />
        <rect x="77" y="137" width="162" height="6" rx="3" fill="#c1d0c4" />
        <rect x="77" y="159" width="56" height="23" rx="4" fill="#087f73" />
        <circle cx="266" cy="159" r="25" fill="#d8f36a" />
        <path
          d="m254 159 9 9 17-19"
          fill="none"
          stroke="#087f73"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M306 101h19m-19 13h29m-29 13h13"
          stroke="#ff8068"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "design")
    return (
      <svg
        viewBox="0 0 360 230"
        role="img"
        aria-label="A healthcare digital interface taking shape"
      >
        <rect x="46" y="34" width="268" height="166" rx="10" fill="#fffdf8" />
        <path d="M46 66h268" stroke="#e0e9df" />
        <rect x="64" y="82" width="90" height="100" rx="6" fill="#e9f2e6" />
        <circle cx="109" cy="119" r="19" fill="#d8f36a" />
        <path
          d="M109 108v22m-11-11h22"
          stroke="#087f73"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="174" y="85" width="110" height="8" rx="4" fill="#9dc7a6" />
        <rect x="174" y="104" width="118" height="13" rx="4" fill="#123b39" />
        <rect x="174" y="124" width="93" height="13" rx="4" fill="#123b39" />
        <rect x="174" y="149" width="108" height="6" rx="3" fill="#bdcbbf" />
        <rect x="174" y="163" width="71" height="6" rx="3" fill="#bdcbbf" />
        <rect x="64" y="177" width="55" height="5" rx="2" fill="#ff8068" />
      </svg>
    );
  if (type === "build")
    return (
      <svg
        viewBox="0 0 360 230"
        role="img"
        aria-label="Software being built and refined"
      >
        <rect x="44" y="36" width="272" height="158" rx="12" fill="#123b39" />
        <rect x="53" y="45" width="254" height="140" rx="7" fill="#f9f7ee" />
        <rect x="53" y="45" width="254" height="23" rx="7" fill="#e7eee5" />
        <circle cx="68" cy="56" r="3" fill="#ff8068" />
        <circle cx="79" cy="56" r="3" fill="#d8f36a" />
        <circle cx="90" cy="56" r="3" fill="#78b48f" />
        <path
          d="m79 100-12 10 12 10m37-20 12 10-12 10m-14-17-7 17"
          fill="none"
          stroke="#087f73"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="163" y="87" width="120" height="70" rx="7" fill="#e3efe3" />
        <rect x="176" y="101" width="63" height="7" rx="3" fill="#93b89a" />
        <rect x="176" y="116" width="92" height="6" rx="3" fill="#bdcdbf" />
        <rect x="176" y="130" width="81" height="6" rx="3" fill="#bdcdbf" />
        <circle cx="277" cy="157" r="19" fill="#d8f36a" />
        <path
          d="m269 157 6 6 11-13"
          fill="none"
          stroke="#087f73"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 360 230"
      role="img"
      aria-label="A healthcare product launched and ready to grow"
    >
      <path d="M42 186h275" stroke="#c9d9cb" strokeWidth="2" />
      <path
        d="M58 174c37-1 52-40 87-39s43 22 76-12 52-33 81-66"
        fill="none"
        stroke="#087f73"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="7 7"
        className={s.flightPath}
      />
      <circle cx="58" cy="174" r="8" fill="#ff8068" />
      <circle cx="145" cy="135" r="8" fill="#d8f36a" />
      <circle cx="221" cy="123" r="8" fill="#ff8068" />
      <circle cx="302" cy="57" r="12" fill="#087f73" />
      <path
        d="M302 39v36m-18-18h36"
        stroke="#fffdf7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="55" y="194" width="62" height="7" rx="3" fill="#b3c8b6" />
      <rect x="143" y="194" width="67" height="7" rx="3" fill="#b3c8b6" />
      <rect x="232" y="194" width="73" height="7" rx="3" fill="#b3c8b6" />
    </svg>
  );
}
export default function ApproachPage() {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.heroCopy}>
          <div className={s.eyebrow}>
            <span /> A THOUGHTFUL WAY TO MAKE PROGRESS
          </div>
          <h1>
            Good work
            <br />
            starts with
            <br />
            <em>good questions.</em>
          </h1>
          <p>
            Healthcare is too important for guesswork. Our approach brings
            people, priorities and craft together—so the thing we build solves
            the right problem.
          </p>
          <Link href="/contact-us" className={s.heroButton}>
            Start with a conversation <Arrow />
          </Link>
          <div className={s.heroCaption}>
            CLEAR THINKING · OPEN COLLABORATION · CAREFUL DELIVERY
          </div>
        </div>
        <div className={s.heroVisual}>
          <PhaseArt type="listen" />
          <div className={s.heroVisualTag}>
            <i /> HUMAN FIRST, ALWAYS
          </div>
          <span className={s.heroVisualNo}>01 — 05</span>
        </div>
      </section>
      <section className={s.principles}>
        <div className={s.principle}>
          <span>01</span>
          <b>People, not assumptions</b>
        </div>
        <div className={s.principle}>
          <span>02</span>
          <b>Clarity before complexity</b>
        </div>
        <div className={s.principle}>
          <span>03</span>
          <b>Progress you can see</b>
        </div>
      </section>
      <section className={s.process}>
        <div className={s.processHead}>
          <div>
            <div className={s.eyebrow}>THE WAY WE WORK</div>
            <h2>
              Five considered steps.
              <br />
              <em>One shared direction.</em>
            </h2>
          </div>
          <p>
            Every project is different. This gives us a steady rhythm, while
            leaving room to respond to what we learn along the way.
          </p>
        </div>
        <div className={s.phaseList}>
          {phases.map((phase) => (
            <article className={s.phase} key={phase.number}>
              <div className={s.phaseMeta}>
                <span>{phase.number}</span>
                <b>{phase.eyebrow}</b>
              </div>
              <div className={s.phaseCopy}>
                <h3>{phase.title}</h3>
                <p>{phase.body}</p>
                <ul>
                  {phase.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={s.phaseVisual}>
                <PhaseArt type={phase.visual} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={s.collaboration}>
        <div className={s.collabVisual}>
          <div className={s.collabOrbit} />
          <span className={s.collabCenter}>
            YOU <b>+</b> US
          </span>
          <i>✳</i>
        </div>
        <div>
          <div className={s.eyebrow}>BUILT WITH YOU, NOT JUST FOR YOU</div>
          <h2>
            Your expertise
            <br />
            belongs in the <em>room.</em>
          </h2>
          <p>
            You know your patients, your team and the realities of your
            organisation. We bring design and engineering experience. Better
            decisions happen when both perspectives shape the work.
          </p>
          <div className={s.collabPoints}>
            <span>Direct access to the people doing the work</span>
            <span>Early previews, useful feedback moments</span>
            <span>Clear trade-offs and shared decisions</span>
          </div>
        </div>
      </section>
      <section className={s.flexible}>
        <div className={s.eyebrow}>RIGHT-SIZED FOR THE WORK</div>
        <h2>
          Start focused.
          <br />
          <em>Grow with purpose.</em>
        </h2>
        <p>
          We can shape a focused website project, explore a new product idea or
          build a larger healthcare platform in stages. The scope, pace and team
          are matched to the outcome you need.
        </p>
        <div className={s.engagements}>
          <article>
            <span>01 / A CLEAR START</span>
            <h3>Focused project</h3>
            <p>A defined challenge, a thoughtful plan and a useful launch.</p>
          </article>
          <article>
            <span>02 / ROOM TO EXPLORE</span>
            <h3>Product partnership</h3>
            <p>Discovery, design and delivery for a new digital service.</p>
          </article>
          <article>
            <span>03 / KEEP IMPROVING</span>
            <h3>Ongoing support</h3>
            <p>Steady care and considered improvements after launch.</p>
          </article>
        </div>
      </section>
      <section className={s.cta}>
        <div className={s.eyebrow}>NO PERFECT BRIEF REQUIRED</div>
        <h2>
          We can start with
          <br />
          what you <em>know.</em>
        </h2>
        <p>
          Tell us what feels difficult, what you want to change or where you see
          an opportunity. We’ll help you find a useful first step.
        </p>
        <Link href="/contact-us" className={s.ctaButton}>
          Tell us about your project <Arrow />
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
