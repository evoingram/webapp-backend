/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	return knex("stylenames")
		.del()
		.then(() => {
			return knex("stylenames").insert([
				{ sid: 1, stylename: "Heading 1" },
				{ sid: 2, stylename: "Heading 2" },
				{ sid: 3, stylename: "Heading 3" },
				{ sid: 4, stylename: "AQC-CertBoA" },
				{ sid: 5, stylename: "AQC-Colloquy" },
				{ sid: 6, stylename: "AQC-Parenthesis" },
				{ sid: 7, stylename: "AQC-QA" },
				{ sid: 8, stylename: "AQC-TOC" },
				{ sid: 9, stylename: "AQC-Working" }
			]);
		});
};
