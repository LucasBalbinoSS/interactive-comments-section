import "./Comment.css";
import Reply from "./Reply";

const commentsList = [
  {
    id: 0,
    url: "../../images/avatars/image-amyrobson.png",
    alt: "amyrobson's profile photo",
    user: "amyrobson",
    date: "1 month ago",
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incledible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    likes: 12,
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
    likes: 5,
    replies: [
      {
        id: 0,
        url: "../../images/avatars/image-ramsesmiron.png",
        alt: "ramsesmiron's profile photo",
        user: "ramsesmiron",
        date: "1 week ago",
        content:
          "@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        likes: 4,
      },
    ],
  },
];

export default function Comment() {
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
                <div className="likes">
                  <button className="button button-like">
                    <img src="../../images/icon-plus.svg" alt="Plus icon" />
                  </button>
                  <span className="likes-num">{comment.likes}</span>
                  <button className="button button-minus">
                    <img src="../../images/icon-minus.svg" alt="Plus icon" />
                  </button>
                </div>
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
                      likes={reply.likes}
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
