import "@fontsource/poppins/800.css";
import "./skills.css"
import { useEffect, useState } from "react";
import { VscJson } from "react-icons/vsc";

type SkillBarProps = {
  skill: string;
  level: number;
  color: string;
  delay?: number;
  margin?: number;
};

const SkillBar = ({ skill, level, color, delay = 0, margin = 10 } : SkillBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const targetLevel = Math.max(0, Math.min(100, level));
    setWidth(0);

    const timer = setTimeout(() => {
      setWidth(targetLevel);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);
  
  return (
    <div className="mb-3">
      <div className="flex flex-row items-center">
        <span className="font-mono text-sm text-[#777]">{skill}</span>
      <div
        className="h-0.5 flex-1 bg-[#2A2A2A] mr-2 rounded-full overflow-hidden"
        style={{ marginLeft: `${margin}px` }}
      >
        <div
          className="h-0.5 rounded-full transition-all duration-2000 ease-in-out"
          style={{
            backgroundColor: color,
            width: `${width}%`
          }}
        />
      </div>
        <span className="font-mono text-sm text-[#99A1AF]">{level}%</span>
      </div>
    </div>
  );
};



const Skills = () => {
    
  return (
      <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E] px-4 py-4 sm:px-8 sm:py-6">
          <span className="border-l -mt-3 -ml-2 lg:-mt-5 border-[#929AA7] lg:-ml-6 pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block">
                louis {'>'} portfolio {'>'} src {'>'}{' '}
              <span className="text-white">skills.json</span>
            </span>
            <span className="slide-up delay-1 mt-3 ml-4 max-w-full font-mono text-sm italic text-[#6B9A57] sm:ml-8 sm:text-lg lg:text-[1rem]">// I am constantly improving my skills ;</span>
            <div className="slide-up delay-2 mt-5 ml-4 flex flex-row items-end gap-1 sm:ml-8">
              <VscJson className="text-4xl text-[#f71ecc] sm:text-6xl lg:text-6xl" />
              <span style={{ fontFamily: "poppins" }} className="text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">Skills</span>
          </div>
            <div className=" mt-8 ml-4 grid w-[90%]  grid-cols-1 gap-8 sm:ml-8 sm:gap-10 lg:grid-cols-2 lg:gap-10 slide-up delay-2">
              <div className="flex flex-col">
                <span className="ml-2 font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem] lg:tracking-[0.1px]">LANGUAGES</span>
                <span className="mt-4 ml-2 h-px w-full bg-[#929AA7] mb-5"></span>
                <div className="ml-2">
                 <span><SkillBar skill="Python" level={80} color="#FF6FD8" delay={300} margin={48} /></span>
                 <span><SkillBar skill="JavaScript" level={75} color="#FACC14" delay={500} margin={14} /></span>
                 <span><SkillBar skill="TypeScript" level={70} color="#39BDF8" delay={800} margin={14} /></span>
                 <span><SkillBar skill="C" level={88} color="#A755F7" delay={1100} margin={89} /></span>
                </div>
            </div>
              <div className="flex min-w-0 flex-col">
                <span className="ml-2 font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem] lg:tracking-[0.1px]">BACKEND</span>
                <span className="mt-4 ml-2 h-px w-full bg-[#929AA7] mb-5"></span>
                <div className="ml-2">
                  <span><SkillBar skill="ExpressJS" level={77} color="#34D399" delay={300} margin={23} /></span>
                  <span><SkillBar skill="NestJS" level={68} color="#6366F1" delay={500} margin={48} /></span>
                  <span><SkillBar skill="FastAPI" level={60} color="#39BDF8" delay={800} margin={40} /></span>
                </div>
            </div>
            <div className="flex min-w-0 flex-col">
                <span className="ml-2 font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem] lg:tracking-[0.1px]">FRONTEND</span>
                <span className="mt-4 ml-2 h-px w-full bg-[#929AA7] mb-5"></span>
                <div className="ml-2">
                  <span><SkillBar skill="React (vite)" level={87} color="#34D399" delay={300} margin={24} /></span>
                  <span><SkillBar skill="Html" level={90} color="#6366F1" delay={500} margin={90} /></span>
                  <span><SkillBar skill="Tailwindcss" level={85} color="#39BDF8" delay={800} margin={30} /></span>
                </div>
            </div>
            <div className="flex min-w-0 flex-col">
                <span className="ml-2 font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem] lg:tracking-[0.1px]">DATABASES</span>
                <span className="mt-4 ml-2 h-px w-full bg-[#929AA7] mb-5"></span>
                <div className="ml-2">
                  <span><SkillBar skill="MySQL" level={78} color="#FF6FD8" delay={300} margin={56} /></span>
                  <span><SkillBar skill="PostgreSQL" level={70} color="#FACC14" delay={500} margin={14} /></span>
                  <span><SkillBar skill="MongoDB" level={68} color="#39BDF8" delay={800} margin={40} /></span>
                </div>
            </div>
          </div>
            <div className="flex flex-col ml-8 mt-10 slide-up delay-3">
              <span className="font-mono italic text-white opacity-80 text-3xs lg:text-5xs lg:ml-5">{'{'} <span className="text-[#9CDBFF]">"Quote"</span><span>:</span> <span className="text-[#CE9178]">"Learn as if you were to live forever."</span>,</span>
              <span className="font-mono italic text-white opacity-80 ml-2 text-3xs lg:text-5xs lg:ml-9"> <span className="text-[#9CDBFF]">"Author"</span><span>:</span> <span className="text-[#CE9178]">"Mahatma Gandhi"</span> {'}'}</span>
            </div>
     

    </div>
  );
};

export default Skills;