"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import {
  skillCenter,
  skillDimensions,
  skillLevels,
  type SkillDimension,
} from "@/data/skillDimensions";

const SIZE = 640;
const CENTER = SIZE / 2;
const MAX_RADIUS = 250;
const LEVELS = skillLevels.length;

function pointOnAxis(position: SkillDimension["position"], radius: number) {
  switch (position) {
    case "top":
      return { x: CENTER, y: CENTER - radius };
    case "right":
      return { x: CENTER + radius, y: CENTER };
    case "bottom":
      return { x: CENTER, y: CENTER + radius };
    case "left":
      return { x: CENTER - radius, y: CENTER };
  }
}

function diamondPoints(radius: number) {
  return [
    pointOnAxis("top", radius),
    pointOnAxis("right", radius),
    pointOnAxis("bottom", radius),
    pointOnAxis("left", radius),
  ]
    .map((p) => `${p.x},${p.y}`)
    .join(" ");
}

function levelIndex(dim: SkillDimension) {
  return skillLevels.findIndex((level) => level.key === dim.currentLevel);
}

export function SkillsDiamond() {
  const [activeKey, setActiveKey] = useState<SkillDimension["key"] | null>(null);
  const [hoverKey, setHoverKey] = useState<SkillDimension["key"] | null>(null);

  const active = useMemo(
    () => skillDimensions.find((dim) => dim.key === activeKey) ?? null,
    [activeKey],
  );

  return (
    <div className="qa-diamond">
      <div className="qa-diamond__stage">
        <svg
          className="qa-diamond__svg"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label="Losange QA / Test Engineering à quatre dimensions"
        >
          <defs>
            <radialGradient id="qaDiamondGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
              <stop offset="70%" stopColor="var(--accent)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <polygon points={diamondPoints(MAX_RADIUS)} fill="url(#qaDiamondGlow)" />

          {Array.from({ length: LEVELS }, (_, index) => {
            const radius = ((index + 1) / LEVELS) * MAX_RADIUS;
            return (
              <polygon
                key={`ring-${index}`}
                points={diamondPoints(radius)}
                className="qa-diamond__ring"
                style={{ opacity: 0.35 + index * 0.09 }}
              />
            );
          })}

          <line x1={CENTER} y1={CENTER - MAX_RADIUS} x2={CENTER} y2={CENTER + MAX_RADIUS} className="qa-diamond__axis" />
          <line x1={CENTER - MAX_RADIUS} y1={CENTER} x2={CENTER + MAX_RADIUS} y2={CENTER} className="qa-diamond__axis" />

          {skillDimensions.map((dim) => {
            const index = levelIndex(dim);
            const radius = ((index + 1) / LEVELS) * MAX_RADIUS;
            const point = pointOnAxis(dim.position, radius);
            const isActive = activeKey === dim.key;
            const isHover = hoverKey === dim.key;
            return (
              <g key={`marker-${dim.key}`} className={`qa-diamond__marker ${isActive || isHover ? "is-active" : ""}`}>
                <circle cx={point.x} cy={point.y} r={13} className="qa-diamond__halo" />
                <circle cx={point.x} cy={point.y} r={8} className="qa-diamond__dot" />
              </g>
            );
          })}

          <g className="qa-diamond__center">
            <polygon points={diamondPoints(70)} className="qa-diamond__center-shape" />
            <text x={CENTER} y={CENTER - 6} textAnchor="middle" className="qa-diamond__center-title">
              QA
            </text>
            <text x={CENTER} y={CENTER + 16} textAnchor="middle" className="qa-diamond__center-sub">
              Test Engineering
            </text>
          </g>
        </svg>

        <div className="qa-diamond__labels" role="tablist" aria-label="Dimensions QA">
          {skillDimensions.map((dim) => {
            const level = skillLevels[levelIndex(dim)];
            const isActive = activeKey === dim.key;
            return (
              <button
                key={dim.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="qa-diamond-panel"
                className={`qa-diamond-label qa-diamond-label--${dim.position} ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveKey((prev) => (prev === dim.key ? null : dim.key))}
                onMouseEnter={() => setHoverKey(dim.key)}
                onMouseLeave={() => setHoverKey((prev) => (prev === dim.key ? null : prev))}
                onFocus={() => setHoverKey(dim.key)}
                onBlur={() => setHoverKey((prev) => (prev === dim.key ? null : prev))}
              >
                <span className="qa-diamond-label__title">{dim.title}</span>
                <span className="qa-diamond-label__intent">{dim.intent}</span>
                <span className="qa-diamond-label__level">Level : {level.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="qa-diamond-panel" className="qa-diamond__panel" aria-live="polite">
        {active ? <DimensionPanel dimension={active} onClose={() => setActiveKey(null)} /> : <DimensionHint />}
      </div>
    </div>
  );
}

function DimensionHint() {
  return (
    <div className="qa-diamond__hint">
      <p className="qa-diamond__hint-eyebrow">Modèle de compétence</p>
      <p className="qa-diamond__hint-text">
        Sélectionnez une dimension pour révéler ses compétences, son niveau de maturité et les preuves associées.
      </p>
      <ul className="qa-diamond__hint-list">
        {skillLevels.map((level, index) => (
          <li key={level.key}>
            <span className="qa-diamond__hint-index">{index + 1}</span>
            {level.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DimensionPanel({ dimension, onClose }: { dimension: SkillDimension; onClose: () => void }) {
  const currentIndex = levelIndex(dimension);
  return (
    <article className="qa-panel">
      <header className="qa-panel__header">
        <div>
          <p className="qa-panel__intent">{dimension.intent}</p>
          <h3 className="qa-panel__title">{dimension.title}</h3>
        </div>
        <button type="button" className="qa-panel__close" onClick={onClose} aria-label="Fermer le panneau">
          <X size={16} aria-hidden="true" />
        </button>
      </header>

      <p className="qa-panel__desc">{dimension.description}</p>

      <div className="qa-panel__scale" role="list" aria-label="Progression de maturité">
        {skillLevels.map((level, index) => {
          const state = index < currentIndex ? "past" : index === currentIndex ? "current" : "future";
          return (
            <div key={level.key} className={`qa-panel__step qa-panel__step--${state}`} role="listitem">
              <span className="qa-panel__step-index">{index + 1}</span>
              <span>{level.label}</span>
            </div>
          );
        })}
      </div>

      <div className="qa-panel__section">
        <h4>Compétences</h4>
        <div className="qa-panel__chips">
          {dimension.competencies.map((competency) => (
            <span key={competency} className="chip chip--outline">
              {competency}
            </span>
          ))}
        </div>
      </div>

      <div className="qa-panel__section">
        <h4>Preuves du portfolio</h4>
        <ul className="qa-panel__evidence">
          {dimension.evidence.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href}>
                  {item.label} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
