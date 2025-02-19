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
      backgroundColor: "#f0f8ff",
      minHeight: "100vh",
      padding: "10px",
      fontFamily: "'Roboto', sans-serif",
      overflow: "hidden",
    },
    introSection: {
      textAlign: "center",
      marginBottom: "15px",
      fontSize: "2rem", // Increased font size for intro text
      color: "#2c3e50",
      fontWeight: "bold",
    },
    keySection: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px",
    },
    wordsSection: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "10px",
      maxWidth: "100%",
      justifyContent: "center",
    },
    wordButton: {
      width: "180px",
      height: "35px",
      border: "2px solid #3498db",
      borderRadius: "10px",
      padding: "6px",
      backgroundColor: "#ecf0f1",
      color: "#3498db",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    selectedButton: {
      backgroundColor: "#3498db",
      color: "#fff",
      transform: "scale(1.1)",
    },
    wrongButton: {
      backgroundColor: "#e74c3c",
      color: "#fff",
    },
    keyText: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#5a3e1b",
    },
    img: {
      width: "140px",
      borderRadius: "10px",
      transition: "all 0.3s ease",
    },
    largeImg: {
      width: "180px",
    },
    extraLargeImg: {
      width: "220px",
    },
    welcomeText: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#3498db",
      marginTop: "20px",
    },
    retryButton: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1.2rem",
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    buttonContainer: {
      marginTop: "20px",
    },
    buttonText: {
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: "#3498db",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
    }
  };

  const [prevword, setPrevword] = useState("Sipario");
  const [keys, setKeys] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [wrongWord, setWrongWord] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(true); // New state to manage intro visibility

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
      setWrongWord(word);
    }

    setSelectedWord(word);
  }

  function handleRetry() {
    window.location.reload();
  }

  function handleIntroDismiss() {
    setShowIntro(false); // Hide the intro section and show the word columns
  }

  return (
    <div style={styles.container}>
      {/* Traccia iniziale */}
      {showIntro && (
        <div style={styles.introSection}>
          <h2>Benvenuto al Gioco delle Parole!</h2>
          <p>
            Trova le 12 chiavi di casa con una sequenza di parole. <br></br> 
            Ogni parola deve essere selezionata in ordine preciso, senza distrazioni. <br></br>
            Se scegli la parola giusta, guadagnerai una chiave! 🔑<br></br>
            Il viaggio comincia con "Sipario" e prosegue dal basso verso l'alto, <br></br>
            se perdi la strada di casa, riparti da questa parola!!
          </p>
          <div style={styles.buttonContainer}>
            <button onClick={handleIntroDismiss} style={styles.buttonText}>
              Ho capito!
            </button>
          </div>
        </div>
      )}

      {/* Sezione delle chiavi */}
      <div style={styles.keySection}>
        <img
          src="/src/images/f1bec81e20d80cd36c82379af920a4e9.gif"
          alt="Casa"
          style={{
            ...styles.img,
            ...(keys === 12 ? styles.extraLargeImg : {}),
          }}
        />
        <span style={styles.keyText}>x {keys}</span>
        <span>🔑</span>
      </div>

      {/* Sezione dei bottoni */}
      {!showIntro && keys < 12 && (
        <div style={styles.wordsSection}>
          {words.map((word: string, index: number) => (
            <button
              key={index}
              onClick={() => handleWordClick(word)}
              style={{
                ...styles.wordButton,
                ...(selectedWord === word ? styles.selectedButton : {}),
                ...(wrongWord === word ? styles.wrongButton : {}),
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
