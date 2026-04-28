import { useState } from "react";
import Papa from "papaparse";

const ChatWithCSV = ({ csvText }: { csvText: string }) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const context = JSON.stringify(Papa.parse(csvText, { header: true }).data);

  const handleSend = async () => {
    if (!input) return;
    setLoading(true);

    try {
      const key = import.meta.env.VITE_GEMINI_API_KEY;
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemma-3-1b-it:generateContent?key=${key}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Je veux que tu repondes dans la langue de la question et que tu repondes de facon naturelle comme si tu ne lisais pas les donness mais en fonction de ses donnes , tu t'appelles Louis tu es un etudiant l'epitech , voici les donnees dont tu as acces: ${context}\nQuestion: ${input}` }] }]
        })
      });

      const data = await res.json();
      setResponse(data.candidates[0].content.parts[0].text);
    } catch (err) {
      setResponse("Erreur de connexion ou de clé API.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div style={{ color: "black", padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: "20px", minHeight: "20px" }}>
        {loading ? <p>Louis is thinking...</p> : <p>{response}</p>}
      </div>

      <input 
        style={{ padding: "10px", width: "70%", color: "black" }}
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Ask me anything"
      />
      <button onClick={handleSend} disabled={loading} style={{ padding: "10px" }}>
         Send
      </button>
    </div>
  );
};

export default ChatWithCSV;