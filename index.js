const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({"msg": "Hello from user"})
})

app.listen(8001, () => {
    console.log('Shopping is Listening to Port 8003')
})

// "scripts": {
//     "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
// },