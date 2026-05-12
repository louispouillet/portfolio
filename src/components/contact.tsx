import "@fontsource/poppins/800.css";
import "./skills.css";
import { FaCss3Alt } from "react-icons/fa";
import  Louis  from "../assets/Louis.png";
import { AiOutlineMail } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";



const Contact = () => {
  return (
   <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E] px-4 py-4 sm:px-8 sm:py-6 pb-10">
         <span className="border-l -mt-3 -ml-2 lg:-mt-5 border-[#929AA7] lg:-ml-6 pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block">
           louis {'>'} portfolio {'>'} src {'>'}{' '}
           <span className="text-white">contact.css</span>
         </span>
         <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm text-[#6F6F6F] lg:ml-3 sm:text-lg lg:text-[1rem]">// Contact me if you have any questions or would like to collaborate!</span>
         <div className="slide-up delay-2 mt-5 flex flex-row items-end gap-1 sm:justify-start lg:ml-3">
           <FaCss3Alt className="text-4xl text-[#1608CE] sm:text-6xl lg:text-6xl" />
           <span style={{ fontFamily: "poppins" }} className="ml-3 text-3xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">Contact</span>
         </div>
         <div className="flex flex-row gap-10 slide-up delay-3">
          <img src={Louis} alt="Contact" className="lg:ml-6 mt-5 w-30 border-2 border-[#1608CE] ml-2" />
          <div className="font-mono mt-13 text-white">  <p><span className="text-[#E99164]">.quote</span>{'{'}</p>  <p className="ml-4">size: <span className="text-[#E99164]">170</span><span className="text-[#FBA1CB]">cm</span>;</p>  <p className="ml-4">weight: <span className="text-[#E99164]">58</span><span className="text-[#FBA1CB]">kg</span>;</p>  <p className="ml-4">sport: <span className="text-[#E99164]">running</span>;</p>  <p className="ml-4">text-align: <span className="text-[#E99164]">center</span>;</p> <p>;</p></div>

         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 slide-up delay-4 ml-6">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-mono italic text-[#4EC9B0]">FIND ME</span>
              <a
                href="mailto:louis.pouillet@epitech.eu"
                className="flex flex-row gap-1 border border-[#787E88] lg:w-150 px-3 py-2 items-center rounded hover:bg-[#252E2C]"
              >
                <AiOutlineMail className="text-4xl text-[#4EC9B0] border py-1.5 rounded bg-[#252E2C]" />
                <div className="flex flex-col">
                  <span className="font-mono ml-3 text-[#4EC9B0] text-md">Email</span>
                  <span className="font-mono ml-3 text-white text-sm">louis.pouillet@epitech.eu</span>

                </div>
                <FiArrowUpRight className="ml-auto text-md text-[#787E88]" />

              </a>
              <a
                href="https://www.linkedin.com/in/louis-pouillet-9b7549392"
                className="flex flex-row gap-1 border border-[#787E88] lg:w-150 px-3 py-2 items-center rounded hover:bg-[#21262D]"
              >
                <FaLinkedin className="text-4xl text-[#0A66C2] border py-1.5 rounded bg-[#21262D]" />
                <div className="flex flex-col">
                  <span className="font-mono ml-3 text-[#0D62B8] text-md">Linkedin</span>
                  <span className="font-mono ml-3 text-white text-sm">linkedin.com/in/louis-pouillet</span>

                </div>
                <FiArrowUpRight className="ml-auto text-md text-[#787E88]" />

              </a>
              <a
                href="https://www.linkedin.com/in/louis-pouillet-9b7549392"
                className="flex flex-row gap-1 border border-[#787E88] lg:w-150 px-3 py-2 items-center rounded hover:bg-[#21262D]"
              >
                <FaLinkedin className="text-4xl text-[#0A66C2] border py-1.5 rounded bg-[#21262D]" />
                <div className="flex flex-col">
                  <span className="font-mono ml-3 text-[#0D62B8] text-md">Github</span>
                  <span className="font-mono ml-3 text-white text-sm">github.com/LoucheVDC</span>

                </div>
                <FiArrowUpRight className="ml-auto text-md text-[#787E88]" />

              </a>
              </div>
         </div>
         </div>
   
         

  );
};

export default Contact;
