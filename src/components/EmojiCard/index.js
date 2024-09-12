// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, toGetEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const tapEmoji = () => {
    toGetEmoji(id)
  }
  return (
    <li className="list-item">
      <button
        type="buttton"
        className="emojiButton"
        onClick={tapEmoji}
        aria-label="close"
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
