import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onEmojiClicked = () => {
    clickedEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={onEmojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
