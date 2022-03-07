import { useState } from "react";
import Cards from "../Cards";
import CreateNewBingoModal from "../CreateNewBingoModal";

function BingoContainer() {
  const [showModal, setShowModal] = useState(false);

  function modalButtonClicked(newSettings) {
    setShowModal(false);
    console.log("newSettings", newSettings);
    const { topic } = newSettings;
    // TODO: getData from db here....
    fetch(`http://localhost:4000/${topic}`)
      .then((response) => response.json())
      .then((data) => console.log("data from topic: ", data));
  }

  return (
    <div>
      <button onClick={() => setShowModal(true)}>NEW BINGO</button>
      <Cards />
      <CreateNewBingoModal
        show={showModal}
        buttonClicked={modalButtonClicked}
      />
    </div>
  );
}

export default BingoContainer;
