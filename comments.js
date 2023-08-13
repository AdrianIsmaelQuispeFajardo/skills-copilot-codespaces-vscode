// Create web server
// Create a GET route for /comments
// Send the following array as JSON from the route: 
// [{title: 'First Comment'}, {title: 'Second Comment'}]
// Test your route with httpie or Postman
// Submit the URL of your route and a screenshot of your output

const express = require('express');
const app = express();

const comments = [
    {title: 'First Comment'}, 
    {title: 'Second Comment'}
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(3000, () => console.log('Listening on port 3000...'));