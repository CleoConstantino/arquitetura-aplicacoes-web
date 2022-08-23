const express = require('express');
const cors = require('cors');
const server = express();
    
server.use(cors());
server.get('/', (_, res) => {
	res.json('Hello Express!');
});
    
server.listen(3001);