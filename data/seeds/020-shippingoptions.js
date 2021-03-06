/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	return knex("shippingoptions")
		.del()
		.then(() => {
			return knex("shippingoptions").insert([
				{
					soid: 1,
					courtdatesid: 1,
					mcid: 2,
					ptid: 1,
					customersid: 1,
					amount: 7.5,
					shippingcost: 7.5,
					width: 12,
					length: 14,
					height: 1,
					prioritymailexpress1030: false,
					holidaydelivery: false,
					sundaydelivery: false,
					saturdaydelivery: false,
					signaturerequired: false,
					stealth: false,
					replypostage: false,
					insuredmail: false,
					cod: false,
					restricteddelivery: false,
					adultsigrestricted: false,
					adultsigrequired: false,
					returnreceipt: false,
					certifiedmail: false,
					sigconfirmation: false,
					uspstracking: false,
					reference: 1,
					value: 100,
					description: "transcripts",
					weightoz: 10,
					output: "/output/path/xml/output"
				},
				{
					soid: 2,
					courtdatesid: 2,
					mcid: 2,
					ptid: 1,
					customersid: 2,
					amount: 7.5,
					shippingcost: 7.5,
					width: 12,
					length: 14,
					height: 1,
					prioritymailexpress1030: false,
					holidaydelivery: false,
					sundaydelivery: false,
					saturdaydelivery: false,
					signaturerequired: false,
					stealth: false,
					replypostage: false,
					insuredmail: false,
					cod: false,
					restricteddelivery: false,
					adultsigrestricted: false,
					adultsigrequired: false,
					returnreceipt: false,
					certifiedmail: false,
					sigconfirmation: false,
					uspstracking: false,
					reference: 2,
					value: 100,
					description: "transcripts",
					weightoz: 10,
					output: "/output/path/xml/output"
				},
				{
					soid: 3,
					courtdatesid: 3,
					mcid: 2,
					ptid: 1,
					customersid: 3,
					amount: 7.5,
					shippingcost: 7.5,
					width: 12,
					length: 14,
					height: 1,
					prioritymailexpress1030: false,
					holidaydelivery: false,
					sundaydelivery: false,
					saturdaydelivery: false,
					signaturerequired: false,
					stealth: false,
					replypostage: false,
					insuredmail: false,
					cod: false,
					restricteddelivery: false,
					adultsigrestricted: false,
					adultsigrequired: false,
					returnreceipt: false,
					certifiedmail: false,
					sigconfirmation: false,
					uspstracking: false,
					reference: 3,
					value: 100,
					description: "transcripts",
					weightoz: 10,
					output: "/output/path/xml/output"
				},
				{
					soid: 4,
					courtdatesid: 4,
					mcid: 2,
					ptid: 1,
					customersid: 4,
					amount: 7.5,
					shippingcost: 7.5,
					width: 12,
					length: 14,
					height: 1,
					prioritymailexpress1030: false,
					holidaydelivery: false,
					sundaydelivery: false,
					saturdaydelivery: false,
					signaturerequired: false,
					stealth: false,
					replypostage: false,
					insuredmail: false,
					cod: false,
					restricteddelivery: false,
					adultsigrestricted: false,
					adultsigrequired: false,
					returnreceipt: false,
					certifiedmail: false,
					sigconfirmation: false,
					uspstracking: false,
					reference: 4,
					value: 100,
					description: "transcripts",
					weightoz: 10,
					output: "/output/path/xml/output"
				},
				{
					soid: 5,
					courtdatesid: 5,
					mcid: 2,
					ptid: 1,
					customersid: 5,
					amount: 7.5,
					shippingcost: 7.5,
					width: 12,
					length: 14,
					height: 1,
					prioritymailexpress1030: false,
					holidaydelivery: false,
					sundaydelivery: false,
					saturdaydelivery: false,
					signaturerequired: false,
					stealth: false,
					replypostage: false,
					insuredmail: false,
					cod: false,
					restricteddelivery: false,
					adultsigrestricted: false,
					adultsigrequired: false,
					returnreceipt: false,
					certifiedmail: false,
					sigconfirmation: false,
					uspstracking: false,
					reference: 5,
					value: 100,
					description: "transcripts",
					weightoz: 10,
					output: "/output/path/xml/output"
				}
			]);
		});
};
