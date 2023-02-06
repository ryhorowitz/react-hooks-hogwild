import React, {useState} from "react";
import Tile from "./Tile";

function HogsList({ hogs, sorted }) {

  const list = hogs.map( hog => {
    return <Tile hog={hog} key={hog.name} />
  })

  const sortedByWeight = hogs.sort((a, b) => {
		return a.weight - b.weight
	})

  const sortedByWeightList = sortedByWeight.map( hog => {
    return <Tile hog={hog} key={hog.name} />
  })
	// console.log('sorted List', sortedByWeight)


  
  return (
    <ul className="ui grid container">
      {sorted ? sortedByWeightList : list}
    </ul>
  )
}

export default HogsList