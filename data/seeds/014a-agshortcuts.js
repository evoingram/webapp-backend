/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	return knex("agshortcuts")
		.del()
		.then(() => {
			return knex("agshortcuts").insert([
				{
					agsid: 1,
					courtdatesid: 1,
					ag1: "Test 1a",
					ag2: "Test 1b",
					ag3: "",
					ag4: "",
					ag5: "",
					ag6: "",
					ag11: "",
					ag12: "",
					ag13: "",
					ag14: "",
					ag15: "",
					ag16: "",
					ag21: "",
					ag22: "",
					ag23: "",
					ag24: "",
					ag25: "",
					ag26: "",
					ag31: "",
					ag32: "",
					ag33: "",
					ag34: "",
					ag35: "",
					ag36: "",
					ag41: "",
					ag42: "",
					ag43: "",
					ag44: "",
					ag45: "",
					ag46: "",
					ag51: "",
					ag52: "",
					ag53: "",
					ag54: "",
					ag55: "",
					ag56: "",
					ag61: "",
					ag62: "",
					ag63: "",
					ag64: "",
					ag65: "",
					ag66: ""
				},
				{
					agsid: 2,
					courtdatesid: 2,
					ag1: "Test 2a",
					ag2: "Test 2b",
					ag3: "",
					ag4: "",
					ag5: "",
					ag6: "",
					ag11: "",
					ag12: "",
					ag13: "",
					ag14: "",
					ag15: "",
					ag16: "",
					ag21: "",
					ag22: "",
					ag23: "",
					ag24: "",
					ag25: "",
					ag26: "",
					ag31: "",
					ag32: "",
					ag33: "",
					ag34: "",
					ag35: "",
					ag36: "",
					ag41: "",
					ag42: "",
					ag43: "",
					ag44: "",
					ag45: "",
					ag46: "",
					ag51: "",
					ag52: "",
					ag53: "",
					ag54: "",
					ag55: "",
					ag56: "",
					ag61: "",
					ag62: "",
					ag63: "",
					ag64: "",
					ag65: "",
					ag66: ""
				},
				{
					agsid: 3,
					courtdatesid: 3,
					ag1: "Test 3a",
					ag2: "Test 3b",
					ag3: "",
					ag4: "",
					ag5: "",
					ag6: "",
					ag11: "",
					ag12: "",
					ag13: "",
					ag14: "",
					ag15: "",
					ag16: "",
					ag21: "",
					ag22: "",
					ag23: "",
					ag24: "",
					ag25: "",
					ag26: "",
					ag31: "",
					ag32: "",
					ag33: "",
					ag34: "",
					ag35: "",
					ag36: "",
					ag41: "",
					ag42: "",
					ag43: "",
					ag44: "",
					ag45: "",
					ag46: "",
					ag51: "",
					ag52: "",
					ag53: "",
					ag54: "",
					ag55: "",
					ag56: "",
					ag61: "",
					ag62: "",
					ag63: "",
					ag64: "",
					ag65: "",
					ag66: ""
				},
				{
					agsid: 4,
					courtdatesid: 4,
					ag1: "Mr. Belvedere",
					ag2: "Mr. Duck",
					ag3: "",
					ag4: "",
					ag5: "",
					ag6: "",
					ag11: "",
					ag12: "",
					ag13: "",
					ag14: "",
					ag15: "",
					ag16: "",
					ag21: "",
					ag22: "",
					ag23: "",
					ag24: "",
					ag25: "",
					ag26: "",
					ag31: "",
					ag32: "",
					ag33: "",
					ag34: "",
					ag35: "",
					ag36: "",
					ag41: "",
					ag42: "",
					ag43: "",
					ag44: "",
					ag45: "",
					ag46: "",
					ag51: "",
					ag52: "",
					ag53: "",
					ag54: "",
					ag55: "",
					ag56: "",
					ag61: "",
					ag62: "",
					ag63: "",
					ag64: "",
					ag65: "",
					ag66: ""
				},
				{
					agsid: 5,
					courtdatesid: 5,
					ag1: "Mr. Smith",
					ag2: "Ms. Doe",
					ag3: "",
					ag4: "",
					ag5: "",
					ag6: "",
					ag11: "",
					ag12: "",
					ag13: "",
					ag14: "",
					ag15: "",
					ag16: "",
					ag21: "",
					ag22: "",
					ag23: "",
					ag24: "",
					ag25: "",
					ag26: "",
					ag31: "",
					ag32: "",
					ag33: "",
					ag34: "",
					ag35: "",
					ag36: "",
					ag41: "",
					ag42: "",
					ag43: "",
					ag44: "",
					ag45: "",
					ag46: "",
					ag51: "",
					ag52: "",
					ag53: "",
					ag54: "",
					ag55: "",
					ag56: "",
					ag61: "",
					ag62: "",
					ag63: "",
					ag64: "",
					ag65: "",
					ag66: ""
				}
			]);
		});
};
