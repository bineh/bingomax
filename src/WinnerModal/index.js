import "./winnermodal.css";

function WinnerModal(props) {
  const { show, startNew } = props;

  function closeModal(e) {
    e.target.style.display = "none";
    startNew();
  }

  if (!show) return null;
  return (
    <div className="modal" onClick={closeModal}>
      <div className="failed-modal-content">
        <div>WINNER!!</div>
        <div className="modal-button" onClick={startNew}>
          nochmaaal
        </div>
      </div>
    </div>
  );
}

export default WinnerModal;
