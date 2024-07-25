import { useState } from "react";
import "./Input.css";

const Input = ({ addComment }) => {
  const [comment, setComment] = useState('')

  const handleTextAreaChange = (e) => {
    setComment(e.target.value)
  }

  const handleAddComment = () => {
    addComment(comment)
    setComment('')
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
      <div className="input-internal">
        <img
          className="photo"
          src="../../images/avatars/image-juliusomo.png"
          alt="juliusomo's profile photo"
        />
        <button onClick={handleAddComment} className="send-button js-send-button">Send</button>
      </div>
    </div>
  );
}

export default Input