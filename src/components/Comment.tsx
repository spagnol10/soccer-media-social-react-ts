import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgxnyQxTw8ElZpkvvxVV0v_bZ4GhYdUmjTSFUpAIQXd5LIF9YxnujNL0n5F1G9EyMRhM4Rju_EazfWm7IpD_Qwfshvo5P2S2Jm8phxNA" 
        />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title='11 de Maio às 08:33'
                dateTime="2022-05-11 08:33:24"> Commented last 1h 
              </time>
            </div>
            <button title='Delete comment'>
              <Trash onClick={handleDeleteComment} size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}