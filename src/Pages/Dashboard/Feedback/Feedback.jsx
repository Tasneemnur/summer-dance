import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const danceClass = useLoaderData();

  const handleFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;

    axios
      .patch(`http://localhost:5000/classes/${danceClass._id}`, {
        feedback: feedback,
      })
      .then((data) => {
        console.log(data.data);
        if (data.data.acknowledged === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: "feedback given successfully",
            confirmButtonText: "Ok",
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleFeedback}>
        <textarea
          placeholder="feedback"
          name="feedback"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
        ></textarea>
        <input
          type="submit"
          className="btn w-full mt-5 bg-orange-600 text-white"
          value="send"
        />
      </form>
    </div>
  );
};

export default Feedback;
