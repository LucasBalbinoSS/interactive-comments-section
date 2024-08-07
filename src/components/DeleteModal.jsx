import './DeleteModal.css'

const DeleteModal = ({ modalRef, deleteComment, index, handleCloseModal }) => {
  return (
    <dialog ref={modalRef} className='modal-container'>
      <div className='modal'>
        <h2>Delete comment?</h2>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className='button-container'>
          <button onClick={() => {
            handleCloseModal()
          }} className='button button-cancel'>No, cancel</button>
          <button onClick={() => {
            deleteComment(index)
            handleCloseModal()
          }} className='button button-delete'>Yes, delete</button>
        </div>
      </div>
    </dialog>
  )
}

export default DeleteModal