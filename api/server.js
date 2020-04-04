// see below for notes on migrations, seeds, & commands you can run in heroku console

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

// standard auth routers
const customersRouter = require('../customers/customersRouter');
const loginRouter = require('../auth/loginRouter.js');
const registerRouter = require('../auth/registerRouter.js');
const AppearancesRouter = require('../production/info/appearancesRouter.js');
const TasksRouter = require('../production/mgmt/tasksRouter.js');
const CitationsRouter = require('../production/authorities/citationsRouter.js');
const ShippingRouter = require('../production/shipping/shippingRouter.js');
const ExpensesRouter = require('../financials/expensesRouter.js');
const PaymentsRouter = require('../financials/paymentsRouter.js');
const CommHistoryRouter = require('../production/info/commHRouter.js');
const BTRouter = require('../financials/btRouter.js');
const InvoicesRouter = require('../financials/invoicesRouter.js');
const RatesRouter = require('../financials/ratesRouter.js');
const USCRouter = require('../production/authorities/uscRouter.js');
const AGSRouter = require('../production/formatting/agshortcutsRouter.js');
const ETRouter = require('../production/formatting/examtypesRouter.js');
const StyleRouter = require('../production/formatting/styleRouter.js');
const TTRouter = require('../production/formatting/ttRouter.js');
const CCCRouter = require('../production/info/cccRouter.js');
const StatusesRouter = require('../production/mgmt/statusesRouter.js');
const MCRouter = require('../production/shipping/mailclassRouter.js');
const PTRouter = require('../production/shipping/packagetypeRouter.js');

// courtdates table router
// fields: courtdatesid ratesid ttid btid iid hearingdate hearingstarttime hearingendtime audiolength location shipdate duedate trackingno paymenttype filed factoringcost estimatedquantity actualquantity subtotal estimatedadvancerate estimatedrebatedate finalprice ppid ppstatus hearingtitle judgename judgetitle
const courtdatesRouter = require('../production/info/courtdatesRouter.js');

// cases table router
// fields: casesid party1 party1name party2 party2name casenumber1 casenumber2 		jurisdiction notes
const casesRouter = require('../production/info/casesRouter.js');

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

//
server.use('/api/appearances', AppearancesRouter);
server.use('/api/tasks', TasksRouter);
server.use('/api/citations', CitationsRouter);
server.use('/api/shipping', ShippingRouter);
server.use('/api/expenses', ExpensesRouter);
server.use('/api/payments', PaymentsRouter);
server.use('/api/commhistory', CommHistoryRouter);

server.use('/api/brandingthemes', BTRouter);
server.use('/api/invoices', InvoicesRouter);
server.use('/api/rates', RatesRouter);

server.use('/api/usc', USCRouter);

server.use('/api/agshortcuts', AGSRouter);
server.use('/api/examtypes', ETRouter);
server.use('/api/styles', StyleRouter);
server.use('/api/turnaroundtimes', TTRouter);

server.use('/api/ccc', CCCRouter);

server.use('/api/statuses', StatusesRouter);

server.use('/api/mailclasses', MCRouter);
server.use('/api/packagetypes', PTRouter);

// unsecured/unlogged-in response
server.get('/', (req, res) => {
	res.send('<h1>🚀</h1>');
});

module.exports = server;
// knex migrate:025-citations.js
// knex migrate:up 025-citations.js
// knex seed:run --specific=025-citations.js
// knex migrate:latest
// knex seed:run
// knex seed:run --specific=000-name.js
// had to run these in a specific order last time; just making their names alphabetically ordered wasn't enough to make it go in the order i wanted.  So here is the text that will allow you to run all of them in a specific order so that you don't get errors by just doing a seed:run.

/*
		knex seed:run --specific=001-customers.js;knex seed:run --specific=002-rates.js;knex seed:run --specific=003-brandingthemes.js;knex seed:run --specific=004-turnaroundtimes.js;knex seed:run --specific=005-mailclass.js;knex seed:run --specific=006-packagetype.js;knex seed:run --specific=007-cases.js;knex seed:run --specific=008-citationhyperlinks.js;knex seed:run --specific=009-invoices.js;knex seed:run --specific=010-examtypes.js;knex seed:run --specific=012-payments.js;knex seed:run --specific=013-courtdates.js;knex seed:run --specific=014-statuses.js;knex seed:run --specific=014a-agshortcuts.js;knex seed:run --specific=015-stylenames.js;knex seed:run --specific=016-appearances.js;knex seed:run --specific=017-tasks.js;knex seed:run --specific=018-expenses.js;knex seed:run --specific=019-communicationhistory.js;knex seed:run --specific=020-shippingoptions.js;knex seed:run --specific=021-courtdatesinvoices.js;knex seed:run --specific=022-courtdatescasescustomers.js;knex seed:run --specific=024-usc.js;

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
