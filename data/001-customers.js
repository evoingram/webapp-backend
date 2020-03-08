exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('customers')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('customers').insert([
				{
					id: 1,
					username: 'admin',
					password: 'password',
					email: 'inquiries@aquoco.co',
					company: 'A Quo Co.',
					mrms: 'Ms',
					lastname: 'Ingram',
					firstname: 'Erica',
					jobtitle: 'owner operator',
					businessphone: '(206) 478-5028',
					address1: '320 West Republican, Apt 207',
					address2: '',
					city: 'Seattle',
					state: 'WA',
					zip: '98119',
					notes: 'n/a',
					factoring: true
				},
				{
					id: 2,
					username: 'evoingram',
					password: 'password',
					email: 'evoingram@aquoco.onmicrosoft.com',
					company: 'A Quo Co.',
					mrms: 'Ms',
					lastname: 'Ingram',
					firstname: 'Erica',
					jobtitle: 'transcriber',
					businessphone: '(206) 478-5028',
					address1: '320 West Republican, Suite 207',
					address2: '',
					city: 'Seattle',
					state: 'WA',
					zip: '98119',
					notes: 'n/a',
					factoring: true
				},
				{
					id: 3,
					username: 'customer',
					password: 'password',
					email: 'customer@aquoco.onmicrosoft.com',
					company: 'Customer Co.',
					mrms: 'Ms',
					lastname: 'Van Ostrand',
					firstname: 'Erica',
					jobtitle: 'attorney',
					businessphone: '(206) 478-5028',
					address1: '320 West Republican, #207',
					address2: '',
					city: 'Seattle',
					state: 'WA',
					zip: '98119',
					notes: 'n/a',
					factoring: false
				},
				{
					id: 4,
					username: 'evoingram2',
					password: 'password',
					email: 'evoingram2@aquoco.onmicrosoft.com',
					company: 'A Quo Co.',
					mrms: 'Ms',
					lastname: 'Ingram2',
					firstname: 'Erica2',
					jobtitle: 'transcriber',
					businessphone: '(206) 478-5028',
					address1: '320 West Republican, Suite 207',
					address2: '',
					city: 'Seattle',
					state: 'WA',
					zip: '98119',
					notes: 'n/a',
					factoring: true
				},
				{
					id: 5,
					username: 'customer3',
					password: 'password',
					email: 'customer3@aquoco.onmicrosoft.com',
					company: 'Customer Co.',
					mrms: 'Ms',
					lastname: 'Van Ostrand2',
					firstname: 'Erica2',
					jobtitle: 'attorney',
					businessphone: '(206) 478-5028',
					address1: '320 West Republican, #207',
					address2: '',
					city: 'Seattle',
					state: 'WA',
					zip: '98119',
					notes: 'n/a',
					factoring: false
				}
			]);
		});
};
