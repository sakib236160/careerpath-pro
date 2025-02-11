const Modal = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(e);
    }
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">

          <form action="" onSubmit={handleSubmit}>
            <textarea
              className="textarea textarea-bordered w-full mt-3"
              placeholder="Write your feedback..."
            ></textarea>
            <button className="btn btn-primary mt-3" type="submit">Submit Feedback</button>
          </form>

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
