const axios = require('axios');
const fs = require('fs'); // Add fs (file system) module to read directory contents
require('dotenv').config();  // Loads the environment variables from your .env file

console.log('API Key:', process.env.OPENAI_AI_API_KEY);  // This should print the API key if loaded correctly

// Function to print the current directory contents
function printDirectoryContents() {
    console.log('Current directory contents:');
    fs.readdir('.', (err, files) => {
        if (err) {
            console.log('Error listing directory contents:', err);
            return;
        }
        files.forEach(file => {
            console.log(file);
        });
    });
}

async function fetchEssayPrompt() {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "Write an essay prompt for a high school student about the importance of environmental conservation."}
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`,  // Accesses the API key securely from your .env file
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error fetching essay prompt:', error);
    }
}

// Call the function to print the directory contents
printDirectoryContents();

// Fetch the essay prompt
fetchEssayPrompt();
