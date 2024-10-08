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
  const [comments, setComments] = useState(commentList)
  const [commentValue, setCommentValue] = useState('')

  const addComment = (newComment) => {
    if (newComment == '') {
      return
    }

    setComments((prevComments) => [
      ...prevComments,
      {
        id: prevComments?.length + 1,
        url: "../images/avatars/image-juliusomo.png",
        alt: "juliusomos's profile photo",
        user: "juliusomo",
        you: true,
        date: "now",
        content: newComment,
        likes: 0,
        replies: []
      }
    ])
  }

  const handleAddComment = () => {
    addComment(commentValue)
    setCommentValue('')
  }

  const deleteComment = (index) => {
    const newCommentList = comments.filter((comment, commentIndex) => {
      return commentIndex !== index
    })

    setComments(newCommentList)
  }

  const editComment = (index) => {
    const valueToBeEdited = comments[index].content

    setCommentValue(valueToBeEdited)
    deleteComment(index)
  }

  return (
    <>
      <ul className="comments-list">
        {comments.map((comment, commentIndex) => {
          return (
            <li className="comment-container" key={commentIndex}>
              <div className="comment">
                <div className="comment-internal">
                  <div className="information">
                    <div className="information-internal">
                      <img className="photo" src={comment.url} alt={comment.alt} />
                      <div className="user-container">
                        <span className="user">{comment.user}</span>
                        {comment?.you && <span className="your-comment-label">you</span>}
                      </div>
                      <span className="date">{comment.date}</span>
                    </div>
                    <div className="comment-interaction-internal">
                      {comment?.you && <DeleteButton deleteComment={deleteComment} index={commentIndex}/>}
                      {comment?.you && <EditButton editComment={editComment} index={commentIndex} />}
                      {! comment?.you && <ReplyButton index={commentIndex} />}
                    </div>
                  </div>
                  <p className="text-content">{comment.content}</p>
                </div>
                <div className="comment-interaction">
                  <Likes numLikes={comment.likes} />
                  <div className="comment-interaction-internal-mobile">
                    {comment?.you && <DeleteButton deleteComment={deleteComment} index={commentIndex}/>}
                    {comment?.you && <EditButton editComment={editComment} index={commentIndex} />}
                    {! comment?.you && <ReplyButton index={commentIndex} />}
                  </div>
                </div>
              </div>
              {comment?.replies?.length > 0 && (
                <ul className="replies-list">
                  {comment.replies.map((reply, replyIndex) => {
                    return (
                      <Reply
                        key={replyIndex}
                        index={replyIndex}
                        url={reply.url}
                        alt={reply.alt}
                        user={reply.user}
                        date={reply.date}
                        content={reply.content}
                        numLikes={reply.likes}
                      />
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <Input
      handleAddComment={handleAddComment}
      editComment={editComment}
      commentValue={commentValue}
      setCommentValue={setCommentValue}
      addComment={addComment}
      />
    </>
  );
}

export default Comment