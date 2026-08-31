"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  const isFrench = locale === "fr";

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLocale}
      aria-label={isFrench ? "Passer le site en anglais" : "Switch site to French"}
      title={isFrench ? "English" : "Français"}
    >
      <span aria-hidden="true">{isFrench ? "🇫🇷" : "🇬🇧"}</span>
      <span>{isFrench ? "EN" : "FR"}</span>
    </button>
  );
}
