import React from "react";

function Filter({greased, handleClick}) {

  return (
    <div className="filterWrapper">
      <label>{greased ? "Show all pigs " : "Show greased Pigs "}</label>
      <button onClick={handleClick}>{ greased ? "All Pigs":"Greased Pigs"}</button>
    </div>
  )
}

export default Filter