import { TypeAnimation } from "react-type-animation";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Menu from "./sections/Menu";

const ChatBot = () => {
    const [input, setInput] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [label, setLabel] = useState<string>("");

    const handleSend = () => {
        setUsername(input.trim().toString());
        setLabel("Menu");
    };

    return (
        <>
        <div>
            { label === "Menu" ? (
                <Menu name={username} />
            ) : (
                <>
                 <div id="about" style={{
              left : '50%',
              transform: 'translateX(-50%)',
              position: 'absolute',
              top: '50vh',
              zIndex: 10
          }}>
              <TypeAnimation
                  sequence={["Hi my name is Louis , and you ?", 1000]}
                  speed={50}
                  wrapper="h1"
                  cursor={true}
                  repeat={0}
              />
          </div>

          <div style={{
              position : 'absolute',
              zIndex: 10,
              top: '75vh',
              right: '50%',
              transform: 'translateX(50%)',
              width: '70%'
          }}>
              <TextField 
                  id="question" 
                  fullWidth 
                  label="Your name"
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' }}}
                  slotProps={{
                      input: {
                          endAdornment: (
                              <IconButton onClick={handleSend}>
                                  <SendIcon />
                              </IconButton>
                          ),
                      }
                  }}
              />
          </div>
                </>
            )}
        </div>
        </>
    );
};

export default ChatBot;