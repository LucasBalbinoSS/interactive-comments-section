import { useState } from "react";

import "./Comment.css";
import Reply from "./Reply";
import Likes from "./Likes";

export default function Comment() {
  const [commentsList, setCommentsList] = useState([
    {
      id: 0,
      url: "../../images/avatars/image-amyrobson.png",
      alt: "amyrobson's profile photo",
      user: "amyrobson",
      date: "1 month ago",
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incledible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      replies: [],
    },
    {
      id: 1,
      url: "../../images/avatars/image-maxblagun.png",
      alt: "maxblagun's profile photo",
      user: "maxblagun",
      date: "2 weeks ago",
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think i want to dive into React as well soon. Perhaps you can give me an insight on where i can learn React? Thanks!",
      replies: [
        {
          id: 0,
          url: "../../images/avatars/image-ramsesmiron.png",
          alt: "ramsesmiron's profile photo",
          user: "ramsesmiron",
          date: "1 week ago",
          content:
            "@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        },
      ],
    },
  ]);

  return (
    <>
      {commentsList.map(function (comment) {
        return (
          <li className="comment-container" key={comment.id}>
            <div className="comment">
              <div className="information">
                <img className="photo" src={comment.url} alt={comment.alt} />
                <span className="user">{comment.user}</span>
                <span className="date">{comment.date}</span>
              </div>
              <p className="text-content">{comment.content}</p>
              <div className="comment-interaction">
                <Likes />
                <button className="button button-reply">
                  <img src="../../images/icon-reply.svg" alt="Reply symbol" />
                  <span className="text-reply">Reply</span>
                </button>
              </div>
            </div>
            {comment.replies.length > 0 && (
              <ul className="replies-list">
                {comment.replies.map(function (reply) {
                  return (
                    <Reply
                      key={reply.id}
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
    </>
  );
}
