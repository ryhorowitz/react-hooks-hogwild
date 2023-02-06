import React from "react";
import Tile from "./Tile";

function HogsList({ hogs }) {
  //make a list of tiles
  const list = hogs.map( hog => {
    return <Tile hog={hog} key={hog.name}/>
  })
  return (
    <ul className="ui grid container">
      {list}
    </ul>
  )
}

export default HogsList