// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment} = props
  const {id, name, comment, isLiked, time} = commentDetails

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClassName = isLiked ? 'liked' : ''

  const onClickLike = () => {
    toggleLike(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-header">
        <div className="initial">{name[0]}</div>

        <div>
          <p className="username">{name}</p>
          <p className="time">{time} ago</p>
        </div>
      </div>

      <p className="comment-text">{comment}</p>

      <div className="actions">
        <button className="like-button" onClick={onClickLike}>
          <img src={likeImageUrl} alt="like" className="like-icon" />
          <span className={`like-text ${likeClassName}`}>Like</span>
        </button>

        <button
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
