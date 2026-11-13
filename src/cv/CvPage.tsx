import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./cv.css";
import { useEffect } from "react";
import cvPhoto from "../assets/images/cv-photo.webp";
import RichText from "../components/content/RichText";
import type { Language } from "../config/routes";
import { SITE_URL } from "../config/site";
import { CONTACT_LINKS, FULL_NAME } from "../data/contact";
import { CV_EDUCATION, CV_EXPERIENCES, CV_PHONE, CV_PROJECTS, CV_SKILL_GROUPS, CV_SPOKEN_LANGUAGES, CV_TEXT, type CvEntry } from "../data/cv";
import { EDUCATION } from "../data/education";
import { formatPeriod } from "../i18n/format";

const STRONG_CLASS = "cv-strong";
const URL_PROTOCOL_PATTERN = /^https?:\/\/(www\.)?/;

const displayUrl = (url: string): string => url.replace(URL_PROTOCOL_PATTERN, "");

const contactHref = (linkId: string): string => {
  const link = CONTACT_LINKS.find((candidate) => candidate.id === linkId);
  if (link === undefined) {
    throw new Error(`Unknown contact link: ${linkId}`);
  }
  return link.href;
};

const CvEntryBlock = ({ entry, language }: { entry: CvEntry; language: Language }) => (
  <div className="cv-entry">
    <div className="cv-entry-head">
      <p>
        <span className="cv-entry-title">{entry.title}</span>
        <span className="cv-entry-role"> · {entry.role[language]}</span>
      </p>
      <p className="cv-place">{entry.place[language]}</p>
    </div>
    <p className="cv-date">{formatPeriod({ period: entry.period, language })}</p>
    {entry.summary && (
      <p className="cv-text"><RichText text={entry.summary[language]} highlightClassName={STRONG_CLASS} /></p>
    )}
    {entry.bullets.length > 0 && (
      <ul className="cv-bullets">
        {entry.bullets.map((bullet) => (
          <li key={bullet.en}><RichText text={bullet[language]} highlightClassName={STRONG_CLASS} /></li>
        ))}
      </ul>
    )}
    {entry.tech && <p className="cv-tech">{CV_TEXT[language].labels.tech}: {entry.tech}</p>}
  </div>
);

type CvPageProps = {
  language: Language;
};

const CvPage = ({ language }: CvPageProps) => {
  const text = CV_TEXT[language];
  const email = contactHref("email").replace("mailto:", "");
  const linkedinUrl = contactHref("linkedin");
  const githubUrl = contactHref("github");

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = text.documentTitle;
    const robots = document.head.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute("content") ?? null;
    robots?.setAttribute("content", "noindex, nofollow");
    return () => {
      if (previousRobots !== null) {
        robots?.setAttribute("content", previousRobots);
      }
    };
  }, [language, text.documentTitle]);

  const details = [
    { label: text.labels.address, value: text.location },
    { label: text.labels.phone, value: CV_PHONE },
    { label: text.labels.email, value: email, href: `mailto:${email}` },
    { label: text.labels.linkedin, value: displayUrl(linkedinUrl), href: linkedinUrl },
    { label: text.labels.github, value: displayUrl(githubUrl), href: githubUrl },
    { label: text.labels.portfolio, value: displayUrl(SITE_URL), href: SITE_URL },
  ];

  return (
    <div className="cv-screen">
      <article className="cv-sheet">
        <header className="cv-header">
          <h1 className="cv-name">{FULL_NAME.toUpperCase()}</h1>
          <p className="cv-headline">{text.headline}</p>
        </header>
        <div className="cv-columns">
          <aside className="cv-sidebar">
            <img className="cv-photo" src={cvPhoto} alt={FULL_NAME} />

            <h2 className="cv-section-title">{text.sections.details}</h2>
            {details.map(({ label, value, href }) => (
              <div key={label}>
                <p className="cv-label">{label}</p>
                <p className="cv-value">{href === undefined ? value : <a href={href}>{value}</a>}</p>
              </div>
            ))}

            <h2 className="cv-section-title">{text.sections.skills}</h2>
            {CV_SKILL_GROUPS.map((group) => (
              <div key={group.title.en} className="cv-skill-group">
                <p className="cv-label">{group.title[language]}</p>
                <p className="cv-value">{group.items[language]}</p>
              </div>
            ))}

            <h2 className="cv-section-title">{text.sections.languages}</h2>
            {CV_SPOKEN_LANGUAGES.map((spokenLanguage) => (
              <p key={spokenLanguage.name.en} className="cv-language">
                <span>{spokenLanguage.name[language]}</span>
                <span className="cv-muted">{spokenLanguage.level[language]}</span>
              </p>
            ))}
          </aside>

          <main className="cv-main">
            <h2 className="cv-section-title">{text.sections.profile}</h2>
            <p><RichText text={text.summary} highlightClassName={STRONG_CLASS} /></p>

            <h2 className="cv-section-title">{text.sections.experience}</h2>
            {CV_EXPERIENCES.map((entry) => <CvEntryBlock key={entry.id} entry={entry} language={language} />)}

            <h2 className="cv-section-title">{text.sections.projects}</h2>
            {CV_PROJECTS.map((entry) => <CvEntryBlock key={entry.id} entry={entry} language={language} />)}
            <p className="cv-note">{text.moreProjects} <a href={SITE_URL} className="cv-muted">{displayUrl(SITE_URL)}</a></p>

            <h2 className="cv-section-title">{text.sections.education}</h2>
            {CV_EDUCATION.map(({ educationId, title, place }) => {
              const education = EDUCATION.find((candidate) => candidate.id === educationId);
              return (
                <div key={educationId} className="cv-education">
                  <div>
                    <p className="cv-education-title">{title[language]}</p>
                    {education && <p>{formatPeriod({ period: education.period, language })}</p>}
                  </div>
                  <p className="cv-place">{place[language]}</p>
                </div>
              );
            })}
          </main>
        </div>
      </article>
    </div>
  );
};

export default CvPage;
