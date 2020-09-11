/* eslint-disable linebreak-style */
// currently stored only in heroku config var
// see below for notes on migrations, seeds, & commands you can run in heroku console
module.exports = {
	development: {
		client: "pg",
		connection: process.env.DATABASE_URL2,
		migrations: {
			directory: "./data/migrations"
		},
		seeds: {
			directory: "./data/seeds"
		},
		pool: {
			min: 2,
			max: 10
		}
	},
	production: {
		client: "pg",
		connection: process.env.DATABASE_URL2,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "./data/migrations"
		},
		seeds: {
			directory: "./data/seeds"
		}
	}
};
// Notes about Seeds & Migrations

// knex migrate:latest
// knex seed:run --specific=00.js
// knex seed:run --specific=01.js
// knex seed:run --specific=02.js
// dates at 009, 012, 013, 017, 018, 019
/*
		knex seed:run --specific=001a-usertypes.js;knex seed:run --specific=001-customers.js;knex seed:run --specific=002-rates.js;knex seed:run --specific=003-brandingthemes.js;knex seed:run --specific=004-turnaroundtimes.js;knex seed:run --specific=005-mailclass.js;knex seed:run --specific=006-packagetype.js;knex seed:run --specific=007-cases.js;knex seed:run --specific=008-citationhyperlinks.js;knex seed:run --specific=009-invoices.js;knex seed:run --specific=010-examtypes.js;knex seed:run --specific=012-payments.js;knex seed:run --specific=013-courtdates.js;knex seed:run --specific=014-statuses.js;knex seed:run --specific=014a-agshortcuts.js;knex seed:run --specific=015-stylenames.js;knex seed:run --specific=016-appearances.js;knex seed:run --specific=017-tasks.js;knex seed:run --specific=018-expenses.js;knex seed:run --specific=019-communicationhistory.js;knex seed:run --specific=020-shippingoptions.js;knex seed:run --specific=021-courtdatesinvoices.js;knex seed:run --specific=022-courtdatescasescustomers.js;knex seed:run --specific=024-usc.js;knex seed:run --specific=025-citations.js;

	*/
/*
		knex seed:run --specific=001a-usertypes.js;
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
