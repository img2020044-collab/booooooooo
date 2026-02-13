import React, { useState } from "react";
import "./Cell.css";

const Cell = ({ counter, setCounter, indexN, dump = [], setDump, file }) => {
  const [showModal, setShowModal] = useState(false);

  const handleFlip = () => {
    if (!file?.clickable) return;

    const updatedDump = dump.map((item, index) =>
      index === indexN && item.flipState === 1
        ? { ...item, flipState: 2 }
        : item,
    );

    const flippedCards = updatedDump.filter(
      (item) => item.flipState === 2 && item.clickable,
    );

    // When two cards are flipped
    if (flippedCards.length === 2) {
      // ✅ MATCH
      if (flippedCards[0].value === flippedCards[1].value) {
        const newCounter = counter + 1;
        setCounter(newCounter);

        setDump(
          updatedDump.map((item) =>
            item.flipState === 2 ? { ...item, clickable: false } : item,
          ),
        );

        // 🎉 Show modal
        setShowModal(true);
        setTimeout(() => setShowModal(false), 1200);

        return;
      }

      // ❌ NO MATCH
      setDump(updatedDump);

      setTimeout(() => {
        setDump(
          updatedDump.map((item) =>
            item.clickable ? { ...item, flipState: 1 } : item,
          ),
        );
      }, 1000);

      return;
    }

    setDump(updatedDump);
  };

  return (
    <>
      <div className="flip-wrapper">
        <div className="card-container">
          <div
            className={`card ${dump[indexN]?.flipState === 2 ? "flipped" : ""}`}
          >
            {/* Front */}
            <div className="card-face card-front">
              <img
                src="/images/template.png"
                alt="Front Side"
                className="card-image"
              />
            </div>

            {/* Back */}
            <div className="card-face card-back">
              {file?.filename && (
                <img
                  src={`/images/${file.filename}.png`}
                  alt="Back Side"
                  className="card-image"
                />
              )}
            </div>
          </div>
        </div>

        <button
          className={`flip-button ${!file?.clickable ? "disabled" : ""}`}
          onClick={handleFlip}
          disabled={!file?.clickable}
        >
          {file?.clickable ? "Click to Flip" : "Matched"}
        </button>
      </div>

      {/* ✨ Minimal Celebration Modal */}
      {showModal && (
        <div className="mini-modal">
          <span>🎉</span>
          <p>
            Yoohoo! <strong>{counter + 1}</strong>{" "}
            {counter + 1 === 1 ? "match" : "matches"} found!
          </p>
        </div>
      )}
    </>
  );
};

export default Cell;
