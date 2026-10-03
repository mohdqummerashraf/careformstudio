import Link from "next/link";
import { projects } from "./data";
import { ProjectArt } from "./visuals";
import s from "./work.module.css";
export const metadata = {
  title: "Selected work | Careform",
  description:
    "Representative healthcare website, patient experience and software project concepts from Careform studio.",
};
export default function WorkPage() {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.eyebrow}>
          SELECTED PROJECT DIRECTIONS · HEALTHCARE DIGITAL
        </div>
        <h1>
          Things we can
          <br />
          make <em>together.</em>
        </h1>
        <p>
          A look at the kinds of websites, patient journeys and software we
          design for healthcare teams. These representative concepts show how we
          approach real-world needs.
        </p>
        <a className={s.button} href="#projects">
          Explore the projects ↓
        </a>
        <div className={s.heroArt}>
          <ProjectArt type="dashboard" />
          <span>WEBSITE · EXPERIENCES · SOFTWARE</span>
        </div>
      </section>
      <section className={s.projects} id="projects">
        <div className={s.sectionHead}>
          <div>
            <div className={s.eyebrow}>PORTFOLIO CONCEPTS</div>
            <h2>
              Useful ideas.
              <br />
              <em>Carefully built.</em>
            </h2>
          </div>
          <p>
            Each project starts with a practical question: what would make care
            clearer for patients or easier for the people delivering it?
          </p>
        </div>
        <div className={s.grid}>
          {projects.map((project, index) => (
            <article className={s.card} key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className={`${s.art} ${s[project.color]}`}
                aria-label={`View ${project.name} project`}
              >
                <ProjectArt type={project.visual} />
                <span>CONCEPT {String(index + 1).padStart(2, "0")}</span>
              </Link>
              <div className={s.cardBody}>
                <div className={s.type}>{project.type}</div>
                <Link href={`/work/${project.slug}`}>
                  <h3>{project.name}</h3>
                </Link>
                <p>{project.summary}</p>
                <Link className={s.cardLink} href={`/work/${project.slug}`}>
                  View project <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className={s.disclaimer}>
          These are representative concept projects with original SVG
          illustrations, created to show our approach. They are not presented as
          commissioned client work.
        </p>
      </section>
      <section className={s.bottom}>
        <div className={s.eyebrow}>YOUR PROJECT COULD BE NEXT</div>
        <h2>
          Have a real challenge
          <br />
          you want to <em>solve?</em>
        </h2>
        <p>
          Tell us about the people you serve and what you’d like to make easier.
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
