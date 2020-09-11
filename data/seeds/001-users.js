/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(() => {
			return knex("users").insert([
				{
					userid: 1,
					username: "admin",
					password: "eyJwYXNzd29yZCI6InBhc3N3b3JkIn0",
					primaryemail: "inquiries@aquoco.co",
					company: "A Quo Co.",
					mrms: "Ms",
					lastname: "Ingram",
					firstname: "Erica",
					jobtitle: "owner operator",
					businessphone: "(206) 478-5028",
					address1: "320 West Republican, Apt 207",
					address2: "",
					city: "Seattle",
					state: "WA",
					postalcode: "98119",
					notes: "n/a",
					factoring: true
				},
				{
					userid: 2,
					username: "evoingram4",
					password: "eyJwYXNzd29yZCI6InBhc3N3b3JkIn0",
					primaryemail: "evoingram4@aquoco.onmicrosoft.com",
					company: "A Quo Co.",
					mrms: "Ms",
					lastname: "Ingram",
					firstname: "Erica",
					jobtitle: "transcriber",
					businessphone: "(206) 478-5028",
					address1: "320 West Republican, Suite 207",
					address2: "",
					city: "Seattle",
					state: "WA",
					postalcode: "98119",
					notes: "n/a",
					factoring: true
				},
				{
					userid: 3,
					username: "customer",
					password: "eyJwYXNzd29yZCI6InBhc3N3b3JkIn0",
					primaryemail: "customer@aquoco.onmicrosoft.com",
					company: "Customer Co.",
					mrms: "Ms",
					lastname: "Van Ostrand",
					firstname: "Erica",
					jobtitle: "attorney",
					businessphone: "(206) 478-5028",
					address1: "320 West Republican, #207",
					address2: "",
					city: "Seattle",
					state: "WA",
					postalcode: "98119",
					notes: "n/a",
					factoring: false
				},
				{
					userid: 4,
					username: "evoingram2",
					password: "eyJwYXNzd29yZCI6InBhc3N3b3JkIn0",
					primaryemail: "evoingram2@aquoco.onmicrosoft.com",
					company: "A Quo Co.",
					mrms: "Ms",
					lastname: "Ingram2",
					firstname: "Erica2",
					jobtitle: "transcriber",
					businessphone: "(206) 478-5028",
					address1: "320 West Republican, Suite 207",
					address2: "",
					city: "Seattle",
					state: "WA",
					postalcode: "98119",
					notes: "n/a",
					factoring: true
				},
				{
					userid: 5,
					username: "customer3",
					password: "eyJwYXNzd29yZCI6InBhc3N3b3JkIn0",
					primaryemail: "customer3@aquoco.onmicrosoft.com",
					company: "Customer Co.",
					mrms: "Ms",
					lastname: "Van Ostrand2",
					firstname: "Erica2",
					jobtitle: "attorney",
					businessphone: "(206) 478-5028",
					address1: "320 West Republican, #207",
					address2: "",
					city: "Seattle",
					state: "WA",
					postalcode: "98119",
					notes: "n/a",
					factoring: false
				}
			]);
		});
};
