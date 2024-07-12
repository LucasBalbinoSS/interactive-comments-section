import "./App.css";
import Comment from "./components/Comment";
import Header from "./components/Header";

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

export default function App() {
  return (
    <>
      <Header />
      <ul className="comments-list">
        {commentsList.map(function (comment) {
          return (
            <Comment
              key={comment.id}
              url={comment.url}
              alt={comment.alt}
              user={comment.user}
              date={comment.date}
              content={comment.content}
              likes={comment.likes}
            />
          );
        })}
      </ul>
    </>
  );
}
