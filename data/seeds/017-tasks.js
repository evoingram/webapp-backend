exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('tasks').insert([
				{
					tid: 1,
					courtdatesid: 1,
					title: 'test title 1',
					priority: 'Priority 1',
					status: 'Not Started',
					description: ' Case Info Here Maybe',
					startdate: Date.UTC({ year: 2020, month: 05, date: 29 }),
					duedate: Date.UTC({ year: 2020, month: 06, date: 29 }),
					prioritypoints: 60,
					category: 'production',
					timelength: 2,
					completed: false
				},
				{
					tid: 2,
					courtdatesid: 2,
					title: 'test title 2',
					priority: 'Priority 1',
					status: 'Not Started',
					description: ' Case Info Here Maybe',
					startdate: Date.UTC({ year: 2020, month: 06, date: 29 }),
					duedate: Date.UTC({ year: 2020, month: 07, date: 29 }),
					prioritypoints: 60,
					category: 'production',
					timelength: 2,
					completed: false
				},
				{
					tid: 3,
					courtdatesid: 3,
					title: 'test title 3',
					priority: 'Priority 1',
					status: 'Not Started',
					description: ' Case Info Here Maybe',
					startdate: Date.UTC({ year: 2020, month: 07, date: 29 }),
					duedate: Date.UTC({ year: 2020, month: 08, date: 29 }),
					prioritypoints: 60,
					category: 'production',
					timelength: 2,
					completed: false
				},
				{
					tid: 4,
					courtdatesid: 4,
					title: 'test title 4',
					priority: 'Priority 1',
					status: 'Not Started',
					description: ' Case Info Here Maybe',
					startdate: Date.UTC({ year: 2020, month: 08, date: 29 }),
					duedate: Date.UTC({ year: 2020, month: 09, date: 29 }),
					prioritypoints: 60,
					category: 'production',
					timelength: 2,
					completed: false
				},
				{
					tid: 5,
					courtdatesid: 5,
					title: 'test title 5',
					priority: 'Priority 1',
					status: 'Not Started',
					description: ' Case Info Here Maybe',
					startdate: Date.UTC({ year: 2020, month: 09, date: 29 }),
					duedate: Date.UTC({ year: 2020, month: 10, date: 29 }),
					prioritypoints: 60,
					category: 'production',
					timelength: 2,
					completed: false
				}
			]);
		});
};
