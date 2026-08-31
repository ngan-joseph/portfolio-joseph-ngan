"use client";

import { useMemo, useState } from "react";
import { bragItems, impactLabels, type BragItem, type ImpactLevel } from "@/data/brag";

type ImpactFilter = "all" | ImpactLevel;
type TagFilter = "all" | string;

const impactOrder: ImpactFilter[] = ["all", "principal", "staff", "techlead", "senior"];

export function BragList() {
  const [impact, setImpact] = useState<ImpactFilter>("all");
  const [tag, setTag] = useState<TagFilter>("all");

  const availableImpacts = useMemo(() => {
    const set = new Set<ImpactLevel>();
    bragItems.forEach((item) => set.add(item.impact));
    return impactOrder.filter((key) => key === "all" || set.has(key as ImpactLevel));
  }, []);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    bragItems.forEach((item) => {
      item.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1));
    });
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const filtered = useMemo(() => {
    return bragItems
      .filter((item) => (impact === "all" ? true : item.impact === impact))
      .filter((item) => (tag === "all" ? true : item.tags.includes(tag)))
      .sort((a, b) => b.sortKey - a.sortKey);
  }, [impact, tag]);

  const grouped = useMemo(() => {
    const map = new Map<number, BragItem[]>();
    filtered.forEach((item) => {
      const list = map.get(item.year) ?? [];
      list.push(item);
      map.set(item.year, list);
    });
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const isEmpty = filtered.length === 0;

  return (
    <>
      <div className="brag-filters" role="region" aria-label="Filtres du brag document">
        <div className="brag-filters__row">
          <span className="brag-filters__label">Impact</span>
          {availableImpacts.map((key) => (
            <button
              key={key}
              type="button"
              className="filter-btn"
              aria-pressed={impact === key}
              onClick={() => setImpact(key)}
            >
              {key === "all" ? "Tous" : impactLabels[key as ImpactLevel]}
            </button>
          ))}
        </div>
        <div className="brag-filters__row">
          <span className="brag-filters__label">Tags</span>
          <button
            type="button"
            className="filter-btn"
            aria-pressed={tag === "all"}
            onClick={() => setTag("all")}
          >
            Tous
          </button>
          {tagCounts.map(([name, count]) => (
            <button
              key={name}
              type="button"
              className="filter-btn"
              aria-pressed={tag === name}
              onClick={() => setTag(name)}
            >
              {name} <span aria-hidden="true">·</span> {count}
            </button>
          ))}
        </div>
      </div>

      {isEmpty ? (
        <p className="muted">Aucune réalisation ne correspond à ces filtres.</p>
      ) : (
        grouped.map(([year, items]) => (
          <section key={year} aria-labelledby={`year-${year}`}>
            <h3 id={`year-${year}`} className="brag-year">
              {year}
            </h3>
            <div className="brag-list">
              {items.map((item) => (
                <article className="brag-card" key={item.id}>
                  <div>
                    <span className="brag-card__impact">{impactLabels[item.impact]}</span>
                    <h3 className="brag-card__title">{item.title}</h3>
                    <p className="brag-card__desc">{item.description}</p>
                    <div className="brag-card__tags">
                      {item.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="brag-card__side">
                    {item.ongoing ? (
                      <span className="chip chip--accent">En cours</span>
                    ) : null}
                    {item.meta ? <p style={{ marginTop: 8 }}>{item.meta}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}
