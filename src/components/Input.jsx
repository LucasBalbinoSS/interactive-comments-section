import "./Input.css";

export default function Input() {
  return (
    <div className="input">
      <textarea
        className="input-field"
        name="input"
        id="input"
        placeholder="Add a comment.."
      ></textarea>
      <div className="input-internal">
        <img
          className="photo"
          src="../../images/avatars/image-juliusomo.png"
          alt="juliusomo's profile photo"
        />
        <button className="send-button js-send-button">Send</button>
      </div>
    </div>
  );
}
