import '../game_styles/GridColors.css'

const GridSquare = ({ color }) => {
  const classes = `grid-square color-${color}`
  return <div className={classes} />
}

export default GridSquare;