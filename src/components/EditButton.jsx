import "./EditButton.css"

const EditButton = (props) => {
  const { editComment, index } = props

    return (
      <button onClick={() => {
        editComment(index)
      }} className="button button-edit">
        <img src="../images/icon-edit.svg" alt="Edit symbol" />
        <span className="text-edit">Edit</span>
      </button>
    )
}

export default EditButton