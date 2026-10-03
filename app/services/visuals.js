export function ServiceArt({ type }) {
  if (type === "web")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of a welcoming healthcare website"
      >
        <rect x="52" y="35" width="335" height="208" rx="12" fill="#fffdf8" />
        <path d="M52 67h335" stroke="#e1e8df" />
        <circle cx="72" cy="51" r="4" fill="#ff8068" />
        <circle cx="87" cy="51" r="4" fill="#d8f36a" />
        <circle cx="102" cy="51" r="4" fill="#81b89a" />
        <rect x="76" y="90" width="110" height="7" rx="3" fill="#b4d8c3" />
        <rect x="76" y="111" width="170" height="15" rx="4" fill="#123b39" />
        <rect x="76" y="132" width="142" height="15" rx="4" fill="#123b39" />
        <rect x="76" y="160" width="118" height="6" rx="3" fill="#9baea3" />
        <rect x="76" y="174" width="96" height="6" rx="3" fill="#9baea3" />
        <rect x="76" y="198" width="91" height="24" rx="4" fill="#087f73" />
        <circle cx="320" cy="150" r="47" fill="#d8f36a" />
        <path
          d="M320 128v44M298 150h44"
          stroke="#087f73"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M353 102c18 13 29 31 31 53"
          stroke="#ff8068"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "content")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of healthcare content creation"
      >
        <rect x="73" y="32" width="244" height="218" rx="12" fill="#fffdf8" />
        <path d="M73 69h244" stroke="#dbe6dd" />
        <circle cx="92" cy="51" r="4" fill="#ff8068" />
        <circle cx="106" cy="51" r="4" fill="#d8f36a" />
        <rect x="96" y="92" width="89" height="6" rx="3" fill="#a3c9ae" />
        <rect x="96" y="110" width="166" height="14" rx="4" fill="#123b39" />
        <rect x="96" y="131" width="145" height="14" rx="4" fill="#123b39" />
        <rect x="96" y="159" width="196" height="6" rx="3" fill="#aebdb3" />
        <rect x="96" y="173" width="180" height="6" rx="3" fill="#aebdb3" />
        <rect x="96" y="187" width="191" height="6" rx="3" fill="#aebdb3" />
        <rect x="96" y="201" width="130" height="6" rx="3" fill="#aebdb3" />
        <circle cx="339" cy="153" r="42" fill="#d8f36a" />
        <path d="m339 126 7 18 18 7-18 7-7 18-7-18-18-7 18-7z" fill="#087f73" />
        <circle cx="365" cy="92" r="17" fill="#fae0d6" />
        <path
          d="M357 92h16M365 84v16"
          stroke="#d57c66"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "seo")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of healthcare search optimisation"
      >
        <rect x="48" y="47" width="344" height="186" rx="13" fill="#fffdf8" />
        <rect x="70" y="69" width="260" height="31" rx="15" fill="#edf3e9" />
        <circle
          cx="91"
          cy="84"
          r="7"
          fill="none"
          stroke="#087f73"
          strokeWidth="2.5"
        />
        <path
          d="m96 89 6 6"
          stroke="#087f73"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="111" y="81" width="126" height="6" rx="3" fill="#afbeb4" />
        <circle cx="355" cy="84" r="15" fill="#d8f36a" />
        <path
          d="m348 84 5 5 9-10"
          fill="none"
          stroke="#087f73"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="72" y="123" fill="#728b7b" fontSize="8" fontFamily="Arial">
          SEARCH VISIBILITY
        </text>
        <rect x="72" y="135" width="121" height="11" rx="4" fill="#123b39" />
        <rect x="72" y="154" width="177" height="6" rx="3" fill="#b3c2b8" />
        <rect x="72" y="168" width="144" height="6" rx="3" fill="#b3c2b8" />
        <path
          d="m246 196 29-26 24 12 43-52"
          fill="none"
          stroke="#087f73"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="246" cy="196" r="6" fill="#ff8068" />
        <circle cx="275" cy="170" r="6" fill="#d8f36a" />
        <circle cx="299" cy="182" r="6" fill="#ff8068" />
        <circle cx="342" cy="130" r="7" fill="#087f73" />
        <path d="M72 205h150" stroke="#e1e9e0" strokeWidth="2" />
      </svg>
    );
  if (type === "ehr")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of an electronic health record"
      >
        <rect x="72" y="35" width="296" height="210" rx="12" fill="#fffdf8" />
        <path d="M72 75h296" stroke="#dbe6dd" />
        <circle cx="92" cy="55" r="5" fill="#ff8068" />
        <rect x="110" y="50" width="100" height="10" rx="5" fill="#d8e8dc" />
        <rect x="94" y="96" width="72" height="126" rx="8" fill="#e9f3ef" />
        <circle cx="130" cy="125" r="18" fill="#ffb39e" />
        <text
          x="112"
          y="158"
          fill="#123b39"
          fontSize="9"
          fontWeight="700"
          fontFamily="Arial"
        >
          PATIENT
        </text>
        <rect x="105" y="173" width="50" height="5" rx="2" fill="#a6bbb0" />
        <rect x="105" y="186" width="43" height="5" rx="2" fill="#a6bbb0" />
        <text x="184" y="106" fill="#66877a" fontSize="9" fontFamily="Arial">
          VISIT SUMMARY
        </text>
        <text
          x="184"
          y="127"
          fill="#123b39"
          fontSize="14"
          fontWeight="700"
          fontFamily="Arial"
        >
          Clinical record
        </text>
        <rect x="184" y="141" width="154" height="27" rx="5" fill="#f1f5ec" />
        <circle cx="199" cy="154" r="6" fill="#087f73" />
        <rect x="213" y="150" width="85" height="6" rx="3" fill="#a5b9ac" />
        <rect x="184" y="177" width="154" height="27" rx="5" fill="#fae6dc" />
        <circle cx="199" cy="190" r="6" fill="#ff8068" />
        <rect x="213" y="186" width="100" height="6" rx="3" fill="#b9a69c" />
      </svg>
    );
  if (type === "appointment")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of an appointment booking calendar"
      >
        <rect x="82" y="34" width="276" height="212" rx="13" fill="#fffdf8" />
        <path d="M82 83h276" stroke="#dbe6dd" strokeWidth="2" />
        <rect x="116" y="24" width="12" height="29" rx="6" fill="#087f73" />
        <rect x="312" y="24" width="12" height="29" rx="6" fill="#ff8068" />
        <text
          x="107"
          y="69"
          fill="#123b39"
          fontSize="13"
          fontWeight="700"
          fontFamily="Arial"
        >
          Choose a time
        </text>
        <text x="106" y="108" fill="#80968a" fontSize="9" fontFamily="Arial">
          THURSDAY, 24 OCTOBER
        </text>
        <g fill="#e9f3ef">
          <rect x="105" y="124" width="66" height="32" rx="6" />
          <rect x="187" y="124" width="66" height="32" rx="6" />
          <rect x="269" y="124" width="66" height="32" rx="6" />
          <rect x="105" y="168" width="66" height="32" rx="6" />
          <rect x="269" y="168" width="66" height="32" rx="6" />
        </g>
        <rect x="187" y="168" width="66" height="32" rx="6" fill="#087f73" />
        <g fontSize="9" fontFamily="Arial" textAnchor="middle">
          <text x="138" y="144" fill="#527268">
            9:00 am
          </text>
          <text x="220" y="144" fill="#527268">
            10:00 am
          </text>
          <text x="302" y="144" fill="#527268">
            11:00 am
          </text>
          <text x="138" y="188" fill="#527268">
            1:00 pm
          </text>
          <text x="220" y="188" fill="white">
            2:00 pm
          </text>
          <text x="302" y="188" fill="#527268">
            3:00 pm
          </text>
        </g>
        <circle cx="337" cy="210" r="26" fill="#d8f36a" />
        <path
          d="m326 210 8 8 15-17"
          fill="none"
          stroke="#087f73"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (type === "clinic")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of clinic management software"
      >
        <rect x="48" y="37" width="344" height="207" rx="12" fill="#fffdf8" />
        <rect x="48" y="37" width="344" height="35" rx="12" fill="#123b39" />
        <rect x="48" y="59" width="344" height="13" fill="#123b39" />
        <circle cx="68" cy="54" r="5" fill="#d8f36a" />
        <text
          x="84"
          y="58"
          fill="white"
          fontSize="10"
          fontWeight="700"
          fontFamily="Arial"
        >
          CLINIC OVERVIEW
        </text>
        <rect x="67" y="91" width="85" height="57" rx="7" fill="#e9f3ef" />
        <rect x="163" y="91" width="85" height="57" rx="7" fill="#fae6dc" />
        <rect x="259" y="91" width="111" height="57" rx="7" fill="#f0f1d6" />
        <text x="78" y="110" fill="#6e8879" fontSize="7" fontFamily="Arial">
          TODAY’S VISITS
        </text>
        <text
          x="78"
          y="136"
          fill="#123b39"
          fontSize="22"
          fontWeight="700"
          fontFamily="Arial"
        >
          42
        </text>
        <text x="174" y="110" fill="#8f7e72" fontSize="7" fontFamily="Arial">
          CARE TEAM
        </text>
        <text
          x="174"
          y="136"
          fill="#123b39"
          fontSize="22"
          fontWeight="700"
          fontFamily="Arial"
        >
          12
        </text>
        <text x="270" y="110" fill="#81846a" fontSize="7" fontFamily="Arial">
          WAITING
        </text>
        <text
          x="270"
          y="136"
          fill="#123b39"
          fontSize="22"
          fontWeight="700"
          fontFamily="Arial"
        >
          05
        </text>
        <rect x="67" y="163" width="303" height="12" rx="5" fill="#e4ece4" />
        <rect x="67" y="187" width="230" height="9" rx="4" fill="#d7e5da" />
        <rect x="67" y="206" width="270" height="9" rx="4" fill="#d7e5da" />
      </svg>
    );
  if (type === "hospital")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of hospital operations software"
      >
        <rect x="45" y="43" width="350" height="198" rx="13" fill="#fffdf8" />
        <rect x="45" y="43" width="350" height="36" rx="13" fill="#087f73" />
        <rect x="45" y="65" width="350" height="14" fill="#087f73" />
        <text
          x="67"
          y="67"
          fill="white"
          fontSize="10"
          fontWeight="700"
          fontFamily="Arial"
        >
          HOSPITAL OPERATIONS
        </text>
        <rect x="66" y="98" width="78" height="118" rx="7" fill="#e9f3ef" />
        <rect x="157" y="98" width="103" height="54" rx="7" fill="#f9e9df" />
        <rect x="273" y="98" width="100" height="54" rx="7" fill="#f0f1d6" />
        <rect x="157" y="162" width="216" height="54" rx="7" fill="#e7eef6" />
        <path
          d="M88 126h34M105 109v34"
          stroke="#087f73"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <text x="78" y="175" fill="#527268" fontSize="8" fontFamily="Arial">
          CARE TEAMS
        </text>
        <text x="174" y="120" fill="#9a7665" fontSize="7" fontFamily="Arial">
          ACTIVE REQUESTS
        </text>
        <text
          x="174"
          y="143"
          fill="#123b39"
          fontSize="18"
          fontWeight="700"
          fontFamily="Arial"
        >
          18
        </text>
        <text x="290" y="120" fill="#747b50" fontSize="7" fontFamily="Arial">
          DEPARTMENTS
        </text>
        <text
          x="290"
          y="143"
          fill="#123b39"
          fontSize="18"
          fontWeight="700"
          fontFamily="Arial"
        >
          06
        </text>
        <path
          d="M176 199h177"
          stroke="#9ab0c2"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="208" cy="199" r="8" fill="#ff8068" />
        <circle cx="275" cy="199" r="8" fill="#d8f36a" />
        <circle cx="332" cy="199" r="8" fill="#087f73" />
      </svg>
    );
  if (type === "growth")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of healthcare content reaching more people"
      >
        <rect x="47" y="38" width="240" height="188" rx="11" fill="#fffdf8" />
        <path d="M47 70h240" stroke="#dbe6dd" />
        <circle cx="65" cy="54" r="4" fill="#ff8068" />
        <circle cx="79" cy="54" r="4" fill="#d8f36a" />
        <rect x="68" y="91" width="92" height="6" rx="3" fill="#a7cfad" />
        <rect x="68" y="109" width="152" height="13" rx="4" fill="#123b39" />
        <rect x="68" y="128" width="126" height="13" rx="4" fill="#123b39" />
        <rect x="68" y="153" width="135" height="5" rx="2" fill="#9aada1" />
        <rect x="68" y="165" width="111" height="5" rx="2" fill="#9aada1" />
        <rect x="68" y="188" width="73" height="20" rx="4" fill="#087f73" />
        <path
          d="m258 181 44-48 31 19 49-69"
          fill="none"
          stroke="#087f73"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M363 83h20v20"
          fill="none"
          stroke="#ff8068"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="258" cy="181" r="7" fill="#d8f36a" />
        <circle cx="302" cy="133" r="7" fill="#ff8068" />
        <circle cx="333" cy="152" r="7" fill="#d8f36a" />
        <circle cx="382" cy="83" r="8" fill="#087f73" />
      </svg>
    );
  if (type === "integration")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of connected healthcare software systems"
      >
        <rect x="42" y="71" width="106" height="116" rx="12" fill="#fffdf8" />
        <rect x="292" y="71" width="106" height="116" rx="12" fill="#fffdf8" />
        <rect x="166" y="46" width="108" height="166" rx="16" fill="#123b39" />
        <rect x="175" y="57" width="90" height="146" rx="10" fill="#f8fbf5" />
        <rect x="190" y="77" width="60" height="9" rx="4" fill="#d7f36a" />
        <rect x="188" y="101" width="64" height="28" rx="6" fill="#e5f1e7" />
        <path
          d="M200 115h40M220 105v20"
          stroke="#087f73"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="188" y="140" width="64" height="8" rx="4" fill="#dce8df" />
        <rect x="188" y="156" width="48" height="8" rx="4" fill="#dce8df" />
        <circle cx="95" cy="108" r="20" fill="#fae0d6" />
        <path
          d="M86 108h18M95 99v18"
          stroke="#cf705a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text
          x="68"
          y="153"
          fill="#123b39"
          fontSize="10"
          fontWeight="700"
          fontFamily="Arial"
        >
          Appointments
        </text>
        <circle cx="345" cy="108" r="20" fill="#d8f36a" />
        <path
          d="M336 108h18M345 99v18"
          stroke="#087f73"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text
          x="319"
          y="153"
          fill="#123b39"
          fontSize="10"
          fontWeight="700"
          fontFamily="Arial"
        >
          Care systems
        </text>
        <path
          d="M148 128h18M274 128h18"
          stroke="#087f73"
          strokeWidth="4"
          strokeDasharray="5 5"
        />
        <circle cx="158" cy="128" r="5" fill="#ff8068" />
        <circle cx="282" cy="128" r="5" fill="#ff8068" />
      </svg>
    );
  if (type === "support")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of ongoing care and support"
      >
        <circle cx="220" cy="140" r="92" fill="#fffdf8" />
        <circle cx="220" cy="140" r="67" fill="#e6f1e5" />
        <path
          d="M220 87v53l37 22"
          fill="none"
          stroke="#087f73"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="220" cy="140" r="8" fill="#ff8068" />
        <path
          d="M144 95c18-28 47-45 80-47"
          fill="none"
          stroke="#ff8068"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="m218 38 13 10-15 7"
          fill="none"
          stroke="#ff8068"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M296 182c-18 28-47 45-80 47"
          fill="none"
          stroke="#91bf9f"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="m222 239-13-10 15-7"
          fill="none"
          stroke="#91bf9f"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="55" y="105" width="70" height="58" rx="9" fill="#d8f36a" />
        <path
          d="M75 134h30M90 119v30"
          stroke="#087f73"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect x="315" y="105" width="70" height="58" rx="9" fill="#fae0d6" />
        <path
          d="M335 134h30"
          stroke="#d57c66"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "patient")
    return (
      <svg
        viewBox="0 0 440 280"
        role="img"
        aria-label="Illustration of a patient appointment experience"
      >
        <rect x="133" y="25" width="174" height="230" rx="25" fill="#123b39" />
        <rect x="142" y="37" width="156" height="206" rx="17" fill="#fffdf8" />
        <rect x="194" y="45" width="52" height="5" rx="3" fill="#d8e3db" />
        <text x="158" y="76" fill="#426a5b" fontSize="10" fontFamily="Arial">
          YOUR NEXT VISIT
        </text>
        <text
          x="158"
          y="100"
          fill="#123b39"
          fontSize="17"
          fontWeight="700"
          fontFamily="Arial"
        >
          You’re all set.
        </text>
        <rect x="157" y="115" width="126" height="64" rx="9" fill="#e9f3ef" />
        <circle cx="179" cy="146" r="15" fill="#ffb39e" />
        <text x="171" y="150" fill="#123b39" fontSize="8" fontFamily="Arial">
          AR
        </text>
        <text x="201" y="140" fill="#71887c" fontSize="8" fontFamily="Arial">
          THURSDAY · 10:30
        </text>
        <text
          x="201"
          y="155"
          fill="#123b39"
          fontSize="10"
          fontWeight="700"
          fontFamily="Arial"
        >
          Dr. Anika Rao
        </text>
        <rect x="157" y="191" width="126" height="25" rx="5" fill="#087f73" />
        <text x="183" y="207" fill="white" fontSize="9" fontFamily="Arial">
          View visit details →
        </text>
        <circle cx="99" cy="86" r="22" fill="#d8f36a" />
        <path
          d="M91 86h16M99 78v16"
          stroke="#087f73"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="345" cy="187" r="28" fill="#ff8068" />
        <path
          d="M335 187c7-13 13-13 20 0M345 177v20"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 440 280"
      role="img"
      aria-label="Illustration of a healthcare operations dashboard"
    >
      <rect x="47" y="35" width="346" height="210" rx="12" fill="#fffdf8" />
      <path d="M47 75h346" stroke="#e1e8df" />
      <rect x="67" y="51" width="8" height="8" rx="2" fill="#087f73" />
      <rect x="83" y="51" width="59" height="7" rx="3" fill="#71887c" />
      <rect x="340" y="49" width="33" height="12" rx="6" fill="#e9f3ef" />
      <text x="68" y="99" fill="#7e9588" fontSize="8" fontFamily="Arial">
        WEEKLY OVERVIEW
      </text>
      <text
        x="68"
        y="123"
        fill="#123b39"
        fontSize="18"
        fontWeight="700"
        fontFamily="Arial"
      >
        Practice activity
      </text>
      <rect x="68" y="140" width="98" height="72" rx="7" fill="#e9f3ef" />
      <text x="80" y="159" fill="#71887c" fontSize="7" fontFamily="Arial">
        APPOINTMENTS
      </text>
      <text
        x="80"
        y="190"
        fill="#123b39"
        fontSize="25"
        fontWeight="700"
        fontFamily="Arial"
      >
        128
      </text>
      <rect x="177" y="140" width="98" height="72" rx="7" fill="#f9e9df" />
      <text x="189" y="159" fill="#8f7e72" fontSize="7" fontFamily="Arial">
        NEW PATIENTS
      </text>
      <text
        x="189"
        y="190"
        fill="#123b39"
        fontSize="25"
        fontWeight="700"
        fontFamily="Arial"
      >
        +24
      </text>
      <rect x="286" y="140" width="89" height="72" rx="7" fill="#f0f1d6" />
      <text x="298" y="159" fill="#81846a" fontSize="7" fontFamily="Arial">
        FOLLOW-UPS
      </text>
      <text
        x="298"
        y="190"
        fill="#123b39"
        fontSize="25"
        fontWeight="700"
        fontFamily="Arial"
      >
        86%
      </text>
      <path d="M70 228h302" stroke="#e2e9e2" />
      <rect x="86" y="217" width="10" height="15" rx="2" fill="#84bb9c" />
      <rect x="114" y="207" width="10" height="25" rx="2" fill="#ff8068" />
      <rect x="142" y="213" width="10" height="19" rx="2" fill="#84bb9c" />
      <rect x="170" y="197" width="10" height="35" rx="2" fill="#d8f36a" />
      <rect x="198" y="204" width="10" height="28" rx="2" fill="#84bb9c" />
      <rect x="226" y="189" width="10" height="43" rx="2" fill="#ff8068" />
      <rect x="254" y="198" width="10" height="34" rx="2" fill="#84bb9c" />
      <rect x="282" y="184" width="10" height="48" rx="2" fill="#d8f36a" />
    </svg>
  );
}
