import '../game_styles/GridTiles.css'
import GridSquare from "./GridSquare";

const GridBoard = () => {
  const grid = [];

  for (let row = 0; row < 18; row ++) {
    for (let col = 0; col < 10; col ++) {
      grid.push([])
      grid[row].push(<GridSquare key={`${col}${row}`} color='0' />)
    }
  }

  return (
    <div className="grid-board">
      {grid}
    </div>
  )
}

export default GridBoard;