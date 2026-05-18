import "@fontsource/poppins/800.css";
import "../../styles/home.css"
import epitechLogo from "../../assets/images/epitech.png";
import { ReactTyped } from "react-typed";
import { FaCodepen } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { TiHeartHalfOutline } from "react-icons/ti";

type PageKey = "home" | "about" | "projects" | "skills" | "experience" | "contact";

type HomeProps = {
  onSelectPage: (page: PageKey) => void;
};

const Home = ({ onSelectPage }: HomeProps) => {
  const Text = ["// hello and welcome to my portfolio", "// I am passionate about software development", "// always learning", "// currently studying at epitech", "// feel free to explore and contact me !"];

  return (
    <div className="flex h-full flex-col bg-[#1E1E1E]">
      <div className="flex flex-col font-mono">
        <span className="ml-2 border-l mt-1 border-[#929AA7] pl-1 text-xs text-[#C0C0C0] sm:text-sm hidden sm:block">
                louis {'>'} portfolio {'>'} src {'>'}{' '}
              <span className="text-white">home.tsx</span>
            </span>
        <span className="animate-colorChange mb-4 mt-6 px-4 text-sm sm:mt-8 sm:mb-5 sm:px-8 sm:text-base lg:mt-10 lg:px-16">
          <ReactTyped strings={Text} typeSpeed={80} backSpeed={40} loop />
        </span>
        <span style={{ fontFamily: "Poppins" }} className="slide-up delay-2 px-4 text-4xl font-extrabold tracking-[-1.2px] text-white sm:px-8 sm:text-6xl sm:tracking-[-2px] lg:px-16 lg:text-8xl lg:tracking-[-2.5px]">Louis</span>
        <span style={{ fontFamily: "Poppins" }} className="slide-up delay-3 px-4 text-4xl font-extrabold tracking-[-1.2px] text-[#FF6FD8] sm:px-8 sm:text-6xl sm:tracking-[-2px] lg:px-16 lg:text-8xl lg:tracking-[-2.5px]">POUILLET</span>
        <span className="slide-up delay-4 mt-2 ml-4 inline-block h-0.75 w-[calc(100%-2rem)] max-w-152 bg-linear-to-r from-[#FF6FD8] to-[#1E1E1E] sm:ml-8 sm:w-md lg:ml-16 lg:w-152"></span>
        <div className="slide-up delay-5 mt-4 flex flex-wrap items-center gap-3 px-4 sm:px-8 lg:px-16">
          <div className="flex h-auto items-center gap-2 border border-[#929AA7] bg-[#2D2D2D] px-2 py-1 text-xs text-[#C0C0C0] sm:text-sm">
            <span className="inline-block w-2 h-2 bg-[#6db205] rounded-full"></span>
            <span className="text-xs text-[#C0C0C0] sm:text-sm">IT student</span>
          </div>
          <div className="flex h-auto items-center gap-2 border border-[#929AA7] bg-[#2D2D2D] px-2 py-1 text-xs text-[#C0C0C0] sm:text-sm">
            <span className="inline-block w-2 h-2 bg-[#02a076] rounded-full"></span>
            <span className="text-xs text-[#C0C0C0] sm:text-sm">software passionate</span>
          </div>
          <div className="flex h-auto items-center gap-2 border border-[#929AA7] bg-[#2D2D2D] px-2 py-1 text-xs text-[#C0C0C0] sm:text-sm">
            <span className="inline-block w-2 h-2 bg-[#FF6FD8] rounded-full"></span>
            <span className="text-xs text-[#C0C0C0] sm:text-sm">toulouse</span>
          </div>
          <div className="flex h-auto items-center gap-1 border border-[#FF6FD8] bg-[#2d2d2d] px-2 py-1 text-xs text-[#C0C0C0] sm:text-sm">
            <span className="text-[#FF6FD8]">@</span>
            <img src={epitechLogo} alt="Epitech" className="h-4 w-20" />
          </div>
        </div>
        <span className="slide-up delay-6 mt-8 px-4 text-sm leading-relaxed text-[#777] sm:px-8 sm:text-base lg:max-w-3xl lg:px-16">Currently studying at <span className="text-[#4EC1FF]">Epitech Toulouse</span>, I am learning <span className="text-[#4EC1FF]">data analysis</span> and <span className="text-[#4EC1FF]">web development</span>. I’m passionate about discovering new technologies and constantly expanding my skills.</span>
        <div className="slide-up delay-7 mt-8 flex flex-wrap gap-3 px-4 sm:px-8 lg:gap-6 lg:px-16">
          <button onClick={() => onSelectPage("contact")} className="flex items-center gap-2 rounded bg-[#034672] p-2 text-sm italic text-white transition-colors hover:bg-[#3295d6] cursor-grab"><FaEnvelope />Contact</button>
          <button onClick={() => onSelectPage("projects")} className="flex items-center gap-2 rounded border border-[#E5E7EB] p-2 text-sm italic text-white transition-colors hover:bg-[#2D2D2D] cursor-grab"><FaCodepen />Projects</button>
          <button onClick={() => onSelectPage("about")} className="flex items-center gap-2 rounded border border-[#E5E7EB] p-2 text-sm italic text-white transition-colors hover:bg-[#2D2D2D] cursor-grab"><FaUserAstronaut />About Me</button>
        </div>
        <div className="slide-up delay-8 mt-8 px-4 pb-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 border border-[#3C3C3C] bg-[#2D2D2D] sm:grid-cols-4">
            <div className="flex min-w-0 flex-col items-center p-3 text-center hover:bg-[#3C3C3C] cursor-pointer lg:border-r sm:border-r border-r border-b lg:border-b-0 sm:border-b-0 border-[#1E1E1E] hover:border-l-[#FF6FD8] hover:border-l-2">
              <span className="font-[Poppins] text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">1<span className="font-[Poppins] text-sm text-white sm:text-xl lg:text-xl">st</span></span>
              <span className="mt-1 text-xs text-[#777] sm:text-sm">year</span>
            </div>
            <div className="flex min-w-0 flex-col p-3 items-center text-center hover:bg-[#3C3C3C] cursor-pointer lg:border-r sm:border-r border-b lg:border-b-0 sm:border-b-0 border-[#1E1E1E] hover:border-l-[#FF6FD8] hover:border-l-2">
              <span className="font-[Poppins] text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">Peer</span>
              <span className="mt-1 text-xs text-[#777] sm:text-sm">learning</span>
            </div>
            <div className="flex min-w-0 flex-col p-3 items-center text-center hover:bg-[#3C3C3C] cursor-pointer lg:border-r sm:border-r border-r border-[#1E1E1E] hover:border-l-[#FF6FD8] hover:border-l-2">
              <span className="font-[Poppins] text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl"><TiHeartHalfOutline /></span>
              <span className="mt-1 text-xs text-[#777] sm:text-sm">algorithms</span>
            </div>
            <div className="flex min-w-0 flex-col p-3 items-center text-center hover:bg-[#3C3C3C] lg:border-r sm:border-r cursor-pointer hover:border-l-[#FF6FD8] hover:border-l-2">
              <span className="font-[Poppins] text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">∞</span>
              <span className="mt-1 text-xs text-[#777] sm:text-sm">motivation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;