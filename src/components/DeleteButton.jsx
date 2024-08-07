import { useRef } from "react"

import "./DeleteButton.css"
import DeleteModal from "./DeleteModal"

const DeleteButton = (props) => {
  const { deleteComment, index } = props
  const modalRef = useRef(null)

  const handleOpenModal = () => {
    modalRef.current.showModal()
  }

  const handleCloseModal = () => {
    modalRef.current.close()
  }

  return (
    <>
      <button onClick={() => {
        handleOpenModal()
      }} className="comment-button button-delete">
        <img src="../images/icon-delete.svg" alt="Delete symbol" />
        <span className="text-delete">Delete</span>
      </button>
      <DeleteModal
      handleCloseModal={handleCloseModal}
      deleteComment={deleteComment}
      index={index}
      modalRef={modalRef}
      handleOpenModal={handleOpenModal}
      />
    </>
  )
}

export default DeleteButton