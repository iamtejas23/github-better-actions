const express = require('express');
const app = express();

// Middleware and routes
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my Node.js app.');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Export the app for testing purposes
module.exports = app;

// Only start the server if this script is run directly
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
