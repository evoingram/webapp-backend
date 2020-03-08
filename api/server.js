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
// knex migrate:latest
// knex seed:run
// knex seed:run --specific=00.js
// knex seed:run --specific=01.js
// knex seed:run --specific=02.js
// dates at 009, 012, 013, 017, 018, 019
/*
		knex seed:run --specific=001-customers.js;
		knex seed:run --specific=002-rates.js;knex seed:run --specific=003-brandingthemes.js;knex seed:run --specific=004-turnaroundtimes.js;knex seed:run --specific=005-mailclass.js;knex seed:run --specific=006-packagetype.js;knex seed:run --specific=007-cases.js;knex seed:run --specific=008-citationhyperlinks.js;knex seed:run --specific=009-invoices.js;knex seed:run --specific=010-examtypes.js;knex seed:run --specific=012-payments.js;knex seed:run --specific=013-courtdates.js;knex seed:run --specific=014-statuses.js;knex seed:run --specific=014a-agshortcuts.js;knex seed:run --specific=015-stylenames.js;knex seed:run --specific=016-appearances.js;knex seed:run --specific=017-tasks.js;knex seed:run --specific=018-expenses.js;knex seed:run --specific=019-communicationhistory.js;knex seed:run --specific=020-shippingoptions.js;knex seed:run --specific=021-courtdatesinvoices.js;knex seed:run --specific=022-courtdatescasescustomers.js;knex seed:run --specific=024-usc.js;


		knex seed:run --specific=014a-agshortcuts.js;knex seed:run --specific=016-appearances.js;knex seed:run --specific=019-communicationhistory.js;knex seed:run --specific=020-shippingoptions.js;
	*/
/*
		knex seed:run --specific=001-customers.js;
		knex seed:run --specific=002-rates.js
		knex seed:run --specific=003-brandingthemes.js
		knex seed:run --specific=004-turnaroundtimes.js
		knex seed:run --specific=005-mailclass.js
		knex seed:run --specific=006-packagetype.js
		knex seed:run --specific=007-cases.js
		knex seed:run --specific=008-citationhyperlinks.js
		knex seed:run --specific=009-invoices.js
		knex seed:run --specific=010-examtypes.js
		knex seed:run --specific=012-payments.js
		knex seed:run --specific=013-courtdates.js
		knex seed:run --specific=014-statuses.js
		knex seed:run --specific=014a-agshortcuts.js
		knex seed:run --specific=015-stylenames.js
		knex seed:run --specific=016-appearances.js
		knex seed:run --specific=017-tasks.js
		knex seed:run --specific=018-expenses.js
		knex seed:run --specific=019-communicationhistory.js
		knex seed:run --specific=020-shippingoptions.js
		knex seed:run --specific=021-courtdatesinvoices.js
		knex seed:run --specific=022-courtdatescasescustomers.js
		knex seed:run --specific=024-usc.js

	*/
