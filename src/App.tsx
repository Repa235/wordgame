import { useState } from "react";

export default function WordGame() {
  const words = [
    "Sbarrare", "Cacciare", "Porta", "Ospite", "Rete", "Ala", "Catena", "Fortezza",
    "Lingua", "Tirare", "Andare", "Pianta", "Diritto", "Pena", "Corazza", "Vulnerabilità",
    "Colmo", "Battuta", "Sutura", "Satura", "Incubare", "Parto", "Riparo", "Sipario",
  ];

  const wordSequence: { [key: string]: string } = {
    "Parto": "Sipario",
    "Satura": "Parto",
    "Colmo": "Satura",
    "Vulnerabilità": "Colmo",
    "Diritto": "Vulnerabilità",
    "Andare": "Diritto",
    "Lingua": "Andare",
    "Catena": "Lingua",
    "Ala": "Catena",
    "Ospite": "Ala",
    "Sbarrare": "Ospite",
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f8ff", // Soft blue background
      minHeight: "100vh", // Occupy full height
      padding: "10px", // Reduced padding for a more compact layout
      fontFamily: "'Roboto', sans-serif",
      overflow: "hidden", // Prevent scrolling
    },
    introSection: {
      textAlign: "center",
      marginBottom: "15px", // Reduced vertical margin between intro and buttons
      fontSize: "1.2rem", // Increased font size for the intro text
      color: "#333",
      fontWeight: "bold",
      display: "block", // Default is visible
    },
    hiddenIntroSection: {
      display: "none", // Hide the intro section when 12 keys are reached
    },
    keySection: {
      display: "flex",
      alignItems: "center",
      gap: "10px", // Reduced gap
      marginBottom: "10px", // Reduced margin between the key section and words section
    },
    wordsSection: {
      display: "grid", // Use grid layout
      gridTemplateColumns: "repeat(2, 1fr)", // Two columns
      gap: "10px", // Reduced gap between buttons
      maxWidth: "100%", // Ensure layout takes full width
      justifyContent: "center", // Center the buttons
    },
    wordButton: {
      width: "180px", // Further reduced width of buttons
      height: "35px", // Reduced height for more compact vertical layout
      border: "2px solid #3498db", // Blue border
      borderRadius: "10px",
      padding: "6px", // Reduced padding for smaller buttons
      backgroundColor: "#ecf0f1", // Light grey background
      color: "#3498db", // Blue text
      fontSize: "1rem", // Smaller font size for buttons
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
    },
    selectedButton: {
      backgroundColor: "#3498db", // Blue background for selected
      color: "#fff", // White text when selected
      transform: "scale(1.1)", // Slight zoom-in effect on selection
    },
    wrongButton: {
      backgroundColor: "#e74c3c", // Red background for wrong selection
      color: "#fff", // White text for wrong button
    },
    keyText: {
      fontSize: "1.5rem", // Increased font size for the key count text
      fontWeight: "bold",
      color: "#5a3e1b",
    },
    img: {
      width: "140px", // Reduced width of image
      borderRadius: "10px",
      transition: "all 0.3s ease", // Smooth transition for size change
    },
    largeImg: {
      width: "180px", // Increase the size of the image
    },
    extraLargeImg: {
      width: "220px", // Further increase the size of the image
    },
    welcomeText: {
      fontSize: "3rem", // Large font size for the "BENVENUTO A CASA!" message
      fontWeight: "bold",
      color: "#3498db", // Blue text for the final message
      marginTop: "20px",
    },
    retryButton: {
      marginTop: "20px", // Add some space between the text and the retry button
      padding: "10px 20px", // Make the button larger
      fontSize: "1.2rem", // Larger font size for the button
      backgroundColor: "#3498db", // Blue background
      color: "#fff", // White text
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  const [prevword, setPrevword] = useState("Sipario");
  const [keys, setKeys] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [wrongWord, setWrongWord] = useState<string | null>(null); // State for wrong word

  const motivationalMessages = [
    "Continua così! Sei sulla strada giusta!",
    "Non fermarti, ogni passo ti avvicina alla vittoria!",
    "Hai fatto un ottimo lavoro! Continua così!",
    "La perseveranza porta sempre al successo, avanti tutta!",
    "Ogni chiave è un passo più vicino al traguardo!",
  ];

  function handleWordClick(word: string) {
    if (word === "Sipario" && prevword === "Sipario") {
      setPrevword(word);
      setKeys(1);
      setSelectedWord(word);
      return;
    }

    const expectedPrevWord = wordSequence[word];

    if (expectedPrevWord && prevword === expectedPrevWord) {
      setPrevword(word);
      const newKeys = keys + 1;
      setKeys(newKeys);

      if (newKeys % 2 === 0) {
        const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        alert(message);
      }

      if (newKeys === 12) {
        alert("Benvenuto a casa");
      }
    } else {
      setKeys(0);
      alert("Hai sbagliato la sequenza! Non arrenderti! Riprova con determinazione!");
      setPrevword("Sipario");
      setSelectedWord(null);
      setWrongWord(word); // Set the wrong word
    }

    setSelectedWord(word);
  }

  // Function to reload the page
  function handleRetry() {
    window.location.reload();
  }

  return (
    <div style={styles.container}>
      {/* Introduzione con le regole del gioco */}
      <div
        style={{
          ...styles.introSection,
          ...(keys === 12 ? styles.hiddenIntroSection : {}), // Hide the intro text when 12 keys are reached
        }}
      >
        <h2>Benvenuto al Gioco delle Parole!</h2>
        <p>
          Trova le 12 chiavi di casa con una sequenza di parole. <br></br> Ogni parola deve essere selezionata in ordine preciso, senza distrazioni. <br></br>Se scegli la parola giusta, guadagnerai una chiave! 🔑
          Il viaggio comincia con "Sipario" e prosegue dal basso verso l'alto, <br></br>se perdi la strada di casa, riparti da questa parola!!
        </p>
      </div>

      {/* Sezione delle chiavi */}
      <div style={styles.keySection}>
        <img
          src="/src/images/f1bec81e20d80cd36c82379af920a4e9.gif"
          alt="Casa"
          style={{
            ...styles.img,
            ...(keys === 12 ? styles.extraLargeImg : {}), // Further increase image size when 12 keys are reached
          }}
        />
        <span style={styles.keyText}>
          x {keys}
        </span>
        <span>🔑</span>
      </div>

      {/* Sezione dei bottoni */}
      {keys < 12 && (
        <div style={styles.wordsSection}>
          {words.map((word: string, index: number) => (
            <button
              key={index}
              onClick={() => handleWordClick(word)}
              style={{
                ...styles.wordButton,
                ...(selectedWord === word ? styles.selectedButton : {}),
                ...(wrongWord === word ? styles.wrongButton : {}), // Apply red color if wrong
              }}
            >
              {word}
            </button>
          ))}
        </div>
      )}

      {/* Messaggio di benvenuto a casa */}
      {keys === 12 && <div style={styles.welcomeText}>BENVENUTO A CASA!</div>}

      {/* Bottone Riprova */}
      {keys === 12 && (
        <button onClick={handleRetry} style={styles.retryButton}>
          Riprova
        </button>
      )}
    </div>
  );
}
