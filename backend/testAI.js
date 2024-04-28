const axios = require('axios');
require('dotenv').config();  // This line loads the environment variables from your .env file

async function fetchEssayPrompt() {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: "text-davinci-002", // Specify the model you are using, e.g., text-davinci-002
            prompt: "Write an essay prompt for a high school student about the importance of environmental conservation.",
            max_tokens: 100
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.AI_API_KEY}`, // Accesses the API key securely from your .env file
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error fetching essay prompt:', error);
    }
}

fetchEssayPrompt();
