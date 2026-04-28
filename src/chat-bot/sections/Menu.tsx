import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect, useRef } from "react";
import ChatBot from "../Chat_bot";
import ResearchSections from "../research/research_sections";

type MenuProps = {
  name: string;
};

const Menu = ({ name }: MenuProps) => {
  const [input, setInput] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);
const [submitted, setSubmitted] = useState(false);

  const fullText = `Hey ${name} ,

I’m here to guide you through my portfolio in a simple and fun way. Think of it as a peek into my journey, my experiences, and who I am both professionally and personally.

Here’s what you’ll find:

🎓 Education – what I’ve studied, projects I’ve done, and certifications I’ve earned.
💼 Work Experience – jobs, internships, and projects that shaped my skills.
💻 Tech Skills – programming, software, web dev, and other IT goodies.
🚀 Personal Projects – apps, websites, experiments, and creative ideas I’ve explored.
🌍 Travels – adventures that boosted my adaptability and open-mindedness.
🤝 Collaborations – teamwork and projects with friends and colleagues.
🏆 Hobbies & Interests – sports, hobbies, and fun stuff that keep me balanced.

This portfolio is more than just a list it’s a snapshot of what I do and who I am.

Feel free to ask me anything (within reason 😉). Here are some ideas to get started:

- What did you study?
- Your work experience?
- Favorite travels?
- Who are you?
- Your IT skills?
- Personal projects?
- Certifications or awards?
- Career goals?
- Teamwork or solo work?
- Your strengths?

Alright, now it’s your turn ! Where do you want to start? 😊  `;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index += 5;
      if (index > fullText.length) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [displayedText]);

    const handleSend = () => {
    if (!input.trim()) return;
    setSubmitted(true);
    setInput("");
  };

  return (
    <>
     <>
  {!submitted ? (
    <>
      <div
        ref={chatRef}
        style={{
    position: "absolute",
    top: "10vh",
    bottom: "20vh",
    left: "50%",
    transform: "translateX(-50%)", 
    width: "70%",                
    overflowY: "auto",
    whiteSpace: "pre-line",
    lineHeight: 1.6,
    padding: "10px",
  }}
      >
        {displayedText}
        <span style={{ opacity: 0.6 }}>▌</span>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
        }}
      >
        <TextField
          fullWidth
          label="Ask me anything"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "16px" } }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSend}>
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </div>
    </>
  ) : (
    <ResearchSections text="Test" />
  )}
</>
    </>
  );
};

export default Menu;