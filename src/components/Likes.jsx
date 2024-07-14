import { useState } from "react";

import "./Likes.css";

export default function Likes() {
  const [likes, setLikes] = useState(function () {
    return 0;
  });

  function handleLike() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  function handleDislike() {
    if (likes > 0) {
      setLikes((prevLikes) => prevLikes - 1);
    }
  }

  return (
    <div className="likes">
      <button className="button button-like" onClick={handleLike}>
        <img src="../../images/icon-plus.svg" alt="Plus icon" />
      </button>
      <span className="likes-num">{likes}</span>
      <button className="button button-minus" onClick={handleDislike}>
        <img src="../../images/icon-minus.svg" alt="Plus icon" />
      </button>
    </div>
  );
}
