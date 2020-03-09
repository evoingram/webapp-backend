// see below for notes on migrations, seeds, & commands you can run in heroku console

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

// standard auth routers
const customersRouter = require('../customers/customersRouter');
const loginRouter = require('../auth/loginRouter.js');
const registerRouter = require('../auth/registerRouter.js');

// courtdates table router
// fields: courtdatesid ratesid ttid btid iid hearingdate hearingstarttime hearingendtime audiolength location shipdate duedate trackingno paymenttype filed factoringcost estimatedquantity actualquantity subtotal estimatedadvancerate estimatedrebatedate finalprice ppid ppstatus hearingtitle judgename judgetitle
const courtdatesRouter = require('../production/courtdatesRouter.js');

// cases table router
// fields: casesid party1 party1name party2 party2name casenumber1 casenumber2 		jurisdiction notes
const casesRouter = require('../production/casesRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

// standard auth routers
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);
server.use('/api/customers', customersRouter);

// courtdates table router
// fields: courtdatesid ratesid ttid btid iid hearingdate hearingstarttime hearingendtime audiolength location shipdate duedate trackingno paymenttype filed factoringcost estimatedquantity actualquantity subtotal estimatedadvancerate estimatedrebatedate finalprice ppid ppstatus hearingtitle judgename judgetitle
server.use('/api/courtdates', courtdatesRouter);

// cases table router
// fields: casesid party1 party1name party2 party2name casenumber1 casenumber2
server.use('/api/cases', casesRouter);

// unsecured/unlogged-in response
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
