import { useState } from "react";

import "./Likes.css";

const Likes = ({ numLikes }) => {
  const [likes, setLikes] = useState(numLikes);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    if (likes > 0) {
      setLikes(likes  - 1);
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

export default Likes