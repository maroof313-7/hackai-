import React, { useState, useEffect } from 'react';

const InputForm = () => {
    const [businessGoal, setBusinessGoal] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    const [budget, setBudget] = useState('');
    const [marketingChannels, setMarketingChannels] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [generatedStrategy, setGeneratedStrategy] = useState(''); // State to hold generated strategy
    const [submittedData, setSubmittedData] = useState([]); // State to hold submitted data

    // Load existing data from local storage when the component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData')) || [];
        setSubmittedData(savedData);
    }, []);

    const generateStrategy = (data) => {
        // Simple strategy generation logic
        return `Strategy for ${data.businessGoal}: Target ${data.targetAudience} with a budget of $${data.budget} through ${data.marketingChannels}.`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        setLoading(true); // Set loading state

        // Basic validation for budget (assuming it's a number)
        if (isNaN(budget) || parseFloat(budget) <= 0) {
            setError('Please enter a valid budget.');
            setLoading(false);
            return;
        }

        // Create a new entry
        const newEntry = { businessGoal, targetAudience, budget, marketingChannels };

        // Save new entry to local storage
        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        existingData.push(newEntry);
        localStorage.setItem('formData', JSON.stringify(existingData));
        setSubmittedData(existingData); // Update state with new data

        // Generate strategy locally
        const strategy = generateStrategy(newEntry);
        setGeneratedStrategy(strategy);
        console.log(strategy); // Log the generated strategy to the terminal

        // Resetting input fields after successful submission
        setBusinessGoal('');
        setTargetAudience('');
        setBudget('');
        setMarketingChannels('');

        setLoading(false); // Reset loading state
    };

    return (
        <div className="input-form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Business Goal"
                    value={businessGoal}
                    onChange={(e) => setBusinessGoal(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Target Audience"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    required
                />
                <input
                    type="number" // Changed to number type
                    placeholder="Budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Marketing Channels"
                    value={marketingChannels}
                    onChange={(e) => setMarketingChannels(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Strategy'}
                </button>
                {error && <div className="error-message">{error}</div>}
            </form>
            
            {/* Displaying submitted data */}
            <div className="submitted-data">
                <h2>Submitted Strategies:</h2>
                {submittedData.length === 0 ? (
                    <p>No strategies submitted yet.</p>
                ) : (
                    submittedData.map((entry, index) => (
                        <div key={index} className="strategy-entry">
                            <h3>{entry.businessGoal}</h3>
                            <p>Target Audience: {entry.targetAudience}</p>
                            <p>Budget: {entry.budget}</p>
                            <p>Marketing Channels: {entry.marketingChannels}</p>
                        </div>
                    ))
                )}
            </div>

            {/* Display generated strategy */}
            {generatedStrategy && (
                <div className="generated-strategy">
                    <h2>Generated Strategy:</h2>
                    <p>{generatedStrategy}</p>
                </div>
            )}
        </div>
    );
};

export default InputForm;
