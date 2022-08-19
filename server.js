const express = require('express');
    const server = express();
    
    server.get('/', (_, res) => {
	    res.send('Hello Express!');
    });
    
    server.listen(3001);