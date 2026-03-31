import React from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ current, total, color }) => {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="progress-label">
        {current} / {total}
      </span>
    </div>
  );
};

export default ProgressBar;