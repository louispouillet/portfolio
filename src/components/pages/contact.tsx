import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaCss3Alt } from "react-icons/fa";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import Louis from "../../assets/images/Louis.webp";
import { CONTACT_LINKS, FULL_NAME, PROFILE_FACTS } from "../../data/contact";
import { useLanguage } from "../../hooks/useLanguage";
import { translate } from "../../i18n/format";
import { UI_TEXT } from "../../i18n/ui";


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
  "w-full bg-[#2A2A2A] border border-[#444] rounded text-white font-mono text-sm px-3 py-2 outline-none focus:border-[#4EC9B0] transition-colors placeholder:text-[#555]";

const labelClass = "font-mono text-[#777] text-xs tracking-widest";

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
    <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E] px-4 py-4 sm:px-8 sm:py-6 pb-10">
      <span className="border-l -mt-3 -ml-2 lg:-mt-5 border-[#929AA7] lg:-ml-6 pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block">
        louis {'>'} portfolio {'>'} src {'>'}{' '}
        <span className="text-white">contact.css</span>
      </span>

      <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm text-[#6F6F6F] lg:ml-3 sm:text-lg lg:text-[1rem]">
        {text.comment}
      </span>

      <div className="slide-up delay-2 mt-5 flex flex-row items-end gap-1 sm:justify-start lg:ml-3">
        <FaCss3Alt className="text-4xl text-[#1608CE] sm:text-6xl lg:text-6xl" />
        <span style={{ fontFamily: "poppins" }} className="ml-3 text-3xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">
          {text.title}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 slide-up delay-3 lg:ml-3">

        <div className="bg-[#1C1C1C] border border-[#333] rounded-lg overflow-hidden flex flex-row hover:border-[#555] transition-all cursor-default shadow-xl">
          <div className="flex flex-col justify-between p-5 flex-1">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-white font-bold text-xl tracking-tight">{FULL_NAME}</span>
              <span className="font-mono text-[#666] text-sm">{text.role}</span>
              <span className="font-mono text-[#4EC9B0] text-xs mt-2 flex items-center gap-1.5">
                <VscCircleFilled className="text-[8px] animate-pulse" />
                {text.availability}
              </span>
            </div>
            <div className="h-px w-full bg-[#2a2a2a] my-4" />
            <div className="flex flex-col gap-3 font-mono">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span className="text-[#4a4a4a] text-[10px] tracking-widest uppercase block">{fact.label}</span>
                  <span className="text-[#CCC] text-sm mt-0.5 block">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-44 shrink-0 mr-4 my-4 rounded-lg overflow-hidden bg-white">
            <img src={Louis} alt={FULL_NAME} className="w-full h-full object-cover object-center" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono italic text-[#4EC9B0] text-lg tracking-wider">{text.findMe}</span>
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

      <div className="slide-up delay-4 mt-6 lg:ml-3 bg-[#232323] border border-[#777] rounded-[5px] p-6 lg:w-[calc(100%-0.75rem)]">
        <span className="font-mono italic text-[#4EC9B0] text-lg tracking-wider">{text.form.title}</span>
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
            <span className="font-mono text-[#4EC9B0] text-sm">{text.form.success}</span>
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
      </div>
    </div>
  );
};

export default Contact;
