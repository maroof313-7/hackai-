import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import StrategyDisplay from './components/StrategyDisplay';
import SplashScreen from './components/SplashScreen'; // Import the SplashScreen component
import './App.css'; // Include your CSS styles

const App = () => {
    const [strategy, setStrategy] = useState(''); // State for generated strategy
    const [showSplash, setShowSplash] = useState(true); // State for splash screen visibility

    // Effect to hide splash screen after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false); // Hide splash screen
        }, 3000);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    // Handle form submission for strategy generation
    const handleStrategySubmit = (input) => {
        const generatedStrategy = `
        **Business Goal:** ${input.businessGoal}
        **Target Audience:** ${input.targetAudience}
        **Budget:** ${input.budget}
        **Marketing Channels:** ${input.marketingChannels}

        **Actionable Strategy:**
        1. Utilize social media platforms to reach your audience.
        2. Create targeted ads focusing on your audience's pain points.
        3. Allocate your budget strategically to maximize outreach.
        4. Measure performance through analytics and adjust accordingly.
        `;

        setStrategy(generatedStrategy); // Update strategy state
    };

    return (
        <div id="root">
            {showSplash ? (
                <SplashScreen /> // Show splash screen if visible
            ) : (
                <>
                    <h1>StratGen: AI Business Strategy Generator</h1>
                    <InputForm onSubmit={handleStrategySubmit} /> {/* Input form for strategy */}
                    
                    {/* Display generated strategy */}
                    {strategy && (
                        <div id="generated-strategy">
                            <StrategyDisplay strategy={strategy} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default App;
