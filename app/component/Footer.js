import Link from "next/link";
import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Link className={s.brand} href="/" aria-label="Careform home">
        <span className={s.mark} aria-hidden="true">
          ✳
        </span>
        careform<span className={s.period}>.</span>
      </Link>
      <p className={s.tagline}>Thoughtful digital for better care.</p>
      <nav className={s.links} aria-label="Footer navigation">
        <Link href="/services">Services</Link>
        <Link href="/work">Our work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact-us">Contact</Link>
      </nav>
      <a className={s.email} href="mailto:hello@careform.studio">
        hello@careform.studio <span aria-hidden="true">↗</span>
      </a>
      <span className={s.copyright}>© 2026 Careform studio</span>
    </footer>
  );
}
