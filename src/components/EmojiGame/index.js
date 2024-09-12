/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import Navbar from '../NavBar'
import Emojicard from '../EmojiCard'
import WinLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    isGameOver: false,
    isWin: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = clickedEmojisLength => {
    const a = this.props
    const b = a.emojisList
    const emojisListLength = b.length
    this.setState(prevState => ({
      topScore: Math.max(prevState.topScore, clickedEmojisLength),
      isGameOver: true,
      isWin: clickedEmojisLength === emojisListLength,
    }))
  }

  scoreCount = id => {
    const {emojisList} = this.props
    // 1. Destructuring the emojisList from props

    const {clickedEmojisList} = this.state
    // 2. Destructuring the clickedEMojisList from state

    const isEmojiPresent = clickedEmojisList.includes(id)
    // 3. Checking whether the clickedEmojisList contains the id(which clicked present) or not.

    const clickedEmojisLength = clickedEmojisList.length
    // 4. assigning the lengh of the clickedEmojisList to the clickedEmojisLength.

    if (isEmojiPresent) {
      // 5. If the clickedEmojisList already contains the present clicked id, (that means smae emoji clicked twice), then the method finishGameAndSetTopScore will be called and game will be finished.

      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        // 6. If the all the emoji's in the emojisList are clicked excatly once then the game will be finished.
        // 6. 1 The emojisList.length - 1 will be equal to the length of the clickedEmojisLength(when clicking the final emoji)
        this.setState(prev => ({
          score: prev.score + 1,
        }))
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
      // 7. setting the state clickedEmojisList by appending the clicked emoji id using the spread operator and setState() method.

      this.setState(prev => ({
        score: prev.score + 1,
      }))
    }
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedEmojisList: [],
      isGameOver: false,
      isWin: false,
    })
  }

  render() {
    const {score, topScore, isGameOver, isWin} = this.state
    // const {emojisList} = this.props
    const afterShuffledEmoji = this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <Navbar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="emojis-container">
          {isGameOver ? (
            <WinLossCard
              score={score}
              isWin={isWin}
              resetGame={this.resetGame}
            />
          ) : (
            <ul className="ul-container">
              {afterShuffledEmoji.map(eachEmoji => (
                <Emojicard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  toGetEmoji={this.scoreCount}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
