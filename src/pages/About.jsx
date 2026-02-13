import React, { useState, useEffect } from "react";
import Cell from "../cells/Cell";
import { useLocation } from "react-router-dom";

import { list2 } from "../list2";
import { list } from "../list";
import "./About.css";
import Header from "../Header/Header";

const About = () => {
  const location = useLocation();
  const user = location.state?.user; // "harshal" | "aakanksha"
  const initialList = user === "harshal" ? list : list2;
  const [numbers, setNumbers] = useState([]);
  const [dump, setDump] = useState(initialList);
  const [counter, setCounter] = useState(-1);

  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const initialNumbers = Array.from({ length: 12 }, (_, i) => i);
    setNumbers(shuffleArray(initialNumbers));
  }, [dump]);

  return (
    <div className="aboutPage">
      <div className="cta-wrapper">
        <h2 className="cta-title">A Little Puzzle 🎁</h2>
        <p className="cta-text">
          A friendly puzzle made with care. Flip the cards, match them right, a
          small effort to acknowledge you and your presence in my life 💝
        </p>
      </div>
      <div className="aboutPageContent">
        <div className="container">
          <div className="row">
            <Cell
              indexN={numbers[0]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[0]]}
            />
            <Cell
              indexN={numbers[1]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[1]]}
            />
            <Cell
              indexN={numbers[2]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[2]]}
            />
          </div>
          <div className="row">
            <Cell
              indexN={numbers[3]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[3]]}
            />
            <Cell
              indexN={numbers[4]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[4]]}
            />
            <Cell
              indexN={numbers[5]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[5]]}
            />
          </div>
          <div className="row">
            <Cell
              indexN={numbers[6]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[6]]}
            />
            <Cell
              indexN={numbers[7]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[7]]}
            />
            <Cell
              indexN={numbers[8]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[8]]}
            />
          </div>
          <div className="row">
            <Cell
              indexN={numbers[9]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[9]]}
            />
            <Cell
              indexN={numbers[10]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[10]]}
            />
            <Cell
              indexN={numbers[11]}
              setDump={setDump}
              counter={counter}
              setCounter={setCounter}
              dump={dump}
              file={list[numbers[11]]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


