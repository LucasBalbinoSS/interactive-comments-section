import { useState } from "react";

import "./Comment.css";
import commentList from "../utils/commentList";

import Reply from "./Reply";
import Likes from "./Likes";
import Input from "./Input";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import ReplyButton from "./ReplyButton";

const Comment = () => {
  const [comment, setComment] = useState(commentList)

  const addComment = (newComment) => {
    if (newComment == '') {
      return
    }

    setComment((prevComments) => [
      ...prevComments,
      {
        id: prevComments?.length + 1,
        url: "../../images/avatars/image-juliusomo.png",
        alt: "juliusomos's profile photo",
        user: "juliusomo",
        you: true,
        date: "now",
        content: newComment,
        replies: []
      }
    ])
  }

  return (
    <>
      <ul className="comments-list">
        {comment.map((comment, index) => {
          return (
            <li className="comment-container" key={index}>
              <div className="comment">
                <div className="information">
                  <img className="photo" src={comment.url} alt={comment.alt} />
                  <div className="user-container">
                    <span className="user">{comment.user}</span>
                    {comment?.you && <span className="your-comment-label">you</span>}
                  </div>
                  <span className="date">{comment.date}</span>
                </div>
                <p className="text-content">{comment.content}</p>
                <div className="comment-interaction">
                  <Likes />
                  <div className="comment-interaction-internal">
                    {comment?.you && <DeleteButton removeComment={removeComment} />}
                    {comment?.you && <EditButton />}
                    {! comment?.you && <ReplyButton />}
                  </div>
                </div>
              </div>
              {comment?.replies?.length > 0 && (
                <ul className="replies-list">
                  {comment.replies.map(function (reply, index) {
                    return (
                      <Reply
                        key={index}
                        url={reply.url}
                        alt={reply.alt}
                        user={reply.user}
                        date={reply.date}
                        content={reply.content}
                      />
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <Input addComment={addComment} />
    </>
  );
}

export default Comment