"use client";

import { useState } from "react";
import sectionStyles from "./ContactSection.module.css";

const copy = {
  home: {
    eyebrow: "HAVE A PROJECT IN MIND?",
    first: "Let’s make the",
    emphasis: "next step easy.",
    description:
      "Tell us what you’re building, improving or still figuring out. We’ll start with a thoughtful conversation.",
  },
  about: {
    eyebrow: "LET’S START WITH A CONVERSATION",
    first: "What would you",
    second: "like to make",
    emphasis: "better?",
    description:
      "No need for a perfect brief. Share what’s on your mind and we’ll help you shape a useful next step.",
  },
};

export default function ContactSection({ variant = "home" }) {
  const content = copy[variant] || copy.home;

  return (
    <section className={sectionStyles.section} id="contact">
      <div className={sectionStyles.intro}>
        <div className={sectionStyles.eyebrow}>{content.eyebrow}</div>
        <h2>
          {content.first}
          <br />
          {content.second && <>{content.second} </>}
          <em>{content.emphasis}</em>
        </h2>
        <p>{content.description}</p>
        <ContactIllustration />
        <div className={sectionStyles.caption}>
          <span>CARE, CONNECTED</span>
          <b>Thoughtful tools. Better everyday moments.</b>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const organization = form.get("organization") || "Not provided";
    const service = form.get("service") || "Not sure yet";
    const message = form.get("message");

    const subject = `Project enquiry from ${name}`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organization}`,
      `Interested in: ${service}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const mailtoUrl =
      `mailto:hello@careformstudio.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.assign(mailtoUrl);

    setPrepared(true);
  }

  return (
    <form className={sectionStyles.form} onSubmit={handleSubmit}>
      <div className={sectionStyles.formTop}>
        <span>YOUR PROJECT NOTE</span>
        <span>
          <i /> TAKES ABOUT 2 MINUTES
        </span>
      </div>
      <label>
        Your name <b>*</b>
        <input
          name="name"
          autoComplete="name"
          placeholder="What should we call you?"
          required
        />
      </label>
      <label>
        Email address <b>*</b>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@yourclinic.com"
          required
        />
      </label>
      <label>
        Clinic or organisation <span>(optional)</span>
        <input
          name="organization"
          autoComplete="organization"
          placeholder="Where you do your good work"
        />
      </label>
      <label>
        What are you exploring?
        <select name="service" defaultValue="">
          <option value="" disabled>
            Choose one, or we can work it out together
          </option>
          <option>Healthcare website</option>
          <option>EHR software</option>
          <option>Appointment system</option>
          <option>Clinic or hospital management software</option>
          <option>Patient experience or portal</option>
          <option>Healthcare content creation</option>
          <option>Healthcare SEO</option>
          <option>Integrations or ongoing support</option>
          <option>Something else</option>
          <option>I’m not sure yet</option>
        </select>
      </label>
      <label>
        Tell us a little about it <b>*</b>
        <textarea
          name="message"
          rows="5"
          placeholder="What would you like to make easier? What would a good outcome look like?"
          required
        />
      </label>
      <button className={sectionStyles.submit} type="submit">
        Prepare my message <Arrow />
      </button>
      {prepared && (
        <p className={sectionStyles.status} role="status">
          Your email app should open with your note ready. Review it and press
          Send. If it didn’t open, email us at{" "}
          <a href="mailto:hello@careformstudio.com">hello@careformstudio.com</a>
          .
        </p>
      )}
      <p className={sectionStyles.privacy}>
        Your details are used only to respond to this enquiry. The form prepares
        an email in your own email app; it does not send anything automatically.
      </p>
    </form>
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

function ContactIllustration() {
  return (
    <svg
      className={sectionStyles.illustration}
      viewBox="0 0 420 190"
      role="img"
      aria-labelledby="contactSceneTitle contactSceneDesc"
    >
      <title id="contactSceneTitle">
        Care teams and thoughtful health technology
      </title>
      <desc id="contactSceneDesc">
        A doctor and patient connected through a digital appointment and care
        tool.
      </desc>
      <ellipse cx="211" cy="167" rx="181" ry="15" fill="#bdd9c4" opacity=".6" />
      <circle cx="210" cy="93" r="77" fill="#d5e9d8" />
      <circle cx="210" cy="93" r="57" fill="none" stroke="#b1d2b7" />
      <g className={sectionStyles.doctor}>
        <circle cx="79" cy="67" r="19" fill="#e9b99b" />
        <path
          d="M60 66q1-22 20-22 17 1 19 21-11-7-19-6-9 8-20 7"
          fill="#244c42"
        />
        <path
          d="M48 151q3-52 31-52t31 52"
          fill="#fffdf7"
          stroke="#77a98b"
          strokeWidth="2"
        />
        <path
          d="m68 101 11 16 11-16m-11 16v25"
          fill="none"
          stroke="#087f73"
          strokeWidth="2"
        />
        <path
          d="M61 71h1m13 0h1m-12 10q5 4 10 0"
          stroke="#654a40"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <g className={sectionStyles.patient}>
        <circle cx="340" cy="68" r="18" fill="#a36b52" />
        <path
          d="M322 66q1-21 19-21 17 1 19 20-11-7-19-5-8 7-19 6"
          fill="#3c302c"
        />
        <path d="M308 151q3-50 32-50t31 50" fill="#f2a18b" />
        <path
          d="M332 71h1m13 0h1m-12 9q5 4 10 0"
          stroke="#2e3029"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <g className={sectionStyles.tool}>
        <rect x="132" y="83" width="154" height="78" rx="10" fill="#123b39" />
        <rect x="138" y="89" width="142" height="65" rx="6" fill="#fffdf6" />
        <text
          x="150"
          y="105"
          fill="#598271"
          fontSize="6"
          fontFamily="Arial"
          letterSpacing="1"
        >
          YOUR NEXT VISIT
        </text>
        <text
          x="150"
          y="119"
          fill="#123b39"
          fontSize="9"
          fontWeight="700"
          fontFamily="Arial"
        >
          Dr. Meera Shah · 10:30
        </text>
        <rect x="150" y="128" width="82" height="17" rx="4" fill="#e5f1e5" />
        <circle cx="160" cy="136" r="4" fill="#ff8068" />
        <rect x="169" y="133" width="55" height="3" rx="1.5" fill="#9cb7a3" />
        <rect x="240" y="128" width="29" height="17" rx="4" fill="#d8f36a" />
        <path
          d="M195 161h31"
          stroke="#7da98a"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <circle
        className={sectionStyles.pulse}
        cx="109"
        cy="39"
        r="10"
        fill="#d8f36a"
      />
      <path
        d="M109 33v12m-6-6h12"
        stroke="#087f73"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="299" cy="45" r="5" fill="#ff8068" />
    </svg>
  );
}
