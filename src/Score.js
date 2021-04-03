import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CSS/Score.css"
function Score() {
  const SubmitHandler=()=>{
    window.localStorage.removeItem("score");
  }
  return (
    <div className="score">  
        <h1>Your Score is:{window.localStorage.getItem("score")}/10</h1>
        <Link to="/">
              <button className="again" onClick={SubmitHandler}>
                Play Again
              </button>
            </Link>
    </div>
  );
}
export default Score;
