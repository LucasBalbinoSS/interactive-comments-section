import "./Input.css";

const Input = ({ handleAddComment, commentValue, setCommentValue }) => {
  return (
    <form className="input">
      <textarea
        className="input-field"
        name="input"
        id="input"
        placeholder="Add a comment.."
        value={commentValue}
        onChange={(e) => {
          setCommentValue(e.target.value)
        }}
      ></textarea>
      <img
        className="photo"
        src="../images/avatars/image-juliusomo.png"
        alt="juliusomo's profile photo"
      />
      <button onClick={handleAddComment} className="send-button js-send-button">Send</button>
    </form>
  );
}

export default Input