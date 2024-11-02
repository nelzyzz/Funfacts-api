const express = require('express');
const axios = require('axios'); // Import axios
const app = express();
const port = 3000;

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Fun Facts API! Use /api/funfact to get a random fun fact.');
});

// API endpoint to get a random fun fact
app.get('/api/funfact', async (req, res) => {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/random.json');
        const randomFact = response.data.text; // Extract the fact from the response
        res.json({ fact: randomFact });
    } catch (error) {
        console.error('Error fetching fun fact:', error);
        res.status(500).json({ error: 'Failed to fetch fun fact' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Fun Facts API is running at http://localhost:${port}`);
});