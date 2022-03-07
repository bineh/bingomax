import "./failedmodal.css";

function FailedModal(props) {
  const { show, startNew } = props;

  function closeModal(e) {
    e.target.style.display = "none";
    startNew();
  }

  if (!show) return null;
  return (
    <div className="modal" onClick={closeModal}>
      <div className="failed-modal-content">
        <div>You looooose!!</div>
        <div className="modal-button" onClick={startNew}>
          nochmaaal
        </div>
      </div>
    </div>
  );
}

export default FailedModal;
