import Likes from "./Likes";

export default function Reply(props) {
  return (
    <li className="comment-container" key={props.id}>
      <div className="comment">
        <div className="information">
          <img className="photo" src={props.url} alt={props.alt} />
          <span className="user">{props.user}</span>
          <span className="date">{props.date}</span>
        </div>
        <p className="text-content">{props.content}</p>
        <div className="comment-interaction">
          <Likes />
          <button className="button button-reply">
            <img src="../../images/icon-reply.svg" alt="Reply symbol" />
            <span className="text-reply">Reply</span>
          </button>
        </div>
      </div>
    </li>
  );
}
