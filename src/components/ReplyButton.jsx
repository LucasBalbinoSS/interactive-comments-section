import "./ReplyButton.css";

const ReplyButton = (props) => {
  const { index } = props

  return (
    <button className="comment-button button-reply">
      <img src="../images/icon-reply.svg" alt="Reply symbol" />
      <span className="text-reply">Reply</span>
    </button>
  )
}

export default ReplyButton