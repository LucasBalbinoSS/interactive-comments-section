import Likes from "./Likes";
import ReplyButton from "./ReplyButton";

const Reply = (props) => {
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
          <ReplyButton />
        </div>
      </div>
    </li>
  );
}

export default Reply