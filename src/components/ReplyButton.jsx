import "./ReplyButton.css";

const ReplyButton = () => {
    return (
      <button className="button button-reply">
        <img src="images/icon-reply.svg" alt="Reply symbol" />
        <span className="text-reply">Reply</span>
      </button>
    )
}

export default ReplyButton