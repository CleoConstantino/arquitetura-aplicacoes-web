const express = require('express');
const cors = require('cors');
const mongo = require('./mongo');

const server = express();  
server.use(cors());

server.get('/', (_, res) => {
	mongo
	.collection()
	.findOne({ greeting: 'Hello Mongo' })
	.then((doc) => res.json(`${doc.greeting} + Express!`));
});
    
server.listen(3001, () => {
	console.log('Server running on port 3001');
	mongo.connect();
});