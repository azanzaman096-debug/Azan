import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { connect } from 'mongoose';

// import CalNDate from './date.js';

// console.log();
// CalNDate();
// console.log();


// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// console.log('clab-11');

// app.listen(2000,()=>{
//     console.log("server is running on port 2000");
// })


// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello from your new Express server using ES Modules!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });