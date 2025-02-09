import { useState } from "react";
import { Key } from "lucide-react";

export default function WordGame() {
  const words = [
    "Sbarrare",
    "Cacciare",
    "Porta",
    "Ospite",
    "Rete",
    "Ala",
    "Catena",
    "Fortezza",
    "Lingua",
    "Tirare",
    "Andare",
    "Pianta",
    "Diritto",
    "Pena",
    "Corazza",
    "Vulnerabilità",
    "Colmo",
    "Battuta",
    "Sutura",
    "Satura",
    "Incubare",
    "Parto",
    "Riparo",
    "Sipario",
  ];


  const [prevword, setPrevword] = useState("Sipario");
  const [keys, setKeys] = useState(0)

  function handleWordClick(word) {
      // Azione 1 - prevword presente, sto analizzando le parole
      switch (word) {
        case "Parto": checkPrevWordAndAddKeys(word, "Sipario");
        case "Satura": checkPrevWordAndAddKeys(word, prevword);
        case "Colmo": checkPrevWordAndAddKeys(word, prevword);
        case "Vulnerabilità": checkPrevWordAndAddKeys(word, prevword);
        case "Diritto": checkPrevWordAndAddKeys(word, prevword);
        case "Andare": checkPrevWordAndAddKeys(word, prevword);
        case "Lingua": checkPrevWordAndAddKeys(word, prevword);
        case "Catena": checkPrevWordAndAddKeys(word, prevword);
        case "Ala": checkPrevWordAndAddKeys(word, prevword);
        case "Ospite": checkPrevWordAndAddKeys(word, prevword);
        case "Sbarrare": checkPrevWordAndAddKeys(word, prevword);
      }
      if(keys>9){
        alert("Benvenuto a casa")
      }
    }

  
  function checkPrevWordAndAddKeys(word: any, expectectedPrevWord:any) {
    if (prevword === expectectedPrevWord) { setKeys(keys + 1); setPrevword(word); }
    console.log(prevword);
    console.log(word);
    
    
  }



    return (
      <div
        className="container"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div className="key-section">
          <img
            src="/src/images/hand-drawn-house.png"
            alt="Casa"
            className="h-10 w-10"
          />
          <span className="text-3xl font-extrabold text-brown-900 font-serif">
            x {keys}
          </span>
          <span className="text-red-500">🔑</span>{" "}
          {/* Esempio di icona di chiave */}
        </div>

        <div className="words-section">
          <div style={{ width: "400px" }}>
            {words.map((word, index) => (
              <button
                key={index}
                onClick={() => handleWordClick(word)}
                className="word-button"
                style={{
                  width: "150px",
                  border: "2px solid black", // Bordo di 2px con colore #d35400
                  borderRadius: "5px",
                }}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    );

  }
