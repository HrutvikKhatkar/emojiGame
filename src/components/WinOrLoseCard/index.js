// Write your code here.
import './index.css'

const WinLossCard = props => {
  const {isWin, resetGame, score} = props
  const onReset = () => {
    resetGame()
  }
  return (
    <div className="result-container">
      {isWin ? (
        <>
          <div className="text-display-container">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>{score - 1}/12</p>
            <button type="button" onClick={onReset}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="won-img"
          />
        </>
      ) : (
        <>
          <div className="text-display-container">
            <h1>You Lose</h1>
            <p>Best Score</p>
            <p>{score}/12</p>
            <button type="button" onClick={onReset}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="won-img"
          />
        </>
      )}
    </div>
  )
}
export default WinLossCard
