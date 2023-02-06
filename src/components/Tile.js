import React, { useState } from "react";

function Tile({ hog }) {
  const [clicked, setClicked] = useState(false)

  const { name, specialty, greased, weight, image } = hog
  
  // console.log(hog['highest medal achieved'])
  const text = <div className="maxPigTile">
    <p>Specialty: {specialty}</p>
    <p>Weight: {weight}lbs</p>
    <p>Greased: {greased ? 'Yes' : 'No'}</p>
    <p> Highest Medal: <span className='achievementText'>{hog['highest medal achieved']}</span></p>
  </div>
  function handleClick() {
    setClicked(!clicked)
  }
  return (
    <li className="ui eight wide column">
      <div className="pigTile" onClick={handleClick}>
        <p>{name}</p>
        <img src={image} alt="piggy" className="minPigTile"></img>
        {clicked ? text : null}
      </div >
    </li>
  )
}

export default Tile