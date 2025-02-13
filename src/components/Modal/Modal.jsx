import { useState } from "react";

const Modal = () => {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFeedback(feedback);
    setFeedback("");
  };

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <textarea
              className="textarea textarea-bordered w-full mt-3"
              placeholder="Write your feedback..."
              value={feedback}
              onChange={handleInputChange}
            ></textarea>
            <button className="btn btn-primary mt-3" type="submit">
              Submit Feedback
            </button>
          </form>

          {submittedFeedback && (
            <div className="mt-4 p-2 bg-gray-100 rounded">
              <strong>Your Feedback:</strong> {submittedFeedback}
            </div>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
