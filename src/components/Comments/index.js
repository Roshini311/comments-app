const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
        time: formatDistanceToNow(new Date()),
      }

      this.setState(prev => ({
        commentsList: [...prev.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  toggleLike = id => {
    this.setState(prev => ({
      commentsList: prev.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prev => ({
      commentsList: prev.commentsList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length

    return (
      <div className="comments-app-container">
        <h1 className="heading">Comments</h1>

        <div className="top-container">
          <form className="form" onSubmit={this.onAddComment}>
            <p className="about">Say something about 4.0 Technologies</p>

            <input
              type="text"
              placeholder="Your Name"
              className="input"
              value={name}
              onChange={this.onChangeName}
            />

            <textarea
              placeholder="Your Comment"
              className="textarea"
              value={comment}
              onChange={this.onChangeComment}
            />

            <button type="submit" className="button">
              Add Comment
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-img"
          />
        </div>

        <hr className="line" />

        <p className="count">
          <span className="count-number">{count}</span> Comments
        </p>

        <ul className="comments-list">
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              commentDetails={each}
              toggleLike={this.toggleLike}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
