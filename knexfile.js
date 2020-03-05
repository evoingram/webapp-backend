// Update with your config settings.
// knex migrate:latest
// knex seed:run
module.exports = {
	development: {
		client: 'pg',
		connection:
			'postgres://ivmyiwxdtjjlwk:446612eda53260d8cc3c60c4338fbe08119e68ea5acbecad37887a573965edd5@ec2-35-172-85-250.compute-1.amazonaws.com:5432/dfg35rja7jh41o',
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
			'postgres://ivmyiwxdtjjlwk:446612eda53260d8cc3c60c4338fbe08119e68ea5acbecad37887a573965edd5@ec2-35-172-85-250.compute-1.amazonaws.com:5432/dfg35rja7jh41o',
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
