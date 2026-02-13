import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="valentine-header">
      <div className="header-left">
        <h1 className="site-title">For My Loved Ones ❤️</h1>
        <p className="site-tagline">
          Games, giggles, and little surprises—made just for you
        </p>
      </div>

      <nav className="header-nav">
        <button className="nav-btn">Games 🎮</button>
        <button className="nav-btn">Memories 📸</button>
        <button className="nav-btn">Surprises 🎁</button>
        <button className="nav-btn special">Love Notes 💌</button>
      </nav>
    </header>
  );
};

export default Header;
