"use client";

import { useState } from "react";
import { packages } from "./packages";
import s from "./CostEstimator.module.css";

export default function CostEstimator() {
  const [serviceId, setServiceId] = useState(packages[0].id);
  const [tierIndex, setTierIndex] = useState(0);
  const selectedService =
    packages.find((item) => item.id === serviceId) || packages[0];
  const selectedTier = selectedService.tiers[tierIndex];

  function changeService(event) {
    setServiceId(event.target.value);
    setTierIndex(0);
  }

  return (
    <div className={s.packageExplorer}>
      <div className={s.explorerHead}>
        <label htmlFor="service-package">Select a service</label>
        <select id="service-package" value={serviceId} onChange={changeService}>
          {packages.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <p>{selectedService.note}</p>
      </div>

      <div className={s.packageGrid}>
        {selectedService.tiers.map((tier, index) => (
          <article
            className={`${s.packageCard} ${index === tierIndex ? s.packageSelected : ""}`}
            key={tier.name}
          >
            <div className={s.packageTop}>
              <span>
                0{index + 1} / {selectedService.unit.toUpperCase()}
              </span>
              {index === 1 && <i>EXPANDED SCOPE</i>}
            </div>
            <h3>{tier.name}</h3>
            <strong>{tier.price}</strong>
            <span className={s.timeline}>
              Typical planning range · {tier.timeline}
            </span>
            <div className={s.featureTitle}>INCLUDED FEATURES</div>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-pressed={index === tierIndex}
              onClick={() => setTierIndex(index)}
            >
              {index === tierIndex ? "Selected package" : "Choose package"}
              <Arrow />
            </button>
          </article>
        ))}
      </div>

      <div className={s.selection} aria-live="polite">
        <div>
          <span>YOUR CURRENT SELECTION</span>
          <b>
            {selectedService.name} · {selectedTier.name}
          </b>
        </div>
        <strong>{selectedTier.price}</strong>
        <a
          href={`/contact?service=${encodeURIComponent(selectedService.name)}&package=${encodeURIComponent(selectedTier.name)}`}
        >
          Discuss this package <Arrow />
        </a>
      </div>
    </div>
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
