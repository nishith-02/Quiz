import React, { useState, useEffect } from "react";
import Data from "./Data/Data.json";
import { Link } from "react-router-dom";
import "./CSS/Questions.css";
function Questions(props) {
  const [current, setcurrent] = useState(1);
  const [answers, setanswers] = useState([]);
  var score = 0;
  useEffect(() => {
    for (
      var j, x, i = Data.length;
      i;
      j = parseInt(Math.random() * i),
        x = Data[--i],
        Data[i] = Data[j],
        Data[j] = x
    );
  }, []);
  const nextquestion = () => {
    setcurrent((current) => current + 1);
    document.getElementById("optiona").style.backgroundColor = "#fff";
    document.getElementById("optiona").style.color = "#5b86e5";
    document.getElementById("optionb").style.backgroundColor = "#fff";
    document.getElementById("optionb").style.color = "#5b86e5";
    document.getElementById("optionc").style.backgroundColor = "#fff";
    document.getElementById("optionc").style.color = "#5b86e5";
    document.getElementById("optiond").style.backgroundColor = "#fff";
    document.getElementById("optiond").style.color = "#5b86e5";
    if(answers[current]!==undefined)
    {
      if (answers[current] === "A") {
        document.getElementById("optiona").style.backgroundColor = "#5b86e5";
        document.getElementById("optiona").style.color = "#fff";
        document.getElementById("optionb").style.backgroundColor = "#fff";
        document.getElementById("optionb").style.color = "#5b86e5";
        document.getElementById("optionc").style.backgroundColor = "#fff";
        document.getElementById("optionc").style.color = "#5b86e5";
        document.getElementById("optiond").style.backgroundColor = "#fff";
        document.getElementById("optiond").style.color = "#5b86e5"; 
    }
    else if (answers[current] === "B") {
      document.getElementById("optionb").style.backgroundColor = "#5b86e5";
      document.getElementById("optionb").style.color = "#fff";
      document.getElementById("optiona").style.backgroundColor = "#fff";
      document.getElementById("optiona").style.color = "#5b86e5";
      document.getElementById("optionc").style.backgroundColor = "#fff";
      document.getElementById("optionc").style.color = "#5b86e5";
      document.getElementById("optiond").style.backgroundColor = "#fff";
      document.getElementById("optiond").style.color = "#5b86e5";
    }
    else if (answers[current] === "C") {
      document.getElementById("optionc").style.backgroundColor = "#5b86e5";
      document.getElementById("optionc").style.color = "#fff";
      document.getElementById("optionb").style.backgroundColor = "#fff";
      document.getElementById("optionb").style.color = "#5b86e5";
      document.getElementById("optiona").style.backgroundColor = "#fff";
      document.getElementById("optiona").style.color = "#5b86e5";
      document.getElementById("optiond").style.backgroundColor = "#fff";
      document.getElementById("optiond").style.color = "#5b86e5";
    }
    else if (answers[current] === "D") {
      document.getElementById("optiond").style.backgroundColor = "#5b86e5";
      document.getElementById("optiond").style.color = "#fff";
      document.getElementById("optionb").style.backgroundColor = "#fff";
      document.getElementById("optionb").style.color = "#5b86e5";
      document.getElementById("optionc").style.backgroundColor = "#fff";
      document.getElementById("optionc").style.color = "#5b86e5";
      document.getElementById("optiona").style.backgroundColor = "#fff";
      document.getElementById("optiona").style.color = "#5b86e5";
    }
  }
}
  const previousQuestion = () => {
    setcurrent((current) => current - 1);
    if (answers[current - 2] === "A") {
      document.getElementById("optiona").style.backgroundColor = "#5b86e5";
      document.getElementById("optiona").style.color = "#fff";
      document.getElementById("optionb").style.backgroundColor = "#fff";
      document.getElementById("optionb").style.color = "#5b86e5";
      document.getElementById("optionc").style.backgroundColor = "#fff";
      document.getElementById("optionc").style.color = "#5b86e5";
      document.getElementById("optiond").style.backgroundColor = "#fff";
      document.getElementById("optiond").style.color = "#5b86e5";
    }
    else if (answers[current - 2] === "B") {
      document.getElementById("optionb").style.backgroundColor = "#5b86e5";
      document.getElementById("optionb").style.color = "#fff";
      document.getElementById("optiona").style.backgroundColor = "#fff";
      document.getElementById("optiona").style.color = "#5b86e5";
      document.getElementById("optionc").style.backgroundColor = "#fff";
      document.getElementById("optionc").style.color = "#5b86e5";
      document.getElementById("optiond").style.backgroundColor = "#fff";
      document.getElementById("optiond").style.color = "#5b86e5";
    }
    else if (answers[current - 2] === "C") {
      document.getElementById("optionc").style.backgroundColor = "#5b86e5";
      document.getElementById("optionc").style.color = "#fff";
      document.getElementById("optionb").style.backgroundColor = "#fff";
      document.getElementById("optionb").style.color = "#5b86e5";
      document.getElementById("optiona").style.backgroundColor = "#fff";
      document.getElementById("optiona").style.color = "#5b86e5";
      document.getElementById("optiond").style.backgroundColor = "#fff";
      document.getElementById("optiond").style.color = "#5b86e5";
    }
    else if (answers[current - 2] === "D") {
      document.getElementById("optiond").style.backgroundColor = "#5b86e5";
      document.getElementById("optiond").style.color = "#fff";
      document.getElementById("optionb").style.backgroundColor = "#fff";
      document.getElementById("optionb").style.color = "#5b86e5";
      document.getElementById("optionc").style.backgroundColor = "#fff";
      document.getElementById("optionc").style.color = "#5b86e5";
      document.getElementById("optiona").style.backgroundColor = "#fff";
      document.getElementById("optiona").style.color = "#5b86e5";
    }
  };
  const optionA = () => {
    answers[current - 1] = "A";
    document.getElementById("optiona").style.backgroundColor = "#5b86e5";
    document.getElementById("optiona").style.color = "#fff";
    document.getElementById("optionb").style.backgroundColor = "#fff";
    document.getElementById("optionb").style.color = "#5b86e5";
    document.getElementById("optionc").style.backgroundColor = "#fff";
    document.getElementById("optionc").style.color = "#5b86e5";
    document.getElementById("optiond").style.backgroundColor = "#fff";
    document.getElementById("optiond").style.color = "#5b86e5";
  };
  const optionB = () => {
    answers[current - 1] = "B";
    document.getElementById("optionb").style.backgroundColor = "#5b86e5";
    document.getElementById("optionb").style.color = "#fff";
    document.getElementById("optiona").style.backgroundColor = "#fff";
    document.getElementById("optiona").style.color = "#5b86e5";
    document.getElementById("optionc").style.backgroundColor = "#fff";
    document.getElementById("optionc").style.color = "#5b86e5";
    document.getElementById("optiond").style.backgroundColor = "#fff";
    document.getElementById("optiond").style.color = "#5b86e5";
  };
  const optionC = () => {
    answers[current - 1] = "C";
    document.getElementById("optionc").style.backgroundColor = "#5b86e5";
    document.getElementById("optionc").style.color = "#fff";
    document.getElementById("optionb").style.backgroundColor = "#fff";
    document.getElementById("optionb").style.color = "#5b86e5";
    document.getElementById("optiona").style.backgroundColor = "#fff";
    document.getElementById("optiona").style.color = "#5b86e5";
    document.getElementById("optiond").style.backgroundColor = "#fff";
    document.getElementById("optiond").style.color = "#5b86e5";
  };
  const optionD = () => {
    answers[current - 1] = "D";
    document.getElementById("optiond").style.backgroundColor = "#5b86e5";
    document.getElementById("optiond").style.color = "#fff";
    document.getElementById("optionb").style.backgroundColor = "#fff";
    document.getElementById("optionb").style.color = "#5b86e5";
    document.getElementById("optionc").style.backgroundColor = "#fff";
    document.getElementById("optionc").style.color = "#5b86e5";
    document.getElementById("optiona").style.backgroundColor = "#fff";
    document.getElementById("optiona").style.color = "#5b86e5";
  };
  const SubmitHandler = () => {
    for (let j = 0; j < Data.length; j++) {
      if (Data[j].correct === answers[j]) {
        score++;
      }
    }
    window.localStorage.setItem("score", score);
  };
  return (
    <div className="second">
      <h1 className="question">
        {current}.{Data[current - 1].question}
      </h1>
      <div className="options">
        <button id="optiona" className="baloon" onClick={optionA}>
          A.{Data[current - 1].option1}
        </button>
        <button id="optionb" className="baloon" onClick={optionB}>
          B.{Data[current - 1].option2}
        </button>
        <br></br>
        <button id="optionc" className="baloon" onClick={optionC}>
          C.{Data[current - 1].option3}
        </button>
        <button id="optiond" className="baloon" onClick={optionD}>
          D.{Data[current - 1].option4}
        </button>
        <br></br>
      </div>
      <div className="twobtns">
        {current < 10 ? (
          <div>
            <button className="baloon1" id="next" onClick={nextquestion}>
              Next
            </button>
            <button className="disabled" id="disabledsub" disabled>
              Submit
            </button>
          </div>
        ) : (
          <div>
            <button className="disabled" id="disablednext" disabled>
              Next
            </button>
            <Link to="/score">
              <button className="baloon1" id="submit" onClick={SubmitHandler}>
                Submit
              </button>
            </Link>
          </div>
        )}
      </div>
      {current < 2 ? (
        <button className="disabled" id="disabledprevious" disabled>
          Previous
        </button>
      ) : (
        <button className="baloon1" id="previous" onClick={previousQuestion}>
          Previous
        </button>
      )}
    </div>
  );
}
export default Questions;
