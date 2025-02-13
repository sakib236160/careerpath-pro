// import { useState } from "react";

// const Modal = () => {
//   const [feedback, setFeedback] = useState("");
//   const [submittedFeedback, setSubmittedFeedback] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedFeedback(feedback);
//     setFeedback("");
//   };

//   const handleInputChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   return (
//     <div>
//       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit}>
//             <textarea
//               className="textarea textarea-bordered w-full mt-3"
//               placeholder="Write your feedback..."
//               value={feedback}
//               onChange={handleInputChange}
//             ></textarea>
//             <button className="btn bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white font-bold mt-3" type="submit">
//               Submit Feedback
//             </button>
//           </form>

//           {submittedFeedback && (
//             <div className="mt-4 p-2 bg-gray-100 rounded">
//               <strong>Your Feedback:</strong> {submittedFeedback}
//             </div>
//           )}

//           <div className="modal-action">
//             <form method="dialog">
//               <button className="btn">OK!</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default Modal;



import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = () => {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState("");

  useEffect(() => {
    AOS.init({ duration: 600 }); // AOS Initialize
  }, []);

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
        <div className="modal-box" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-[#124E66] mb-3 text-center">
            Give Your Feedback
          </h2>
          
          {/* Feedback Form */}
          <form onSubmit={handleSubmit}>
            <textarea
              className="textarea textarea-bordered w-full mt-3 p-3 rounded-lg shadow-md"
              placeholder="Write your feedback..."
              value={feedback}
              onChange={handleInputChange}
            ></textarea>

            <button
              className="btn w-full bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white font-bold mt-3 py-2 rounded-lg shadow-md"
              type="submit"
              data-aos="zoom-in"
            >
              Submit Feedback
            </button>
          </form>

          {/* Display Submitted Feedback */}
          {submittedFeedback && (
            <div className="mt-4 p-3 bg-gray-100 rounded-lg shadow-sm text-center">
              <strong className="text-[#124E66]">Your Feedback:</strong> {submittedFeedback}
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="modal-action flex justify-center">
            <form method="dialog">
              <button className="btn px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition">
                Is'Ok
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

