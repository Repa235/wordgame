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


  const [prevword, prevWord] = useState([]);
  

  function handleWordClick(word) {
    


    console.log("Word:", word);

    if(){

    }

  }
  function isArrayInArray(arrayOfArrays: any[][], targetArray: any[]): boolean {
    return arrayOfArrays.some(
      (arr) =>
        arr.length === targetArray.length &&
        arr.every((value, index) => value === targetArray[index])
    );
  }

  function areArraysEqualJSON(arr1: any[], arr2: any[]): boolean {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
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
