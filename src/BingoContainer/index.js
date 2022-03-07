import { useState, useEffect } from "react";
import Cards from "../Cards";
import CreateNewBingoModal from "../CreateNewBingoModal";

function BingoContainer() {
  const [globalWords, setGlobalWords] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/initialWords")
      .then((response) => response.json())
      .then((data) => setGlobalWords(data));
  }, []);

  function modalButtonClicked(newSettings) {
    setShowModal(false);
    console.log("newSettings", newSettings);
    const { topic } = newSettings;
    fetch(`http://localhost:4000/${topic}`)
      .then((response) => response.json())
      .then((data) => setGlobalWords(data));
  }
  console.log("globalWords", globalWords);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>NEW BINGO</button>
      <Cards globalWords={globalWords} />
      <CreateNewBingoModal
        show={showModal}
        buttonClicked={modalButtonClicked}
      />
    </div>
  );
}

export default BingoContainer;
