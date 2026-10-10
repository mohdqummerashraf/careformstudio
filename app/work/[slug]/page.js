import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";
import { ProjectArt } from "../visuals";
import s from "./project.module.css";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  return project
    ? {
        title: `${project.name} | Careform project concept`,
        description: project.summary,
      }
    : { title: "Project | Careform" };
}
export default function ProjectPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main className={s.page}>
      <header className={s.header}>
        <Link className={s.brand} href="/">
          ✳ careform<span>.</span>
        </Link>
        <nav>
          <Link href="/services">Services</Link>
          <Link href="/work">All work</Link>
          <Link href="/#about">About us</Link>
        </nav>
        <a className={s.headerCta} href="mailto:hello@careformstudio.com">
          Let’s talk ↗
        </a>
      </header>
      <div className={s.crumb}>
        <Link href="/work">Selected work</Link>
        <span> / </span>
        {project.name}
      </div>
      <section className={`${s.hero} ${s[project.color]}`}>
        <div>
          <div className={s.eyebrow}>
            {project.type.toUpperCase()} · REPRESENTATIVE CONCEPT
          </div>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
          <a className={s.button} href="mailto:hello@careformstudio.com">
            Discuss a similar project ↗
          </a>
        </div>
        <div className={s.art}>
          <ProjectArt type={project.visual} />
        </div>
      </section>
      <div className={s.note}>
        CONCEPT PROJECT · This example illustrates our approach and is not
        presented as commissioned client work.
      </div>
      <section className={s.story}>
        <article>
          <span>THE OPPORTUNITY</span>
          <h2>
            A clearer experience
            <br />
            <em>starts with listening.</em>
          </h2>
          <p>{project.challenge}</p>
        </article>
        <article>
          <span>OUR APPROACH</span>
          <h2>
            Design around
            <br />
            <em>real work.</em>
          </h2>
          <p>{project.approach}</p>
        </article>
      </section>
      <section className={s.built}>
        <div>
          <div className={s.eyebrow}>WHAT WE’D BUILD</div>
          <h2>
            A useful first
            <br />
            <em>release.</em>
          </h2>
          <p>
            The scope is shaped to solve the highest-value parts first, with
            room to improve from there.
          </p>
        </div>
        <ul>
          {project.built.map((item, i) => (
            <li key={item}>
              <span>0{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className={s.focus}>
        <div className={s.eyebrow}>DESIGNED TO HELP</div>
        <div className={s.focusGrid}>
          {project.focus.map((item, i) => (
            <article key={item}>
              <span>0{i + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={s.next}>
        <div>
          <div className={s.eyebrow}>NEXT PROJECT</div>
          <h2>{next.name}</h2>
        </div>
        <Link href={`/work/${next.slug}`}>View project ↗</Link>
      </section>
      <section className={s.cta}>
        <div className={s.eyebrow}>LET’S BUILD A PROJECT AROUND YOUR NEEDS</div>
        <h2>
          What would better
          <br />
          look like for <em>you?</em>
        </h2>
        <p>
          We’ll listen to the challenge, explore the right scope and make a
          practical plan with you.
        </p>
        <a className={s.buttonLight} href="mailto:hello@careformstudio.com">
          Start a conversation ↗
        </a>
      </section>
    </main>
  );
}
