import "@fontsource/poppins/800.css";
import "./skills.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaCss3Alt, FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import Louis from "../assets/louis.png";


const EMAILJS_SERVICE_ID  = "service_sfkbqfq";
const EMAILJS_TEMPLATE_ID = "template_709qsae";
const EMAILJS_PUBLIC_KEY  = "jYfnlDBM6bIni5B8W";


const RATE_LIMIT_MAX      = 3;
const RATE_LIMIT_WINDOW   = 60 * 60 * 1000; // 1 heure en ms
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

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ from_name: "", from_email: "", subject: "", message: "" });

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
        // Contact me if you have any questions or would like to collaborate!
      </span>

      <div className="slide-up delay-2 mt-5 flex flex-row items-end gap-1 sm:justify-start lg:ml-3">
        <FaCss3Alt className="text-4xl text-[#1608CE] sm:text-6xl lg:text-6xl" />
        <span style={{ fontFamily: "poppins" }} className="ml-3 text-3xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">
          Contact
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 slide-up delay-3 lg:ml-3">

        <div className="bg-[#232323] border border-[#777] rounded-[5px] p-6 flex flex-col gap-4 hover:bg-[#2D2D2D] hover:border-t-[#1608CE] hover:border-t-2 transition-colors cursor-default">
          <div className="flex flex-row items-center gap-5">
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#1608CE] to-[#4EC9B0] flex items-center justify-center text-2xl font-extrabold text-white" style={{ fontFamily: "poppins" }}>
                <img src={Louis} alt="Profile" className="w-full h-20 object-cover rounded-full" />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#232323] rounded-full flex items-center justify-center">
                <VscCircleFilled className="text-[#4EC9B0] text-xs" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-white font-bold text-lg tracking-tight">Louis Pouillet</span>
              <span className="font-mono text-[#777] text-sm">IT Student</span>
              <span className="font-mono text-[#4EC9B0] text-xs mt-1 flex items-center gap-1">
                <VscCircleFilled className="text-[10px]" />
                Open to opportunities
              </span>
            </div>
          </div>
          <div className="h-px w-full bg-[#333]" />
          <div className="grid grid-cols-2 gap-3 font-mono text-sm">
            <div className="flex flex-col">
              <span className="text-[#777] text-xs">LOCATION</span>
              <span className="text-white mt-1">Toulouse, France</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#777] text-xs">SCHOOL</span>
              <span className="text-white mt-1">Epitech Toulouse</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#777] text-xs">LANGUAGES</span>
              <span className="text-white mt-1">FR / EN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#777] text-xs">YEAR</span>
              <span className="text-white mt-1">B1 — 2025/2026</span>
            </div>
          </div>
        </div>

        {/* Links card */}
        <div className="flex flex-col gap-3">
          <span className="font-mono italic text-[#4EC9B0] text-lg tracking-wider">FIND ME</span>
          <a
            href="mailto:louis.pouillet@epitech.eu"
            className="flex flex-row gap-1 border border-[#787E88] px-3 py-3 items-center rounded hover:bg-[#252E2C] hover:border-[#4EC9B0] transition-colors group"
          >
            <AiOutlineMail className="text-4xl text-[#4EC9B0] border border-[#333] py-1.5 rounded bg-[#252E2C]" />
            <div className="flex flex-col ml-2">
              <span className="font-mono text-[#4EC9B0] text-sm">Email</span>
              <span className="font-mono text-[#999] text-xs">louis.pouillet@epitech.eu</span>
            </div>
            <FiArrowUpRight className="ml-auto text-[#787E88] group-hover:text-[#4EC9B0] transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/louis-pouillet-9b7549392"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1 border border-[#787E88] px-3 py-3 items-center rounded hover:bg-[#21262D] hover:border-[#0A66C2] transition-colors group"
          >
            <FaLinkedin className="text-4xl text-[#0A66C2] border border-[#333] py-1.5 rounded bg-[#21262D]" />
            <div className="flex flex-col ml-2">
              <span className="font-mono text-[#0A66C2] text-sm">LinkedIn</span>
              <span className="font-mono text-[#999] text-xs">linkedin.com/in/louis-pouillet</span>
            </div>
            <FiArrowUpRight className="ml-auto text-[#787E88] group-hover:text-[#0A66C2] transition-colors" />
          </a>
          <a
            href="https://github.com/LoucheVDC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1 border border-[#787E88] px-3 py-3 items-center rounded hover:bg-[#21262D] hover:border-[#CCC] transition-colors group"
          >
            <FaGithub className="text-4xl text-[#CCC] border border-[#333] py-1.5 rounded bg-[#21262D]" />
            <div className="flex flex-col ml-2">
              <span className="font-mono text-[#CCC] text-sm">GitHub</span>
              <span className="font-mono text-[#999] text-xs">github.com/LoucheVDC</span>
            </div>
            <FiArrowUpRight className="ml-auto text-[#787E88] group-hover:text-[#CCC] transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/@louchevdc5123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1 border border-[#787E88] px-3 py-3 items-center rounded hover:bg-[#1A0000] hover:border-[#FF0000] transition-colors group"
          >
            <FaYoutube className="text-4xl text-[#FF0000] border border-[#333] py-1.5 rounded bg-[#1A0000]" />
            <div className="flex flex-col ml-2">
              <span className="font-mono text-[#FF0000] text-sm">YouTube</span>
              <span className="font-mono text-[#999] text-xs">youtube.com/@louchevdc</span>
            </div>
            <FiArrowUpRight className="ml-auto text-[#787E88] group-hover:text-[#FF0000] transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/louis_pouillet?igsh=YnQ3Z2d4bDNobjM4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1 border border-[#787E88] px-3 py-3 items-center rounded hover:bg-[#1A0A14] hover:border-[#E1306C] transition-colors group"
          >
            <FaInstagram className="text-4xl text-[#E1306C] border border-[#333] py-1.5 rounded bg-[#1A0A14]" />
            <div className="flex flex-col ml-2">
              <span className="font-mono text-[#E1306C] text-sm">Instagram</span>
              <span className="font-mono text-[#999] text-xs">instagram.com/louis_pouillet</span>
            </div>
            <FiArrowUpRight className="ml-auto text-[#787E88] group-hover:text-[#E1306C] transition-colors" />
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div className="slide-up delay-4 mt-6 lg:ml-3 bg-[#232323] border border-[#777] rounded-[5px] p-6 lg:w-[calc(100%-0.75rem)]">
        <span className="font-mono italic text-[#4EC9B0] text-lg tracking-wider">SEND ME A MESSAGE</span>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-mono text-[#777] text-xs tracking-widest">YOUR NAME</label>
              <input
                name="from_name"
                value={fields.from_name}
                onChange={handleChange}
                required
                placeholder="Louis Pouillet"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-mono text-[#777] text-xs tracking-widest">YOUR EMAIL</label>
              <input
                type="email"
                name="from_email"
                value={fields.from_email}
                onChange={handleChange}
                required
                placeholder="louis.pouillet@epitech.eu"
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[#777] text-xs tracking-widest">SUBJECT</label>
            <input
              name="subject"
              value={fields.subject}
              onChange={handleChange}
              required
              placeholder="Project collaboration / Internship / ..."
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[#777] text-xs tracking-widest">MESSAGE</label>
            <textarea
              name="message"
              value={fields.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Hello Louis, I'd like to..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Feedback messages */}
          {formState === "success" && (
            <span className="font-mono text-[#4EC9B0] text-sm">// Message sent successfully! I'll get back to you soon.</span>
          )}
          {formState === "error" && (
            <span className="font-mono text-[#F87171] text-sm">// Something went wrong. Please try again or contact me directly by email.</span>
          )}
          {formState === "rate_limited" && (
            <span className="font-mono text-[#FACC14] text-sm">// Too many requests. Please wait before sending another message.</span>
          )}

          <button
            type="submit"
            disabled={formState === "sending" || formState === "rate_limited"}
            className="mt-1 flex flex-row items-center gap-2 self-start bg-[#1608CE] hover:bg-[#1E0FFF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-5 py-2 rounded font-mono text-white text-sm"
          >
            <FiSend className={formState === "sending" ? "animate-pulse" : ""} />
            {formState === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
