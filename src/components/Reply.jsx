import Likes from "./Likes";
import ReplyButton from "./ReplyButton";

const Reply = (props) => {
  return (
    <li className="comment-container" key={props.id}>
      <div className="comment">
        <div className="comment-internal">
          <div className="information">
            <div className="information-internal">
              <img className="photo" src={props.url} alt={props.alt} />
              <span className="user">{props.user}</span>
              <span className="date">{props.date}</span>
            </div>
            <div className="comment-interaction-internal">
              {props?.you && <DeleteButton />}
              {props?.you && <EditButton />}
              {! props?.you && <ReplyButton />}
            </div>
          </div>
          <p className="text-content">{props.content}</p>
        </div>
        <div className="comment-interaction">
          <Likes numLikes={props.numLikes} />
          <div className="comment-interaction-internal-mobile">
            <ReplyButton />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Reply