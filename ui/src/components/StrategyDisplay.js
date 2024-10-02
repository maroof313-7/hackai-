// src/components/StrategyDisplay.js
import React from 'react';
import './StrategyDisplay.css'; // Assuming you create a CSS file for styles

const StrategyDisplay = ({ strategy }) => {
    if (!strategy) {
        return null; // Don't render anything if no strategy is available
    }

    return (
        <div className="strategy-display-container">
            <h2>Generated Strategy</h2>
            <div className="strategy-details">
                <h3>Business Goal:</h3>
                <p>{strategy.businessGoal}</p>
                <h3>Target Audience:</h3>
                <p>{strategy.targetAudience}</p>
                <h3>Budget:</h3>
                <p>{strategy.budget}</p>
                <h3>Marketing Channels:</h3>
                <p>{strategy.marketingChannels}</p>
                <h3>Actionable Strategy:</h3>
                <p>{strategy.generatedStrategy}</p>
            </div>
        </div>
    );
};

export default StrategyDisplay;
