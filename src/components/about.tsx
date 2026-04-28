import "@fontsource/poppins/800.css";
import "./skills.css"
import { FaHtml5 } from "react-icons/fa";
import epitechLogo from "../assets/epitech.png";
import ecole from "../assets/42_Logo.svg";


const About = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E] px-4 py-4 sm:px-8 sm:py-6">
        <span className="border-l -mt-3 -ml-2 lg:-mt-5 border-[#929AA7] lg:-ml-6 pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block">
                louis {'>'} portfolio {'>'} src {'>'}{' '}
              <span className="text-white">about.html</span>
            </span>
        <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm text-[#7EE787] lg:ml-3 sm:text-lg lg:text-[1rem]"><span className="text-[#808080]">{'<'}</span>div{' '}<span className="text-[#9CDBFE]">class<span className="text-white">=</span>"about.css"</span><span className="text-[#808080]">{'>'}</span><span className="text-white">I am Louis, 21 years old</span><span className="text-[#808080]">{'</'}</span><span>div</span><span className="text-[#808080]">{'>'}</span></span>
         <div className="slide-up delay-2 mt-5 flex flex-row items-end gap-1 sm:justify-start lg:ml-3">
                  <FaHtml5 className="text-4xl text-[#E34C25] sm:text-6xl lg:text-6xl" />
                  <span style={{ fontFamily: "poppins" }} className="text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">About Me</span>
        </div>
        <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm italic text-[#777] sm:ml-8 sm:text-lg lg:text-[1rem]">// You will learn about me but to know more, please ask copilot -_-</span>
        <div className="flex flex-col">
          <div className="slide-up delay-2 bg bg-[#232323] mt-5 p-6 border border-[#777] rounded-[5px] font-mono text-[#777] sm:ml-4 lg:w-230 mx-auto sm:mx-0 tracking-[-1.5px] cursor-grab transition-colors hover:bg-[#2D2D2D] hover:border-t-[#E34C25] hover:border-t-2">
            <span>My name is <span className="text-[#4DBBF6]">Louis Pouillet</span>, and I am a first-year Bachelor's student at <span className="inline-flex items-center gap-1 whitespace-nowrap align-middle"><img src={epitechLogo} alt="Epitech" className="h-5 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(67%) sepia(81%) saturate(1247%) hue-rotate(184deg) brightness(100%) contrast(99%)" }} />Toulouse</span>. I lived in Australia for three years before moving to France in July 2025 to continue my studies, which allowed me to develop a <span className="text-[#4DBBF6]">strong level of English</span>. In 2022, I successfully completed the <span className="inline-flex items-center gap-1 whitespace-nowrap align-middle"><img src={ecole} alt="42 Adelaide" className="h-7 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(100%)" }} />Adelaïde</span> intensive program and joined the school, where I discovered my passion for <span className="text-[# 4DBBF6]">algorithms</span>. I am a <span className="text-[#4DBBF6]">serious and ambitious</span> person who enjoys learning and taking on new challenges.</span>
          </div>
          <div className="slide-up delay-3 bg bg-[#232323] mt-5 p-6 border border-[#777] rounded-[5px] font-mono text-[#777] sm:ml-4 lg:w-230 mx-auto sm:mx-0 tracking-[-1.5px] cursor-grab transition-colors hover:bg-[#2D2D2D] hover:border-t-[#E34C25] hover:border-t-2">
            <div className="flex flex-col">
              <span className="text-[#4EC9B0] tracking-[1.5px]">CURRENTLY FOCUSING ON:</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-5">
                <div className="flex flex-row gap-2 items-start">
                  <span>👾</span>
                  <span className="lg:w-100">Learning advanced RAG, machine learning and vector databases</span>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <span>🌐</span>
                  <span className="lg:w-100">Building scalable web applications</span>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <span>🏃🏻‍➡️</span>
                  <span className="lg:w-100">Gym and Running</span>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <span>🎓</span>
                  <span className="lg:w-100">Completing my degree at Epitech</span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-up delay-4 bg bg-[#232323] mt-5 p-6 border border-[#777] rounded-[5px] font-mono text-[#777] sm:ml-4 lg:w-230 mx-auto sm:mx-0 tracking-[-1.5px]">
              <span className="text-[#4EC9B0] tracking-[1.5px]">EDUCATION:</span>
              <div className="flex flex-col mt-3 gap-5">
                <div className="border-[#777] border p-3 rounded flex flex-col transition-colors hover:bg-[#2D2D2D] cursor-grab hover:border-[#4EC9B0] hover:border-2">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-white font-bold tracking-normal">BACHELOR IN COMPUTER SCIENCE (1st Year)</span>
                    <span className="text-[#CCC] hidden lg:block">2025 - currently</span>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-2">
                    <span>Epitech Toulouse (France)</span>
                    <span className="text-[#CCC] lg:hidden">2025 - currently</span>
                  </div>
                  <span className="text-[#6A9A58]">// Learning about : Frontend Development, Backend Development, Databases, Python, Machine Learning</span>
                </div>
                <div className="border-[#777] border p-3 rounded flex flex-col transition-colors hover:bg-[#2D2D2D] cursor-grab hover:border-[#4EC9B0] hover:border-2">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-white font-bold tracking-normal">PROJECT-BASED SOFTWARE ENGINEERING PROGRAM AT 42</span>
                    <span className="text-[#CCC] hidden lg:block">2022 - 2023</span>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-2">
                    <span>42 Adelaïde (Australia)</span>
                    <span className="text-[#CCC] lg:hidden">2022 - 2023</span>
                  </div>
                  <span className="text-[#6A9A58]">/* Learned : Algorithms, C, Peer to Peer learning */</span>
                </div>
                <div className="border-[#777] border p-3 rounded flex flex-col transition-colors hover:bg-[#2D2D2D] cursor-grab hover:border-[#4EC9B0] hover:border-2">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-white font-bold tracking-normal">GRADUATED HIGH-SCHOOL</span>
                    <span className="text-[#CCC] hidden lg:block">2022 - 2023</span>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-2">
                    <span>Blaise Pascal Nouméa (New-Caledonia)</span>
                    <span className="text-[#CCC] lg:hidden">2019 - 2022</span>
                  </div>
                  <span className="text-[#6A9A58]"># Graduated with honors and specialized in mathematics and computer science</span>
                </div>
              </div>
          </div>

        </div>
          

    </div>
  );
};

export default About;
