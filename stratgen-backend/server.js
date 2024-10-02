const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 5000; // You can choose any available port

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to generate business strategy
app.post('/generate-strategy', (req, res) => {
    const { businessGoal, targetAudience, budget, marketingChannels } = req.body;

    // Prepare the command to execute the Python script
    const command = `python generate_strategy.py`;

    // Execute the Python script
    exec(command, { cwd: __dirname }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error.message}`);
            return res.status(500).json({ error: 'Failed to generate strategy' });
        }
        // Return the generated strategy
        res.json({ strategy: stdout });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
