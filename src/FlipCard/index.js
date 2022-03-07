import { useEffect } from "react";
import "./flipcard.css";

export default function FlipCard({ word, randomWord, flipped }) {
  // This can be used if we want to remove the first flip when reloading page
  // const [flipBack, setBackFlip] = useState(false);
  console.log(word);

  function transformCard(e) {
    if (document.getElementById(e.target.id))
      if (randomWord.en === e.target.innerText) {
        document.getElementById(e.target.id).style.transform =
          "rotateY(180deg)";
        // setBackFlip(true);
      } else {
        document.getElementById(e.target.id).firstChild.style.backgroundColor =
          "red";
        setTimeout(() => {
          document.getElementById(
            e.target.id
          ).firstChild.style.backgroundColor = "blueviolet";
        }, 500);
      }
  }

  useEffect(() => {
    if (!flipped) {
      document.getElementById(word.en).style.transform = "rotateY(360deg)";
    }
  }, [word.en, flipped]);

  return (
    <div className="flip-card-container">
      <div className="flip-card" id={word.en} onClick={transformCard}>
        <div className="flip-card-front" id={word.en}>
          {word.en}
        </div>
        <div className="flip-card-back">{word.de}</div>
      </div>
    </div>
  );
}
