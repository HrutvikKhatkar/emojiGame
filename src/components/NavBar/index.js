import './index.css'
// Write your code here.
const Navbar = props => {
  const {score, topScore, isGameOver} = props

  return (
    <navbar className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {!isGameOver ? (
        <div className="nav-score-container">
          <p className="score">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </navbar>
  )
}

export default Navbar
