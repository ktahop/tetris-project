import '../game_styles/GridTiles.css'
import GridSquare from "./GridSquare"

const NextBlock = () => {
  const box = [
    [0,0,0,0,],
    [0,0,0,0,],
    [0,0,0,0,],
    [0,0,0,0,]
  ]

  const grid = box.map((rowArr, row) => 
    rowArr.map((square, col) => 
      <GridSquare key={`${row} ${col}`} color={square} />
  ))

  return (
    <div className="next-block">
      {grid}
    </div>
  )
}

export default NextBlock;