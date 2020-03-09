const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db('cases').select('*');
}

function findBy(filter) {
	return db('cases').where(filter);
}

async function add(onecase) {
	const [casesid] = await db('cases').insert(onecase, 'casesid');
	return findById(casesid);
}

function findById(casesid) {
	return db('cases')
		.select('*')
		.where({ casesid })
		.first();
}

function update(casesid, onecase) {
	return db('cases')
		.where('casesid', Number(casesid))
		.update(onecase);
}

function remove(casesid) {
	return db('cases')
		.where('casesid', Number(casesid))
		.del();
}

/*

SELECT [Cases].[ID], [Cases].[Party1], [Cases].[Party2], [Cases].[CaseNumber1], [Cases].[Jurisdiction]
FROM Cases
ORDER BY [ID];


*/

/*

SELECT [Cases].[ID]
FROM Cases;


*/

/*

SELECT PaymentQueryInvoiceInfo.FinalPrice, PaymentQueryInvoiceInfo.PaymentsID, PaymentQueryInvoiceInfo.pInvoiceNo, PaymentQueryInvoiceInfo.Amount, PaymentQueryInvoiceInfo.RemitDate, PaymentQueryInvoiceInfo.CourtDatesID, PaymentQueryInvoiceInfo.HearingDate, PaymentQueryInvoiceInfo.HearingStartTime, PaymentQueryInvoiceInfo.HearingEndTime, PaymentQueryInvoiceInfo.CasesID, PaymentQueryInvoiceInfo.OrderingID, PaymentQueryInvoiceInfo.AudioLength, PaymentQueryInvoiceInfo.TurnaroundTimesCD, PaymentQueryInvoiceInfo.DueDate, PaymentQueryInvoiceInfo.cInvoiceNo, PaymentQueryInvoiceInfo.InvoiceDate, PaymentQueryInvoiceInfo.PaymentDueDate, PaymentQueryInvoiceInfo.Subtotal, PaymentQueryInvoiceInfo.UnitPrice, Cases.ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1
FROM Cases INNER JOIN PaymentQueryInvoiceInfo ON Cases.[ID] = PaymentQueryInvoiceInfo.[CasesID];


*/

/*


SELECT Cases.[Party1], Cases.[Party2], Cases.[CaseNumber1], Cases.[CaseNumber2]
FROM Cases
WHERE (((Cases.[Party1]) In (SELECT [Party1] FROM [Cases] As Tmp GROUP BY [Party1],[Party2] HAVING Count(*)>1  And [Party2] = [Cases].[Party2])))
ORDER BY Cases.[Party1], Cases.[Party2];

*/

/*


SELECT *
FROM Cases INNER JOIN GetInvoiceNoFromCDID ON Cases.ID=GetInvoiceNoFromCDID.OAICasesID;

*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/
