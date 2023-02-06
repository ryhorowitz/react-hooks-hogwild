import React, {useState} from "react";

function Sort({handleClick}) {
  
  return(
    <div className="filterWrapper">
      <button onClick={handleClick}>Sort by Weight</button>
    </div>
  )
}

export default Sort