// Update with your config settings.
// knex migrate:latest
// knex seed:run
module.exports = {
	development: {
		client: 'pg',
		connection:
			'postgres://dstfvgwnycgjcq:458d490022dbeba1711e16c60e2b161aa107884f55ea2ccac6574ab2581b78b2@ec2-52-207-93-32.compute-1.amazonaws.com:5432/d17mhogo3p1rm9',
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
		connection:
			'postgres://dstfvgwnycgjcq:458d490022dbeba1711e16c60e2b161aa107884f55ea2ccac6574ab2581b78b2@ec2-52-207-93-32.compute-1.amazonaws.com:5432/d17mhogo3p1rm9',
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
