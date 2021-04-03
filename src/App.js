import React from "react";
import { Link } from "react-router-dom";
import './CSS/HomePage.css'
function App() {
  return (
    <div className="home">
      <Link to="/questions">
        <button className="btn">Start Quiz</button>
      </Link>
    </div>
  );
}

export default App;
