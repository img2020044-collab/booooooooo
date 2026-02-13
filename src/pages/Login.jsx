import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmedName = name.trim().toLowerCase();

    if (trimmedName) {
      navigate("/about", {
        state: { user: trimmedName },
      });
    }
  };

  return (
    <div className="login-page">
      {/* Intro text */}
      <div className="intro-text">
        <p>
          The game is a puzzle to be solved. It has multiple images in sets of
          2. Two of them are associated with each other and when it’s a match,
          you will be prompted.
        </p>
        <p>
          Complete the puzzle and unlock a beautiful image of shared memories 💖
        </p>
      </div>

      {/* Login box */}
      <div className="login-box">
        <h2>Enter Your Name</h2>

        <input
          type="text"
          placeholder="Your name…"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />

        <button onClick={handleLogin}>Enter the Puzzle</button>
      </div>
    </div>
  );
};

export default Login;
