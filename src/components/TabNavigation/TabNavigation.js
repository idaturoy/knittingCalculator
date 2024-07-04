import React, { useState } from "react";
import "./TabNavigation.css";
import WidthCalculation from "../WidthCalculation"
import YarnConversion from "../YarnConversion";
import FreeKnit from "../FreeKnit";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tab-navigation">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Width
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Change yarn
        </button>
        <button
          className={`tab-button ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Number of stitches
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <div><WidthCalculation /></div>}
        {activeTab === 2 && <div><YarnConversion /></div>}
        {activeTab === 3 && <div><FreeKnit /></div>}
      </div>
    </div>
  );
};

export default TabNavigation;
