import { useState, useEffect } from "react";

function Loading({ progress }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(Math.round(1 * 100));
  }, [progress]);

  return (
    <div className="loading-body-div">
      <div className="loading">
        <div className="loading-bar">
          <div className="progress" style={{ width: `${percentage}%` }}>
            <span className="percentage">{percentage}%</span>
          </div>
        </div>

        <p className="loading-text">Loading...</p>
        <div class="color"></div>
      </div>
    </div>
  );
}

export default Loading;
