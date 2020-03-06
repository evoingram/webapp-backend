// Update with your config settings.
// knex migrate:latest
// knex seed:run
module.exports = {
	development: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
		pool: {
			min: 2,
			max: 10
		}
	},
	production: {
		client: 'pg', // postgresql
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
};
