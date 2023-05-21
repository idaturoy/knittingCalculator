import React, { useState } from "react";
import "./TabNavigation.css";
import CircumferenceCalculation from "../CircumferenceCalculation"
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
          Will it fit?
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Different yarn?
        </button>
        <button
          className={`tab-button ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Free knit?
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <p><CircumferenceCalculation /></p>}
        {activeTab === 2 && <p><YarnConversion /></p>}
        {activeTab === 3 && <p><FreeKnit /></p>}
      </div>
    </div>
  );
};

export default TabNavigation;
