import type { CSSProperties } from "react";
import type { Language } from "../../config/routes";
import type { Skill, SkillGroup } from "../../data/skills";

const BAR_BASE_DELAY_MS = 300;
const BAR_STEP_DELAY_MS = 250;
const MAX_LEVEL = 100;

type SkillBarStyle = CSSProperties & { "--skill-level": string };

const SkillBar = ({ skill, delayMs }: { skill: Skill; delayMs: number }) => {
  const level = Math.max(0, Math.min(MAX_LEVEL, skill.level));
  const fillStyle: SkillBarStyle = {
    backgroundColor: skill.color,
    animationDelay: `${delayMs}ms`,
    "--skill-level": `${level}%`,
  };

  return (
    <div className="mb-3 flex flex-row items-center">
      <span className="w-28 shrink-0 font-mono text-sm text-[#777]">{skill.name}</span>
      <div className="h-0.5 flex-1 bg-[#2A2A2A] mr-2 rounded-full overflow-hidden">
        <div className="skill-bar-fill h-0.5 rounded-full" style={fillStyle} />
      </div>
      <span className="font-mono text-sm text-[#99A1AF]">{level}%</span>
    </div>
  );
};

type SkillGroupCardProps = {
  group: SkillGroup;
  language: Language;
};

const SkillGroupCard = ({ group, language }: SkillGroupCardProps) => (
  <div className="flex min-w-0 flex-col">
    <span className="ml-2 font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem] lg:tracking-[0.1px]">{group.title[language]}</span>
    <span className="mt-4 ml-2 h-px w-full bg-[#929AA7] mb-5"></span>
    <div className="ml-2">
      {group.skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} delayMs={BAR_BASE_DELAY_MS + index * BAR_STEP_DELAY_MS} />
      ))}
    </div>
  </div>
);

export default SkillGroupCard;
