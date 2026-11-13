import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import Louis from "../../assets/images/Louis.webp";
import { CONTACT_LINKS, FULL_NAME, PROFILE_FACTS } from "../../data/contact";
import { useLanguage } from "../../hooks/useLanguage";
import { translate } from "../../i18n/format";
import { UI_TEXT } from "../../i18n/ui";
import Card from "../ui/Card";
import CodeComment from "../ui/CodeComment";
import PageHeader from "../ui/PageHeader";
import PageLayout from "../ui/PageLayout";


const EMAILJS_SERVICE_ID  = "service_sfkbqfq";
const EMAILJS_TEMPLATE_ID = "template_709qsae";
const EMAILJS_PUBLIC_KEY  = "jYfnlDBM6bIni5B8W";


const RATE_LIMIT_MAX      = 3;
const RATE_LIMIT_WINDOW   = 60 * 60 * 1000;
const RATE_LIMIT_KEY      = "contact_submissions";

function getRateLimitData(): { timestamps: number[] } {
  try {
    return JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '{"timestamps":[]}');
  } catch {
    return { timestamps: [] };
  }
}

function isRateLimited(): boolean {
  const now = Date.now();
  const data = getRateLimitData();
  const recent = data.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  return recent.length >= RATE_LIMIT_MAX;
}

function recordSubmission() {
  const now = Date.now();
  const data = getRateLimitData();
  const recent = data.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  recent.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ timestamps: recent }));
}



type FormState = "idle" | "sending" | "success" | "error" | "rate_limited";

const inputClass =
  "w-full bg-[#2A2A2A] border border-[#444] rounded text-white font-mono text-sm px-3 py-2 outline-none focus:border-accent-teal transition-colors placeholder:text-[#8A8A8A]";

const labelClass = "font-mono text-muted text-xs tracking-widest";

const Contact = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ from_name: "", from_email: "", subject: "", message: "" });

  const facts = [
    { label: text.facts.location, value: PROFILE_FACTS.location[language] },
    { label: text.facts.school, value: PROFILE_FACTS.school },
    { label: text.facts.languages, value: PROFILE_FACTS.languages },
    { label: text.facts.year, value: PROFILE_FACTS.year },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRateLimited()) { setFormState("rate_limited"); return; }

    setFormState("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);
      recordSubmission();
      setFormState("success");
      setFields({ from_name: "", from_email: "", subject: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  return (
    <PageLayout isPadded>
      <CodeComment text={text.comment} className="mt-3 lg:ml-3" />
      <PageHeader page="contact" title={text.title} className="mt-5 lg:ml-3" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 slide-up delay-3 lg:ml-3">

        <div className="bg-[#1C1C1C] border border-[#333] rounded-lg overflow-hidden flex flex-row hover:border-[#555] transition-all cursor-default shadow-xl">
          <div className="flex flex-col justify-between p-5 flex-1">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-white font-bold text-xl tracking-tight">{FULL_NAME}</span>
              <span className="font-mono text-muted text-sm">{text.role}</span>
              <span className="font-mono text-accent-teal text-xs mt-2 flex items-center gap-1.5">
                <VscCircleFilled className="text-[8px] animate-pulse" />
                {text.availability}
              </span>
            </div>
            <div className="h-px w-full bg-[#2a2a2a] my-4" />
            <div className="flex flex-col gap-3 font-mono">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span className="text-muted text-[10px] tracking-widest uppercase block">{fact.label}</span>
                  <span className="text-soft text-sm mt-0.5 block">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-44 shrink-0 mr-4 my-4 rounded-lg overflow-hidden bg-white">
            <img src={Louis} alt={FULL_NAME} className="w-full h-full object-cover object-center" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono italic text-accent-teal text-lg tracking-wider">{text.findMe}</span>
          {CONTACT_LINKS.map(({ id, label, handle, href, icon: Icon, isExternal, cardClassName, iconClassName, labelClassName, arrowClassName }) => (
            <a
              key={id}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={`flex flex-row gap-1 border border-[#787E88] px-3 py-3 items-center rounded transition-colors group ${cardClassName}`}
            >
              <Icon className={`text-4xl border border-[#333] py-1.5 rounded ${iconClassName}`} />
              <div className="flex flex-col ml-2">
                <span className={`font-mono text-sm ${labelClassName}`}>{translate({ text: label, language })}</span>
                <span className="font-mono text-[#999] text-xs">{handle}</span>
              </div>
              <FiArrowUpRight className={`ml-auto text-[#787E88] transition-colors ${arrowClassName}`} />
            </a>
          ))}
        </div>
      </div>

      <Card className="slide-up delay-4 mt-6 lg:ml-3 lg:w-[calc(100%-0.75rem)]">
        <span className="font-mono italic text-accent-teal text-lg tracking-wider">{text.form.title}</span>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="contact-name" className={labelClass}>{text.form.nameLabel}</label>
              <input
                id="contact-name"
                name="from_name"
                value={fields.from_name}
                onChange={handleChange}
                required
                placeholder={text.form.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="contact-email" className={labelClass}>{text.form.emailLabel}</label>
              <input
                id="contact-email"
                type="email"
                name="from_email"
                value={fields.from_email}
                onChange={handleChange}
                required
                placeholder={text.form.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-subject" className={labelClass}>{text.form.subjectLabel}</label>
            <input
              id="contact-subject"
              name="subject"
              value={fields.subject}
              onChange={handleChange}
              required
              placeholder={text.form.subjectPlaceholder}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-message" className={labelClass}>{text.form.messageLabel}</label>
            <textarea
              id="contact-message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={text.form.messagePlaceholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          {formState === "success" && (
            <span className="font-mono text-accent-teal text-sm">{text.form.success}</span>
          )}
          {formState === "error" && (
            <span className="font-mono text-[#F87171] text-sm">{text.form.error}</span>
          )}
          {formState === "rate_limited" && (
            <span className="font-mono text-[#FACC14] text-sm">{text.form.rateLimited}</span>
          )}

          <button
            type="submit"
            disabled={formState === "sending" || formState === "rate_limited"}
            className="mt-1 flex flex-row items-center gap-2 self-start bg-[#1608CE] hover:bg-[#1E0FFF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-5 py-2 rounded font-mono text-white text-sm"
          >
            <FiSend className={formState === "sending" ? "animate-pulse" : ""} />
            {formState === "sending" ? text.form.sending : text.form.send}
          </button>
        </form>
      </Card>
    </PageLayout>
  );
};

export default Contact;
