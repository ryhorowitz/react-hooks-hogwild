import React, { useState } from "react";

function Filter() {
  const [greased, setGreased] = useState(false)

  function handleClick() {
    setGreased(!greased)
  }
  return (
    <div className="filterWrapper">
      <label>{greased ? "Show all pigs " : "Show greased Pigs "}</label>
      <button onClick={handleClick}>{ greased ? "All Pigs":"Greased Pigs"}</button>
    </div>
  )
}

export default Filter