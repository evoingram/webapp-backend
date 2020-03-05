const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const customersRouter = require('../customers/customersRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/customers', customersRouter);

server.get('/', (req, res) => {
	res.send('<h1>🚀</h1>');
});

module.exports = server;
