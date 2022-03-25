import { useState, useEffect } from "react";
import "./cards.css";
import FlipCard from "../FlipCard";
import FailedModal from "../FailedModal";
import WinnerModal from "../WinnerModal";
import { win } from "../utils/bingoLogic";

// const initialWords = [
//   { de: "Katze", en: "Cat", flipped: false },
//   { de: "Auto", en: "Car", flipped: false },
//   { de: "Schnee", en: "Snow", flipped: false },
//   { de: "Tisch", en: "Table", flipped: false },
//   { de: "Fluss", en: "River", flipped: false },
//   { de: "Baum", en: "Tree", flipped: false },
//   { de: "Hund", en: "Dog", flipped: false },
//   { de: "Blume", en: "Flower", flipped: false },
//   { de: "Stuhl", en: "Chair", flipped: false },
// ];

function Cards({ globalWords }) {
  console.log("props", globalWords);
  let initialWords = [];
  const [randomWord, setRandomWord] = useState({});
  const [words, setWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [failedModal, setShowFailedModal] = useState(false);

  useEffect(() => {
    setWords(globalWords);
  }, [globalWords]);

  useEffect(() => {
    // function randomizer() {
    const filteredArray = words.filter((word) => !word.flipped);
    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    const randomWord = filteredArray[randomIndex];
    setRandomWord(randomWord);
    // }
  }, [words]);

  const resetAndStartNew = () => {
    window.location.reload(false);
    console.log("Reset all");
    setRandomWord({});
    console.log("initialWords reset to ", initialWords);
    setWords(initialWords);
    setWrongWords([]);
    setShowFailedModal(false);
  };

  // FIXME: broken n in win function when initialising with n=0
  // words && words.length > 0 && console.log("win words", win(words));
  console.log("win words", win(words));
  const bingoFound = win(words) && win(words).length > 0;

  // bingoFound && console.log("BINGOOOOO");

  return (
    <>
      <div className="random-container">
        <div className="randompicker">{randomWord && randomWord.de}</div>
      </div>
      <div className="cards-container">
        {words.map((word, index) => (
          <div
            onClick={() =>
              setWords((oldWords) => {
                let result = [...oldWords];
                if (randomWord.en === result[index].en) {
                  // DOES NOT WORK! changeing also in old copy:
                  // result[index].flipped = true;
                  result[index] = { ...oldWords[index], flipped: true };
                  setWords(result);
                } else {
                  if (wrongWords.indexOf(result[index]) < 0)
                    setWrongWords([...wrongWords, result[index]]);
                  if (wrongWords.length > 2) setShowFailedModal(true);
                }
                return result;
              })
            }
          >
            <FlipCard
              key={word.en}
              word={word}
              randomWord={randomWord}
              flipped={word.flipped}
            />
          </div>
        ))}
      </div>
      <FailedModal show={failedModal} startNew={resetAndStartNew} />
      <WinnerModal show={bingoFound} startNew={resetAndStartNew} />
      <div className="wrongWords-container">
        {wrongWords &&
          wrongWords.map((wrongWord) => (
            <div className="wrongWords">{wrongWord.en}</div>
          ))}
      </div>
    </>
  );
}

export default Cards;
