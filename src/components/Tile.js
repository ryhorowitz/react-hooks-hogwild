import React from "react";

function Tile({ hog }) {
  const { name, specialty, greased, weight, image } = hog
  console.log(name)
  return (
  <li className="ui eight wide column">
    <p>{name}</p>
    <img src={image} alt="piggy"></img>
  </li>
  )
}

export default Tile