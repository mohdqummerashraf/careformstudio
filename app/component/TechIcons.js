import s from "./TechIcons.module.css";

/*
  Small original line-art icons, drawn to match the Careform palette.
  Each is a plain <svg> so the CSS stroke-draw animation in
  TechIcons.module.css can run on it without any JS.
*/

export const TelehealthIcon = () => (
  <svg className={s.icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect
      x="8"
      y="12"
      width="48"
      height="32"
      rx="6"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M20 44v6M44 44v6M16 50h32"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="24"
      cy="26"
      r="5"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M34 22c4 0 8 2 10 6-2 4-6 6-10 6"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="47" cy="17" r="3" fill="var(--coral)" />
  </svg>
);

export const RecordsIcon = () => (
  <svg className={s.icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path
      d="M16 10h24l8 8v36a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M40 10v8h8"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M18 34h10l4-8 4 14 4-9h6"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="46" cy="31" r="3" fill="var(--lime)" />
  </svg>
);

export const SecureIcon = () => (
  <svg className={s.icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path
      d="M32 8 14 15v14c0 13 8 21 18 27 10-6 18-14 18-27V15L32 8Z"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="25"
      y="29"
      width="14"
      height="11"
      rx="2"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M28 29v-4a4 4 0 0 1 8 0v4"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="32" cy="34" r="1.6" fill="var(--coral)" />
  </svg>
);

export const SchedulingIcon = () => (
  <svg className={s.icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect
      x="10"
      y="14"
      width="44"
      height="38"
      rx="5"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M10 24h44"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M20 10v8M44 10v8"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 34h6M20 42h6M30 34h6M30 42h14"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="47" cy="42" r="3" fill="var(--green)" />
  </svg>
);

export const MonitoringIcon = () => (
  <svg className={s.icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect
      x="20"
      y="8"
      width="24"
      height="16"
      rx="4"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M25 24v6a7 7 0 0 0 7 7h0a7 7 0 0 0 7-7v-6"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="20"
      y="37"
      width="24"
      height="19"
      rx="6"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M24 46h5l3-6 4 11 3-5h5"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MessagingIcon = () => (
  <svg className={s.icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path
      d="M12 16h40a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H28l-10 8v-8h-6a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2Z"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M32 25v10M27 30h10"
      className={s.draw}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="46" cy="14" r="3" fill="var(--coral)" />
  </svg>
);
