
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const danceClass = useLoaderData();

  const handleFeedback = event => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    console.log(JSON.stringify(feedback))

    // fetch(`http://localhost:5000/classes/${danceClass._id}`, {
    //     method: "PATCH",
    //     headers: {
    //         'content-type': "application/json"
    //     },
    //     body: JSON.stringify(feedback)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     if (data.modifiedCount > 0) {
    //         Swal.fire({
    //             position: 'center',
    //             icon: 'success',
    //             text: 'Toy information updated successfully',
    //             confirmButtonText: 'Ok',
    //             timer: 1500
    //           })
    //     }
    // })
  }

  return (
    <div>
      <form onSubmit={handleFeedback}>
        <textarea
          placeholder="feedback"
          name="feedback"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
        ></textarea>
        <input type="submit" className="btn w-full mt-5 bg-orange-600 text-white" value="send" />
      </form>
    </div>
  );
};

export default Feedback;
