export function ProjectArt({ type }) {
  if (type === "website")
    return (
      <svg
        viewBox="0 0 440 270"
        role="img"
        aria-label="Clinic website project illustration"
      >
        <rect x="41" y="28" width="358" height="215" rx="12" fill="#fffdf8" />
        <path d="M41 62h358" stroke="#dce6dc" />
        <circle cx="60" cy="45" r="4" fill="#ff8068" />
        <circle cx="74" cy="45" r="4" fill="#d8f36a" />
        <rect x="65" y="84" width="95" height="6" rx="3" fill="#96c7a6" />
        <rect x="65" y="104" width="166" height="16" rx="4" fill="#123b39" />
        <rect x="65" y="126" width="137" height="16" rx="4" fill="#123b39" />
        <rect x="65" y="156" width="125" height="6" rx="3" fill="#a9b9ad" />
        <rect x="65" y="169" width="111" height="6" rx="3" fill="#a9b9ad" />
        <rect x="65" y="194" width="90" height="22" rx="4" fill="#087f73" />
        <circle cx="317" cy="143" r="55" fill="#d8f36a" />
        <path
          d="M317 119v48M293 143h48"
          stroke="#087f73"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M354 104c15 12 24 28 25 44"
          fill="none"
          stroke="#ff8068"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "booking")
    return (
      <svg
        viewBox="0 0 440 270"
        role="img"
        aria-label="Appointment booking project illustration"
      >
        <rect x="81" y="25" width="278" height="220" rx="13" fill="#fffdf8" />
        <path d="M81 75h278" stroke="#e0e8df" />
        <rect x="117" y="15" width="12" height="29" rx="6" fill="#087f73" />
        <rect x="311" y="15" width="12" height="29" rx="6" fill="#ff8068" />
        <text
          x="106"
          y="61"
          fill="#123b39"
          fontSize="13"
          fontWeight="700"
          fontFamily="Arial"
        >
          Choose a time that works
        </text>
        <text x="106" y="100" fill="#80968a" fontSize="9" fontFamily="Arial">
          AVAILABLE APPOINTMENTS
        </text>
        <g fill="#e9f3ef">
          <rect x="106" y="116" width="94" height="38" rx="6" />
          <rect x="213" y="116" width="94" height="38" rx="6" />
          <rect x="106" y="166" width="94" height="38" rx="6" />
        </g>
        <rect x="213" y="166" width="94" height="38" rx="6" fill="#087f73" />
        <g fontSize="10" fontFamily="Arial" textAnchor="middle">
          <text x="153" y="140" fill="#527268">
            9:30 am
          </text>
          <text x="260" y="140" fill="#527268">
            10:15 am
          </text>
          <text x="153" y="190" fill="#527268">
            1:00 pm
          </text>
          <text x="260" y="190" fill="white">
            2:30 pm
          </text>
        </g>
        <circle cx="329" cy="208" r="22" fill="#d8f36a" />
        <path
          d="m320 208 6 6 12-13"
          fill="none"
          stroke="#087f73"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (type === "patient")
    return (
      <svg
        viewBox="0 0 440 270"
        role="img"
        aria-label="Patient experience project illustration"
      >
        <rect x="145" y="20" width="150" height="230" rx="22" fill="#123b39" />
        <rect x="153" y="31" width="134" height="208" rx="16" fill="#fffdf8" />
        <rect x="191" y="39" width="58" height="5" rx="3" fill="#dce6df" />
        <text x="169" y="73" fill="#638476" fontSize="9" fontFamily="Arial">
          YOUR CARE PLAN
        </text>
        <text
          x="169"
          y="96"
          fill="#123b39"
          fontSize="16"
          fontWeight="700"
          fontFamily="Arial"
        >
          One step at a time.
        </text>
        <rect x="168" y="111" width="104" height="54" rx="7" fill="#e9f3ef" />
        <circle cx="188" cy="138" r="12" fill="#ffb39e" />
        <text x="208" y="134" fill="#789186" fontSize="7" fontFamily="Arial">
          NEXT VISIT
        </text>
        <text
          x="208"
          y="148"
          fill="#123b39"
          fontSize="9"
          fontWeight="700"
          fontFamily="Arial"
        >
          Dr. Meera Shah
        </text>
        <rect x="168" y="177" width="104" height="10" rx="5" fill="#d8f36a" />
        <rect x="168" y="196" width="75" height="7" rx="3" fill="#c6d6cb" />
        <circle cx="117" cy="84" r="25" fill="#ff8068" />
        <path
          d="M107 84h20M117 74v20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="329" cy="188" r="29" fill="#d8f36a" />
        <path
          d="m317 188 8 8 16-18"
          fill="none"
          stroke="#087f73"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (type === "diagnostics")
    return (
      <svg
        viewBox="0 0 440 270"
        role="img"
        aria-label="Diagnostics service project illustration"
      >
        <rect x="47" y="32" width="346" height="206" rx="12" fill="#fffdf8" />
        <path d="M47 69h346" stroke="#e0e8df" />
        <circle cx="66" cy="50" r="4" fill="#ff8068" />
        <rect x="87" y="45" width="81" height="9" rx="4" fill="#c5d8ca" />
        <text x="73" y="97" fill="#739080" fontSize="8" fontFamily="Arial">
          FIND A TEST
        </text>
        <text
          x="73"
          y="120"
          fill="#123b39"
          fontSize="16"
          fontWeight="700"
          fontFamily="Arial"
        >
          The right test, made clear.
        </text>
        <rect x="73" y="135" width="187" height="29" rx="5" fill="#edf3e9" />
        <text x="86" y="153" fill="#82958a" fontSize="8" fontFamily="Arial">
          Search tests or services
        </text>
        <rect x="73" y="179" width="85" height="24" rx="4" fill="#087f73" />
        <text x="88" y="195" fill="white" fontSize="8" fontFamily="Arial">
          Explore services
        </text>
        <circle cx="319" cy="145" r="50" fill="#d8f36a" />
        <path
          d="M319 118v54M292 145h54"
          stroke="#087f73"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="356" cy="99" r="16" fill="#fae0d6" />
        <path
          d="M348 99h16M356 91v16"
          stroke="#cf705a"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 440 270"
      role="img"
      aria-label="Clinic dashboard project illustration"
    >
      <rect x="41" y="32" width="358" height="206" rx="12" fill="#fffdf8" />
      <rect x="41" y="32" width="358" height="35" rx="12" fill="#123b39" />
      <rect x="41" y="54" width="358" height="13" fill="#123b39" />
      <text
        x="63"
        y="56"
        fill="white"
        fontSize="10"
        fontWeight="700"
        fontFamily="Arial"
      >
        PRACTICE OVERVIEW
      </text>
      <rect x="62" y="87" width="89" height="62" rx="7" fill="#e9f3ef" />
      <rect x="162" y="87" width="89" height="62" rx="7" fill="#fae6dc" />
      <rect x="262" y="87" width="113" height="62" rx="7" fill="#f0f1d6" />
      <text x="73" y="107" fill="#71887c" fontSize="7" fontFamily="Arial">
        TODAY’S VISITS
      </text>
      <text
        x="73"
        y="137"
        fill="#123b39"
        fontSize="24"
        fontWeight="700"
        fontFamily="Arial"
      >
        42
      </text>
      <text x="173" y="107" fill="#8f7e72" fontSize="7" fontFamily="Arial">
        CARE TEAM
      </text>
      <text
        x="173"
        y="137"
        fill="#123b39"
        fontSize="24"
        fontWeight="700"
        fontFamily="Arial"
      >
        12
      </text>
      <text x="273" y="107" fill="#81846a" fontSize="7" fontFamily="Arial">
        FOLLOW-UPS
      </text>
      <text
        x="273"
        y="137"
        fill="#123b39"
        fontSize="24"
        fontWeight="700"
        fontFamily="Arial"
      >
        86%
      </text>
      <path
        d="M63 177h311M63 201h260"
        stroke="#dce6dd"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}
