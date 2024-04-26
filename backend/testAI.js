const axios = require('axios');
require('dotenv').config();  // This line loads the environment variables from your .env file

async function fetchEssayPrompt() {
    try {
        const response = await axios.post('https://api.example-ai.com/v1/prompts', {
            prompt: "Write an essay prompt for a high school student about the importance of environmental conservation.",
            max_tokens: 100
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.AI_API_KEY}`  // Accesses the API key securely from your .env file
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error fetching essay prompt:', error);
    }
}

fetchEssayPrompt();

