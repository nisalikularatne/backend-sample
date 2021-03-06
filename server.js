const express = require("express");
const server = express();

const morgan = require("morgan");
const cors = require("cors");
const apiV1Routes = require('./routes/api/v1');
server.use(cors());
server.use(morgan("dev"));

server.use(express.json({limit: '50mb'}));
// server.use(userInfoMiddleware.authentication);
//Routes
server.use('/api/v1', apiV1Routes);
server.get("/", (req, res) => {
    res.status(200).json({ hello: "World!" });
});

module.exports = server;
