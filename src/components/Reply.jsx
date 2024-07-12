import "./Reply.css";

export default function Reply() {
  return (
    <li className="comment-container">
      <div className="comment">
        <div className="information">
          <img
            className="photo"
            src="../../images/avatars/image-ramsesmiron.webp"
            alt="Teste"
          />
          <span className="user">ramsesmiron</span>
          <span className="date">1 week ago</span>
        </div>
        <p className="text-content">
          @maxblagun If you're still new, I'd recommend focusing on the
          fundamentals of HTML, CSS, and JS before considering React. It's very
          tempting to jump ahead but lay a solid foundation first.
        </p>
        <div className="comment-interaction">
          <div className="likes">
            <button className="button button-like">
              <img src="../../images/icon-plus.svg" alt="Plus icon" />
            </button>
            <span className="likes-num">2</span>
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
    </li>
  );
}
