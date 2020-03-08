const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const customersRouter = require('../customers/customersRouter');
const loginRouter = require('../auth/loginRouter.js');
const registerRouter = require('../auth/registerRouter.js');
const courtdatesRouter = require('../production/stage1Router.js');
const casesRouter = require('../production/casesRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);
server.use('/api/customers', customersRouter);
server.use('/api/courtdates', courtdatesRouter);
server.use('/api/cases', casesRouter);

server.get('/', (req, res) => {
	res.send('<h1>🚀</h1>');
});

module.exports = server;
