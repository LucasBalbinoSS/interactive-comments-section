import { useState } from "react";
import "./Input.css";

const Input = ({ addComment }) => {
  const [comment, setComments] = useState('')

  const handleTextAreaChange = (e) => {
    setComments(e.target.value)
  }

  const handleAddComment = () => {
    addComment(comment)
    setComments('')
  }

  return (
    <div className="input">
      <textarea
        className="input-field"
        name="input"
        id="input"
        placeholder="Add a comment.."
        value={comment}
        onChange={handleTextAreaChange}
      ></textarea>
      <img
        className="photo"
        src="../../images/avatars/image-juliusomo.png"
        alt="juliusomo's profile photo"
      />
      <button onClick={handleAddComment} className="send-button js-send-button">Send</button>
    </div>
  );
}

export default Input