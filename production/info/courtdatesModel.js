const db = require('../../data/dbConfig');
const { union } = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove,
	findByIdMain,
	findPaymentsById,
	findExpensesById,
	getShippingById,
	findCommHistoryById,
	findTasksById,
	findCitationsById,
	findInvoicesById,
	findUSCsById,
	findMCsById,
	findPTsById,
	findBTsById,
	findRatesById,
	findStatusesById,
	findAGSById,
	findETsById,
	findStylesById,
	findCCCsById,
	findCHsById,
	findAppsById,
	findContractorsById
};

function find() {
	return db('courtdates').select('*');
}

function findBy(filter) {
	return db('courtdates').where(filter);
}

async function add(courtdate) {
	const [courtdatesid] = await db('courtdates').insert(courtdate, 'courtdatesid');
	return findById(courtdatesid);
}

function findById(courtdatesid) {
	return db('courtdates').select('courtdatesid', '*').where({ courtdatesid }).first();
}

function update(courtdatesid, courtdate) {
	return db('courtdates').where({ courtdatesid }).update(courtdate);
}

function remove(courtdatesid) {
	return db('courtdates').where('courtdatesid', Number(courtdatesid)).del();
}

function findExpensesById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'expenses.eid',
			'expenses.vendor',
			'expenses.date',
			'expenses.amount AS eamount',
			'expenses.description',
			'expenses.courtdatesid'
		)
		.innerJoin('expenses', 'expenses.courtdatesid', 'courtdates.courtdatesid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findPaymentsById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'courtdates.iid',
			'payments.pid',
			'payments.amount AS pamount',
			'payments.remitdate',
			'payments.iid'
		)
		.innerJoin('payments', 'payments.iid', 'courtdates.iid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function getShippingById(courtdatesid) {
	return db('courtdates')
		.select(
			'customers.customersid', 'customers.factoring', 'customers.company', 'customers.mrms', 'customers.lastname', 'customers.firstname', 'customers.email', 'customers.jobtitle', 'customers.businessphone', 'customers.address1', 'customers.address2', 'customers.city', 'customers.state', 'customers.zip', 'customers.notes',
			'shippingoptions.soid', 'shippingoptions.mcid', 'shippingoptions.ptid', 'shippingoptions.customersid', 'shippingoptions.amount', 'shippingoptions.shippingcost', 'shippingoptions.width', 'shippingoptions.length', 'shippingoptions.height', 'shippingoptions.prioritymailexpress1030', 'shippingoptions.holidaydelivery', 'shippingoptions.sundaydelivery', 'shippingoptions.saturdaydelivery', 'shippingoptions.signaturerequired', 'shippingoptions.stealth', 'shippingoptions.replypostage', 'shippingoptions.insuredmail', 'shippingoptions.cod', 'shippingoptions.restricteddelivery', 'shippingoptions.adultsigrestricted', 'shippingoptions.adultsigrequired', 'shippingoptions.returnreceipt', 'shippingoptions.certifiedmail', 'shippingoptions.sigconfirmation', 'shippingoptions.uspstracking', 'shippingoptions.reference', 'shippingoptions.value', 'shippingoptions.description', 'shippingoptions.weightoz', 'shippingoptions.output',
			'packagetype.ptid', 'packagetype.packagetype', 'packagetype.description',
			'mailclass.mcid', 'mailclass.mailclass', 'mailclass.description'
		)
		.innerJoin('shippingoptions', 'shippingoptions.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('customers', 'shippingoptions.customersid', 'customers.customersid')
		.innerJoin('mailclass', 'mailclass.mcid', 'shippingoptions.mcid')
		.innerJoin('packagetype', 'packagetype.ptid', 'shippingoptions.ptid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findAppsById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'appearances.appid',
			'appearances.cdappid',
			'appearances.customersid',
			'appearances.courtdatesid',
			'customers.customersid',
			'customers.factoring',
			'customers.company',
			'customers.mrms',
			'customers.lastname',
			'customers.firstname',
			'customers.email',
			'customers.jobtitle',
			'customers.businessphone',
			'customers.address1',
			'customers.address2',
			'customers.city',
			'customers.state',
			'customers.zip',
			'customers.notes'
		)
		.innerJoin('appearances', 'courtdates.courtdatesid', 'appearances.courtdatesid')
		.innerJoin('customers', 'appearances.customersid', 'customers.customersid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findCitationsById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'citations.citationsid',
			'citations.uscid',
			'citations.citlinksid',
			'citations.courtdatesid',
			'citationhyperlinks.chid',
			'citationhyperlinks.findcitation',
			'citationhyperlinks.longcitation',
			'citationhyperlinks.chcategory',
			'citationhyperlinks.webaddress'
		)
		.innerJoin('citations', 'courtdates.courtdatesid', 'citations.courtdatesid')
		.innerJoin('citationhyperlinks', 'citations.citlinksid', 'citationhyperlinks.chid');
}
function findTasksById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'tasks.tid',
			'tasks.courtdatesid',
			'tasks.title',
			'tasks.priority',
			'tasks.status',
			'tasks.description',
			'tasks.startdate AS tstartdate',
			'tasks.duedate AS tduedate',
			'tasks.prioritypoints',
			'tasks.category',
			'tasks.timelength',
			'tasks.completed'
		)
		.innerJoin('tasks', 'courtdates.courtdatesid', 'tasks.courtdatesid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findCommHistoryById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'customers.customersid',
			'customers.factoring',
			'customers.company',
			'customers.mrms',
			'customers.lastname',
			'customers.firstname',
			'customers.email',
			'customers.jobtitle',
			'customers.businessphone',
			'customers.address1',
			'customers.address2',
			'customers.city',
			'customers.state',
			'customers.zip',
			'customers.notes',
			'communicationhistory.chid',
			'communicationhistory.courtdatesid',
			'communicationhistory.customersid',
			'communicationhistory.filepath',
			'communicationhistory.datecreated'
		)
		.innerJoin('communicationhistory', 'communicationhistory.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('customers', 'communicationhistory.customersid', 'customers.customersid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findInvoicesById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'invoices.invoiceno',
			'invoices.iid',
			'invoices.btid',
			'invoices.discount',
			'invoices.reference',
			'invoices.invoicedate',
			'invoices.duedate AS iduedate',
			'invoices.itemcode',
			'invoices.description',
			'invoices.accountcode',
			'invoices.taxtype',
			'invoices.ratesid',
			'customers.customersid',
			'customers.factoring',
			'customers.company',
			'customers.mrms',
			'customers.lastname',
			'customers.firstname',
			'customers.email',
			'customers.jobtitle',
			'customers.businessphone',
			'customers.address1',
			'customers.address2',
			'customers.city',
			'customers.state',
			'customers.zip',
			'customers.notes',
			'payments.pid',
			'payments.amount AS pamount',
			'payments.remitdate',
			'payments.iid'
		)
		.innerJoin('invoices', 'invoices.iid', 'courtdates.iid')
		.innerJoin('customers', 'invoices.customersid', 'customers.customersid')
		.innerJoin('payments', 'payments.iid', 'invoices.iid')
		.where('courtdates.courtdatesid', courtdatesid);
}

function findMCsById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'shippingoptions.mcid',
			'shippingoptions.courtdatesid',
			'mailclass.mcid',
			'mailclass.mailclass',
			'mailclass.description'
		)
		.innerJoin('shippingoptions', 'shippingoptions.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('mailclass', 'mailclass.mcid', 'shippingoptions.mcid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findPTsById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'shippingoptions.mcid',
			'shippingoptions.courtdatesid',
			'packagetype.ptid',
			'packagetype.packagetype',
			'packagetype.description'
		)
		.innerJoin('shippingoptions', 'shippingoptions.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('packagetype', 'packagetype.ptid', 'shippingoptions.ptid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findBTsById(courtdatesid) {
	return db('courtdates')
		.select('courtdates.courtdatesid', 'courtdates.btid', 'brandingthemes.brandingtheme', 'brandingthemes.btid')
		.innerJoin('brandingthemes', 'brandingthemes.btid', 'courtdates.btid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findRatesById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'courtdates.ratesid',
			'rates.ratesid',
			'rates.rate',
			'rates.code',
			'rates.inventoryratecode',
			'rates.productname',
			'rates.description'
		)
		.innerJoin('rates', 'rates.ratesid', 'courtdates.ratesid')
		.where('courtdates.courtdatesid', courtdatesid);
}

function findStatusesById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'courtdates.ratesid',
			'statuses.sid',
			'statuses.courtdatesid',
			'statuses.jobentered',
			'statuses.appsentered',
			'statuses.coverpage',
			'statuses.autocorrect',
			'statuses.schedule',
			'statuses.prepinvoice',
			'statuses.agshortcuts',
			'statuses.transcribe',
			'statuses.addrdtocover',
			'statuses.findreplacerd',
			'statuses.hyperlink',
			'statuses.spellingsemail',
			'statuses.audioproof',
			'statuses.invoicecompleted',
			'statuses.noticeofservice',
			'statuses.peletter',
			'statuses.cdlabel',
			'statuses.generatezips',
			'statuses.transcriptsready',
			'statuses.invoicetofactoremail',
			'statuses.filetranscript',
			'statuses.burncd',
			'statuses.shippingxmls',
			'statuses.shippingemail',
			'statuses.addtrackingno'
		)
		.innerJoin('statuses', 'courtdates.courtdatesid', 'statuses.courtdatesid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findAGSById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'agshortcuts.agsid',
			'agshortcuts.courtdatesid',
			'agshortcuts.ag1',
			'agshortcuts.ag2',
			'agshortcuts.ag3',
			'agshortcuts.ag4',
			'agshortcuts.ag5',
			'agshortcuts.ag6',
			'agshortcuts.ag11',
			'agshortcuts.ag12',
			'agshortcuts.ag13',
			'agshortcuts.ag14',
			'agshortcuts.ag15',
			'agshortcuts.ag16',
			'agshortcuts.ag21',
			'agshortcuts.ag22',
			'agshortcuts.ag23',
			'agshortcuts.ag24',
			'agshortcuts.ag25',
			'agshortcuts.ag26',
			'agshortcuts.ag31',
			'agshortcuts.ag32',
			'agshortcuts.ag33',
			'agshortcuts.ag34',
			'agshortcuts.ag35',
			'agshortcuts.ag36',
			'agshortcuts.ag41',
			'agshortcuts.ag42',
			'agshortcuts.ag43',
			'agshortcuts.ag44',
			'agshortcuts.ag45',
			'agshortcuts.ag46',
			'agshortcuts.ag51',
			'agshortcuts.ag52',
			'agshortcuts.ag53',
			'agshortcuts.ag54',
			'agshortcuts.ag55',
			'agshortcuts.ag56',
			'agshortcuts.ag61',
			'agshortcuts.ag62',
			'agshortcuts.ag63',
			'agshortcuts.ag64',
			'agshortcuts.ag65',
			'agshortcuts.ag66'
		)
		.innerJoin('agshortcuts', 'agshortcuts.courtdatesid', 'courtdates.courtdatesid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findETsById(courtdatesid) {
	return db('courtdates')
		.select('courtdates.courtdatesid', 'examtypes.eid', 'examtypes.examination', 'examtypes.ecode')
		.innerJoin('examtypes', 'courtdates.eid', 'examtypes.eid')
		.where('courtdates.courtdatesid', courtdatesid);
}

function findStylesById(courtdatesid) {
	return db('courtdates')
		.select('courtdates.courtdatesid', 'stylenames.sid', 'stylenames.stylename')
		.innerJoin('stylenames', 'courtdates.sid', 'stylenames.sid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findCCCsById(courtdatesid) {
	return db('courtdatescasescustomers')
		.select(
			'courtdates.courtdatesid',
			'courtdatescasescustomers.cdccid',
			'courtdatescasescustomers.courtdatesid',
			'courtdatescasescustomers.casesid',
			'courtdatescasescustomers.orderingid'
		)
		.innerJoin('courtdatescasescustomers', 'courtdatescasescustomers.courtdatesid', 'courtdates.courtdatesid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findCHsById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'citations.citationsid',
			'citations.uscid',
			'citations.citlinksid',
			'citations.courtdatesid',
			'citationhyperlinks.chid',
			'citationhyperlinks.findcitation',
			'citationhyperlinks.longcitation',
			'citationhyperlinks.chcategory',
			'citationhyperlinks.webaddress'
		)
		.innerJoin('citations', 'courtdates.courtdatesid', 'citations.courtdatesid')
		.innerJoin('citationhyperlinks', 'citations.citlinksid', 'citationhyperlinks.chid')
		.where('courtdates.courtdatesid', courtdatesid);
}
function findUSCsById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'citations.citationsid',
			'citations.uscid',
			'citations.citlinksid',
			'citations.courtdatesid',
			'usc.uscid',
			'usc.findcitation',
			'usc.longcitation',
			'usc.chcategory',
			'usc.webaddress'
		)
		.innerJoin('citations', 'courtdates.courtdatesid', 'citations.courtdatesid')
		.innerJoin('usc', 'citations.uscid', 'usc.uscid')
		.where('courtdates.courtdatesid', courtdatesid);
}

function findByIdMain(courtdatesid) {
	return db('courtdates')
		.select(
			'agshortcuts.agsid',
			'agshortcuts.courtdatesid',
			'agshortcuts.ag1',
			'agshortcuts.ag2',
			'agshortcuts.ag3',
			'agshortcuts.ag4',
			'agshortcuts.ag5',
			'agshortcuts.ag6',
			'agshortcuts.ag11',
			'agshortcuts.ag12',
			'agshortcuts.ag13',
			'agshortcuts.ag14',
			'agshortcuts.ag15',
			'agshortcuts.ag16',
			'agshortcuts.ag21',
			'agshortcuts.ag22',
			'agshortcuts.ag23',
			'agshortcuts.ag24',
			'agshortcuts.ag25',
			'agshortcuts.ag26',
			'agshortcuts.ag31',
			'agshortcuts.ag32',
			'agshortcuts.ag33',
			'agshortcuts.ag34',
			'agshortcuts.ag35',
			'agshortcuts.ag36',
			'agshortcuts.ag41',
			'agshortcuts.ag42',
			'agshortcuts.ag43',
			'agshortcuts.ag44',
			'agshortcuts.ag45',
			'agshortcuts.ag46',
			'agshortcuts.ag51',
			'agshortcuts.ag52',
			'agshortcuts.ag53',
			'agshortcuts.ag54',
			'agshortcuts.ag55',
			'agshortcuts.ag56',
			'agshortcuts.ag61',
			'agshortcuts.ag62',
			'agshortcuts.ag63',
			'agshortcuts.ag64',
			'agshortcuts.ag65',
			'agshortcuts.ag66',
			'courtdates.courtdatesid',
			'courtdates.ttid',
			'courtdates.hearingdate',
			'courtdates.hearingstarttime',
			'courtdates.hearingendtime',
			'courtdates.audiolength',
			'courtdates.location',
			'courtdates.duedate',
			'courtdates.filed',
			'courtdates.hearingtitle',
			'courtdates.judgename',
			'courtdates.judgetitle',
			'courtdates.factoringcost',
			'courtdates.estimatedquantity',
			'courtdates.actualquantity',
			'courtdates.subtotal',
			'courtdates.finalprice',
			'courtdates.estimatedadvancedate',
			'courtdates.estimatedrebatedate',
			'courtdates.ppid',
			'courtdates.ppstatus',
			'courtdates.shipdate',
			'courtdates.trackingno',
			'cases.casesid',
			'cases.party1',
			'cases.party1name',
			'cases.party2',
			'cases.party2name',
			'cases.casenumber1',
			'cases.casenumber2',
			'cases.jurisdiction',
			'cases.notes',
			'turnaroundtimes.ttid',
			'turnaroundtimes.turnaroundtime',
			'rates.ratesid',
			'rates.rate',
			'rates.code',
			'rates.inventoryratecode',
			'rates.productname',
			'rates.description',
			'brandingthemes.brandingtheme',
			'brandingthemes.btid',
			'expenses.eid',
			'expenses.vendor',
			'expenses.date',
			'expenses.amount AS eamount',
			'expenses.description',
			'expenses.courtdatesid',
			'invoices.invoiceno',
			'invoices.iid',
			'invoices.btid',
			'invoices.discount',
			'invoices.reference',
			'invoices.invoicedate',
			'invoices.duedate AS iduedate',
			'invoices.itemcode',
			'invoices.description',
			'invoices.accountcode',
			'invoices.taxtype',
			'invoices.ratesid',
			'appearances.appid',
			'appearances.cdappid',
			'appearances.customersid',
			'appearances.courtdatesid',
			'customers.customersid',
			'customers.factoring',
			'customers.company',
			'customers.mrms',
			'customers.lastname',
			'customers.firstname',
			'customers.email',
			'customers.jobtitle',
			'customers.businessphone',
			'customers.address1',
			'customers.address2',
			'customers.city',
			'customers.state',
			'customers.zip',
			'customers.notes',
			'payments.pid',
			'payments.amount AS pamount',
			'payments.remitdate',
			'payments.iid',
			'shippingoptions.soid',
			'shippingoptions.mcid',
			'shippingoptions.ptid',
			'shippingoptions.customersid',
			'shippingoptions.amount',
			'shippingoptions.shippingcost',
			'shippingoptions.width',
			'shippingoptions.length',
			'shippingoptions.height',
			'shippingoptions.prioritymailexpress1030',
			'shippingoptions.holidaydelivery',
			'shippingoptions.sundaydelivery',
			'shippingoptions.saturdaydelivery',
			'shippingoptions.signaturerequired',
			'shippingoptions.stealth',
			'shippingoptions.replypostage',
			'shippingoptions.insuredmail',
			'shippingoptions.cod',
			'shippingoptions.restricteddelivery',
			'shippingoptions.adultsigrestricted',
			'shippingoptions.adultsigrequired',
			'shippingoptions.returnreceipt',
			'shippingoptions.certifiedmail',
			'shippingoptions.sigconfirmation',
			'shippingoptions.uspstracking',
			'shippingoptions.reference',
			'shippingoptions.value',
			'shippingoptions.description',
			'shippingoptions.weightoz',
			'shippingoptions.output',
			'packagetype.ptid',
			'packagetype.packagetype',
			'packagetype.description',
			'mailclass.mcid',
			'mailclass.mailclass',
			'mailclass.description',
			'communicationhistory.chid',
			'communicationhistory.courtdatesid',
			'communicationhistory.customersid',
			'communicationhistory.filepath',
			'communicationhistory.datecreated',
			'statuses.sid',
			'statuses.courtdatesid',
			'statuses.jobentered',
			'statuses.appsentered',
			'statuses.coverpage',
			'statuses.autocorrect',
			'statuses.schedule',
			'statuses.prepinvoice',
			'statuses.agshortcuts',
			'statuses.transcribe',
			'statuses.addrdtocover',
			'statuses.findreplacerd',
			'statuses.hyperlink',
			'statuses.spellingsemail',
			'statuses.audioproof',
			'statuses.invoicecompleted',
			'statuses.noticeofservice',
			'statuses.peletter',
			'statuses.cdlabel',
			'statuses.generatezips',
			'statuses.transcriptsready',
			'statuses.invoicetofactoremail',
			'statuses.filetranscript',
			'statuses.burncd',
			'statuses.shippingxmls',
			'statuses.shippingemail',
			'statuses.addtrackingno',
			'tasks.tid',
			'tasks.courtdatesid',
			'tasks.title',
			'tasks.priority',
			'tasks.status',
			'tasks.description',
			'tasks.startdate AS tstartdate',
			'tasks.duedate AS tduedate',
			'tasks.prioritypoints',
			'tasks.category',
			'tasks.timelength',
			'tasks.completed',
			'citations.citationsid',
			'citations.uscid',
			'citations.citlinksid',
			'citations.courtdatesid',
			'citationhyperlinks.chid',
			'citationhyperlinks.findcitation',
			'citationhyperlinks.longcitation',
			'citationhyperlinks.chcategory',
			'citationhyperlinks.webaddress',
			'courtdatescasescustomers.cdccid',
			'courtdatescasescustomers.courtdatesid',
			'courtdatescasescustomers.casesid',
			'courtdatescasescustomers.orderingid'
		)
		.innerJoin('courtdatescasescustomers', 'courtdatescasescustomers.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('appearances', 'appearances.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('turnaroundtimes', 'turnaroundtimes.ttid', 'courtdates.ttid')
		.innerJoin('rates', 'rates.ratesid', 'courtdates.ratesid')
		.innerJoin('brandingthemes', 'brandingthemes.btid', 'courtdates.btid')
		.innerJoin('cases', 'cases.casesid', 'courtdatescasescustomers.casesid')
		.innerJoin('agshortcuts', 'agshortcuts.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('invoices', 'invoices.iid', 'courtdates.iid')
		.innerJoin('customers', 'appearances.customersid', 'customers.customersid')
		.innerJoin('expenses', 'expenses.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('payments', 'payments.iid', 'invoices.iid')
		.innerJoin('shippingoptions', 'shippingoptions.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('mailclass', 'mailclass.mcid', 'shippingoptions.mcid')
		.innerJoin('packagetype', 'packagetype.ptid', 'shippingoptions.ptid')
		.innerJoin('citations', 'courtdates.courtdatesid', 'citations.courtdatesid')
		.innerJoin('communicationhistory', 'communicationhistory.courtdatesid', 'courtdates.courtdatesid')
		.innerJoin('statuses', 'courtdates.courtdatesid', 'statuses.courtdatesid')
		.innerJoin('tasks', 'courtdates.courtdatesid', 'tasks.courtdatesid')
		.innerJoin('citationhyperlinks', 'citations.citlinksid', 'citationhyperlinks.chid')
		.where('courtdates.courtdatesid', courtdatesid);
}

function findContractorsById(courtdatesid) {
	return db('courtdates')
		.select(
			'courtdates.courtdatesid',
			'courtdates.trid',
			'courtdates.prid',
			'customers.factoring',
			'customers.company',
			'customers.mrms',
			'customers.lastname',
			'customers.firstname',
			'customers.email',
			'customers.jobtitle',
			'customers.businessphone',
			'customers.address1',
			'customers.address2',
			'customers.city',
			'customers.state',
			'customers.zip',
			'customers.notes'
		)
		.innerJoin('customers', 'courtdates.trid', 'customers.customersid')
		.where('courtdates.courtdatesid', courtdatesid)
		.union(
			db('courtdates')
				.select(
					'courtdates.courtdatesid',
					'courtdates.trid',
					'courtdates.prid',
					'customers.factoring',
					'customers.company',
					'customers.mrms',
					'customers.lastname',
					'customers.firstname',
					'customers.email',
					'customers.jobtitle',
					'customers.businessphone',
					'customers.address1',
					'customers.address2',
					'customers.city',
					'customers.state',
					'customers.zip',
					'customers.notes'
				)
				.innerJoin('customers', 'courtdates.prid', 'customers.customersid')
				.where('courtdates.courtdatesid', courtdatesid)
		);
}

/*


SELECT *
FROM CourtDates INNER JOIN OrderingAttorneyInfo ON CourtDates.ID=OrderingAttorneyInfo.CourtDatesID;

*/

/*

SELECT CourtDates.InvoiceDate, CourtDates.ID AS CourtDatesID, (DateAdd('d',28,InvoiceDate)) AS ["PaymentDueDate"]
FROM CourtDates
WHERE CourtDates.ID =Forms![NewMainMenu]![ProcessJobSubformNMM].Form![JobNumberField];


*/

/*


SELECT CourtDates.InvoiceDate AS InvoiceDate, CourtDates.ID AS CourtDatesID, (DateAdd('d',1,InvoiceDate)) AS PaymentDueDate
FROM CourtDates INNER JOIN UnitPrice ON CourtDates.[UnitPrice] = UnitPrice.[ID];


*/

/*


SELECT CourtDates.InvoiceDate AS InvoiceDate, CourtDates.ID AS CourtDatesID, (DateAdd('d',1,InvoiceDate)) AS PaymentDueDate
FROM CourtDates INNER JOIN UnitPrice ON CourtDates.[UnitPrice] = UnitPrice.[ID];


*/

/*

SELECT *
FROM CourtDates INNER JOIN QMaxCourtDates ON [CourtDates].ID=[QMaxCourtDates].CourtDatesID;


*/

/*

SELECT CourtDates.ID AS ["CourtDatesID"], CourtDates.HearingDate, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.TurnaroundTimesCD, CourtDates.DueDate, CourtDates.InvoiceNo AS ["CourtDatesInvoiceNo"], CourtDates.InvoiceDate, CourtDates.PaymentDueDate, CourtDates.Subtotal, Payments.InvoiceNo AS ["PaymentsInvoiceNo"], Payments.Amount, Payments.RemitDate, Payments.ID AS ["PaymentsID"]
FROM CourtDates INNER JOIN Payments ON CourtDates.[InvoiceNo] = Payments.[InvoiceNo];


*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.UnitPrice, CourtDates.Quantity, CourtDates.Subtotal, CourtDates.AudioLength, CourtDates.TurnaroundTimesCD, CourtDates.DueDate, CourtDates.InvoiceDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.HearingDate, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.FiledNotFiled, CourtDates.PaymentDueDate, CourtDates.ExpectedAdvanceDate, CourtDates.ExpectedRebateDate, CourtDates.EstimatedPageCount, Cases.Party1, Cases.Party2, Cases.Party1Name, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge
FROM CourtDates INNER JOIN CASES ON CourtDates.CasesID = Cases.ID
WHERE CourtDates.ID=Forms![NewMainMenu]![ProcessJobSubformNMM].[Form]![JobNumberField];


*/

/*


SELECT [CourtDatesWTOMatchingExp].InvoiceNo, CDbl(Nz(Sum([CourtDatesWTOMatchingExp].[TotalExpenses]),0)) AS TotalExpenses
FROM CourtDatesWTOMatchingExp
GROUP BY [CourtDatesWTOMatchingExp].InvoiceNo;

*/

/*

SELECT [CourtDates].InvoiceNo, CDbl(Nz(Sum([CourtDates].[ActualQuantity]),0)) AS PageCount
FROM CourtDates
GROUP BY [CourtDates].InvoiceNo;


*/

/*


SELECT 
FROM CourtDates AS CourtDates_1, Statuses AS Statuses_1, Cases INNER JOIN (CourtDates INNER JOIN Statuses ON (Statuses.CourtDatesID = CourtDates.ID) AND (Statuses.ID = CourtDates.StatusesID) AND (CourtDates.StatusesID = Statuses.ID) AND (CourtDates.ID = Statuses.CourtDatesID)) ON (Statuses.ID = Cases.ID) AND (Cases.ID = CourtDates.CasesID);

*/

/*

SELECT MAX(ID) AS CourtDatesID, CourtDates.InvoiceNo
FROM CourtDates;



*/

/*

SELECT CourtDates.ID AS CourtDatesID, UnitPrice.ID, CourtDates.AudioLength, CourtDates.TurnaroundTimesCD, CourtDates.InvoiceNo, CourtDates.InvoiceDate AS InvoiceDate, CourtDates.PaymentDueDate, CourtDates.ExpectedAdvanceDate, CourtDates.ExpectedRebateDate, CourtDates.EstimatedPageCount, CourtDates.FactoringCost, CourtDates.UnitPrice, UnitPrice.Rate, CourtDates.Quantity AS Quantity, CourtDates.DueDate, CourtDates.Subtotal AS subSubtotal, Rate*Quantity AS Subtotal
FROM CourtDates INNER JOIN UnitPrice ON CourtDates.[UnitPrice] = UnitPrice.[ID]
WHERE CourtDates.FinalPrice = 0;


*/

/*


SELECT CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.ID, CourtDates.Quantity, CourtDates.CasesID, CourtDates.App1, CourtDates.App2, CourtDates.App3, CourtDates.App4, CourtDates.App5, CourtDates.App6, CourtDates.OrderingID AS OrderingID, CourtDates.AudioLength, CourtDates.TurnaroundTImesCD, CourtDates.PaymentDueDate, CourtDates.UnitPrice, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate AS ExpectedAdvanceDate, CourtDates.Location, CourtDates.InvoiceNo, CourtDates.FactoringCost, CourtDates.InvoiceDate, CourtDates.Subtotal, (CourtDates.Subtotal*.8) AS ExpectedAdvanceAmount, CourtDates.FinalPrice, CourtDates.PaymentSum, CourtDates.EstimatedPageCount, CourtDates.DueDate, CourtDates.ActualQuantity, CourtDates.DueDate, CourtDates.InvoiceDate, CourtDates.FiledNotFiled, CourtDates.EstimatedPageCount, CourtDates.PPID, CourtDates.PPStatus, GetInvoiceNoFromCDID.InvoiceNo, CourtDates.InventoryRateCode AS InventoryRateCode
FROM CourtDates INNER JOIN GetInvoiceNoFromCDID ON CourtDates.InvoiceNo=GetInvoiceNoFromCDID.InvoiceNo;

*/

/*

SELECT TRInv.HearingDate AS TRInv_HearingDate, TRInv.HearingStartTime AS TRInv_HearingStartTime, TRInv.HearingEndTime AS TRInv_HearingEndTime, TRInv.ID, TRInv.Quantity AS TRInv_Quantity, TRInv.CasesID AS TRInv_CasesID, TRInv.App1 AS TRInv_App1, TRInv.App2 AS TRInv_App2, TRInv.App3 AS TRInv_App3, TRInv.App4 AS TRInv_App4, TRInv.App5 AS TRInv_App5, TRInv.App6 AS TRInv_App6, TRInv.OrderingID AS TRInv_OrderingID, TRInv.AudioLength AS TRInv_AudioLength, TRInv.TurnaroundTImesCD AS TRInv_TurnaroundTImesCD, TRInv.PaymentDueDate AS TRInv_PaymentDueDate, TRInv.UnitPrice AS TRInv_UnitPrice, TRInv.ExpectedRebateDate AS TRInv_ExpectedRebateDate, TRInv.ExpectedAdvanceDate AS TRInv_ExpectedAdvanceDate, TRInv.Location AS TRInv_Location, TRInv.CourtDates.InvoiceNo, TRInv.FactoringCost AS TRInv_FactoringCost, TRInv.Expr1022, TRInv.Subtotal AS TRInv_Subtotal, TRInv.ExpectedAdvanceAmount, TRInv.FinalPrice AS TRInv_FinalPrice, TRInv.PaymentSum, TRInv.Expr1027, TRInv.Expr1028, TRInv.ActualQuantity AS TRInv_ActualQuantity, TRInv.DueDate AS TRInv_DueDate, TRInv.InvoiceDate AS TRInv_InvoiceDate, TRInv.FiledNotFiled AS TRInv_FiledNotFiled, TRInv.EstimatedPageCount AS TRInv_EstimatedPageCount, TRInv.PPID AS TRInv_PPID, TRInv.PPStatus AS TRInv_PPStatus, TRInv.GetInvoiceNoFromCDID.InvoiceNo, TRInv.InventoryRateCode AS TRInv_InventoryRateCode, TRInvoiceCasesQ.Cases.ID, TRInvoiceCasesQ.Party1, TRInvoiceCasesQ.Party1Name, TRInvoiceCasesQ.Party2, TRInvoiceCasesQ.Party2Name, TRInvoiceCasesQ.CaseNumber1, TRInvoiceCasesQ.CaseNumber2, TRInvoiceCasesQ.Jurisdiction, TRInvoiceCasesQ.HearingTitle, TRInvoiceCasesQ.Judge, TRInvoiceCasesQ.JudgeTitle, TRInvoiceCasesQ.Cases.Notes, TRInvoiceCasesQ.GetInvoiceNoFromCDID.ID, TRInvoiceCasesQ.HearingDate AS TRInvoiceCasesQ_HearingDate, TRInvoiceCasesQ.HearingStartTime AS TRInvoiceCasesQ_HearingStartTime, TRInvoiceCasesQ.HearingEndTime AS TRInvoiceCasesQ_HearingEndTime, TRInvoiceCasesQ.CasesID AS TRInvoiceCasesQ_CasesID, TRInvoiceCasesQ.App1 AS TRInvoiceCasesQ_App1, TRInvoiceCasesQ.App2 AS TRInvoiceCasesQ_App2, TRInvoiceCasesQ.App3 AS TRInvoiceCasesQ_App3, TRInvoiceCasesQ.App4 AS TRInvoiceCasesQ_App4, TRInvoiceCasesQ.App5 AS TRInvoiceCasesQ_App5, TRInvoiceCasesQ.App6 AS TRInvoiceCasesQ_App6, TRInvoiceCasesQ.OrderingID AS TRInvoiceCasesQ_OrderingID, TRInvoiceCasesQ.StatusesID, TRInvoiceCasesQ.AudioLength AS TRInvoiceCasesQ_AudioLength, TRInvoiceCasesQ.Location AS TRInvoiceCasesQ_Location, TRInvoiceCasesQ.TurnaroundTimesCD AS TRInvoiceCasesQ_TurnaroundTimesCD, TRInvoiceCasesQ.InvoiceNo, TRInvoiceCasesQ.DueDate AS TRInvoiceCasesQ_DueDate, TRInvoiceCasesQ.ShipDate, TRInvoiceCasesQ.TrackingNumber, TRInvoiceCasesQ.PaymentType, TRInvoiceCasesQ.GetInvoiceNoFromCDID.CourtDates.Notes, TRInvoiceCasesQ.ShippingOptionsID, TRInvoiceCasesQ.SPKRID, TRInvoiceCasesQ.AGShortcuts, TRInvoiceCasesQ.FiledNotFiled AS TRInvoiceCasesQ_FiledNotFiled, TRInvoiceCasesQ.Factored, TRInvoiceCasesQ.InvoiceDate AS TRInvoiceCasesQ_InvoiceDate, TRInvoiceCasesQ.PaymentDueDate AS TRInvoiceCasesQ_PaymentDueDate, TRInvoiceCasesQ.FactoringInterestID, TRInvoiceCasesQ.ExpectedRebateDate AS TRInvoiceCasesQ_ExpectedRebateDate, TRInvoiceCasesQ.EstimatedPageCount AS TRInvoiceCasesQ_EstimatedPageCount, TRInvoiceCasesQ.FactoringCost AS TRInvoiceCasesQ_FactoringCost, TRInvoiceCasesQ.UnitPrice AS TRInvoiceCasesQ_UnitPrice, TRInvoiceCasesQ.Quantity AS TRInvoiceCasesQ_Quantity, TRInvoiceCasesQ.ActualQuantity AS TRInvoiceCasesQ_ActualQuantity, TRInvoiceCasesQ.Subtotal AS TRInvoiceCasesQ_Subtotal, TRInvoiceCasesQ.ExpectedAdvanceDate AS TRInvoiceCasesQ_ExpectedAdvanceDate, TRInvoiceCasesQ.FinalPrice AS TRInvoiceCasesQ_FinalPrice, TRInvoiceCasesQ.GetInvoiceNoFromCDID.CourtDates.PaymentSum, TRInvoiceCasesQ.InventoryRateCode AS TRInvoiceCasesQ_InventoryRateCode, TRInvoiceCasesQ.AccountCode, TRInvoiceCasesQ.TaxType, TRInvoiceCasesQ.BrandingTheme, TRInvoiceCasesQ.PPID AS TRInvoiceCasesQ_PPID, TRInvoiceCasesQ.PPStatus AS TRInvoiceCasesQ_PPStatus, TRInvoiceCasesQ.CourtDatesID AS TRInvoiceCasesQ_CourtDatesID, TRInvoiceCasesQ.OAIInvoiceNo, TRInvoiceCasesQ.OAISubtotal, TRInvoiceCasesQ.OAIQuantity, TRInvoiceCasesQ.OAIUnitPrice, TRInvoiceCasesQ.OrderingAttorneyInfo.PaymentSum, TRInvoiceCasesQ.CustomersID, TRInvoiceCasesQ.Company, TRInvoiceCasesQ.MrMs, TRInvoiceCasesQ.LastName, TRInvoiceCasesQ.FirstName, TRInvoiceCasesQ.EmailAddress, TRInvoiceCasesQ.BusinessPhone, TRInvoiceCasesQ.FaxNumber, TRInvoiceCasesQ.Address, TRInvoiceCasesQ.City, TRInvoiceCasesQ.State, TRInvoiceCasesQ.ZIP, TRInvoiceCasesQ.OrderingAttorneyInfo.Notes, TRInvoiceCasesQ.FactoringApproved, TRInvoiceCasesQ.OAICasesID, CourtDatesRatesQuery.CourtDatesID AS CourtDatesRatesQuery_CourtDatesID, CourtDatesRatesQuery.InventoryRateCode AS CourtDatesRatesQuery_InventoryRateCode, CourtDatesRatesQuery.[List Price], CourtDatesRatesQuery.RatesID, CourtDatesRatesQuery.Code
FROM CourtDatesRatesQuery INNER JOIN (TRInvoiceCasesQ INNER JOIN TRInv ON TRInvoiceCasesQ.[CustomersID] = TRInv.[OrderingID]) ON CourtDatesRatesQuery.[CourtDatesID] = TRInv.[CourtDates.ID];


*/

/*

SELECT CourtDates.ID AS CourtDatesID, UnitPrice.ID, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.StatusesID, CourtDates.AudioLength, CourtDates.TurnaroundTimesCD, CourtDates.InvoiceNo, CourtDates.InvoiceDate, CourtDates.PaymentDueDate, CourtDates.EstimatedPageCount, CourtDates.Quantity, CourtDates.DueDate, CourtDates.UnitPrice, UnitPrice.Rate, UnitPrice.Rate*CourtDates.Quantity AS Subtotal, (DateAdd('d',30,DueDate)) AS ExpectedRebateDate, (DateAdd('d',2,[DueDate])) AS ExpectedAdvanceDate, Subtotal*.8 AS EstimatedAdvanceAmount
FROM CourtDates INNER JOIN UnitPrice ON CourtDates.[UnitPrice] = UnitPrice.[ID];


*/

/*


INSERT INTO XeroInvoiceCSV ( ContactName, EmailAddress, POAddressLine1, POCity, PORegion, POPostalCode, InvoiceNumber, Reference, InvoiceDate, DueDate, InventoryItemCode, Description, Quantity, UnitAmount, AccountCode, TaxType, BrandingTheme )
SELECT CourtDatesBTRIQ4QXero.Company AS ContactName, CourtDatesBTRIQ4QXero.EmailAddress, CourtDatesBTRIQ4QXero.Address AS POAddressLine1, CourtDatesBTRIQ4QXero.City AS POCity, CourtDatesBTRIQ4QXero.State AS PORegion, CourtDatesBTRIQ4QXero.ZIP AS POPostalCode, CourtDatesBTRIQ4QXero.InvoiceNo AS InvoiceNumber, CourtDatesID AS Reference, CourtDatesBTRIQ4QXero.InvoiceDate AS Invoicedate, CourtDatesBTRIQ4QXero.DueDate, CourtDatesBTRIQ4QXero.Code AS InventoryItemCode, ([Party1] & " v. " & [Party2] & Chr(13) & "Case Numbers:  " & [CaseNumber1] & "   |   " & [CaseNumber2] & Chr(13) & "Hearing Date:  " & [HearingDate] & Chr(13) & "Approx. " & [AudioLength] & " Minutes") AS Description, CourtDatesBTRIQ4QXero.Quantity, CourtDatesBTRIQ4QXero.[Rate] AS UnitAmount, 400 AS AccountCode, CourtDatesBTRIQ4QXero.TaxType, CourtDatesBTRIQ4QXero.BrandingThemes_BrandingTheme AS BrandingTheme
FROM CourtDatesBTRIQ4QXero
WHERE [Reference]=Forms![NewMainMenu]![ProcessJobSubformNMM].Form![JobNumberField];

*/

/*

SELECT CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.StatusesID, CourtDates.AudioLength, CourtDates.DueDate, CourtDates.PaymentType, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Statuses.ID AS Statuses_ID, Statuses.CourtDatesID, Statuses.ContactsEntered, Statuses.JobEntered, Statuses.CoverPage, Statuses.AutoCorrect, Statuses.Schedule, Statuses.Invoice, Statuses.Transcribe, Statuses.AddRDtoCover, Statuses.FindReplaceRD, Statuses.HyperlinkTranscripts, Statuses.SpellingsEmail, Statuses.AudioProof, Statuses.InvoiceCompleted, Statuses.NoticeofService, Statuses.PackageEnclosedLetter, Statuses.CDLabel, Statuses.GenerateZIPs, Statuses.TranscriptsReady, Statuses.InvoicetoFactorEmail, Statuses.FileTranscript, Statuses.BurnCD, Statuses.ShippingXMLs, Statuses.GenerateShippingEM, Statuses.AddTrackingNumber
FROM (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN Statuses ON (CourtDates.[ID] = Statuses.[CourtDatesID]) AND (CourtDates.[StatusesID] = Statuses.[ID])
WHERE (((Statuses.ContactsEntered)=Yes) AND ((Statuses.JobEntered)=Yes) AND ((Statuses.CoverPage)=Yes) AND ((Statuses.AutoCorrect)=Yes) AND ((Statuses.Schedule)=Yes) AND ((Statuses.Invoice)=Yes) AND ((Statuses.Transcribe)=Yes) AND ((Statuses.AddRDtoCover)=Yes) AND ((Statuses.FindReplaceRD)=Yes) AND ((Statuses.HyperlinkTranscripts)=Yes) AND ((Statuses.SpellingsEmail)=Yes) AND ((Statuses.AudioProof)=No)) OR (((Statuses.InvoiceCompleted)=No)) OR (((Statuses.NoticeofService)=No)) OR (((Statuses.PackageEnclosedLetter)=No)) OR (((Statuses.CDLabel)=No)) OR (((Statuses.GenerateZIPs)=No)) OR (((Statuses.TranscriptsReady)=No)) OR (((Statuses.InvoicetoFactorEmail)=No)) OR (((Statuses.FileTranscript)=No)) OR (((Statuses.BurnCD)=No)) OR (((Statuses.ShippingXMLs)=No)) OR (((Statuses.GenerateShippingEM)=No)) OR (((Statuses.AddTrackingNumber)=No));



*/

/*

SELECT CourtDates.ID AS CourtDates_ID, CourtDates.OrderingID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.EmailAddress, Customers.Address, Customers.City, Customers.State, Customers.ZIP, ShippingOptions.ID AS ShippingOptions_ID, ShippingOptions.CourtDatesID, ShippingOptions.CourtDatesIDLK, ShippingOptions.MailClass, ShippingOptions.PackageType, ShippingOptions.Width, ShippingOptions.Length, ShippingOptions.Depth, ShippingOptions.PriorityMailExpress1030, ShippingOptions.HolidayDelivery, ShippingOptions.SundayDelivery, ShippingOptions.SaturdayDelivery, ShippingOptions.SignatureRequired, ShippingOptions.Stealth, ShippingOptions.ReplyPostage, ShippingOptions.InsuredMail, ShippingOptions.COD, ShippingOptions.RestrictedDelivery, ShippingOptions.AdultSignatureRestricted, ShippingOptions.AdultSignatureRequired, ShippingOptions.ReturnReceipt, ShippingOptions.CertifiedMail, ShippingOptions.SignatureConfirmation, ShippingOptions.USPSTracking, ShippingOptions.ReferenceID, ShippingOptions.ToName, ShippingOptions.ToAddress1, ShippingOptions.ToAddress2, ShippingOptions.ToCity, ShippingOptions.ToState, ShippingOptions.ToPostalCode, ShippingOptions.ToCountry, ShippingOptions.Value, ShippingOptions.Description, ShippingOptions.ToEMail, ShippingOptions.ToPhone, ShippingOptions.WeightOz, ShippingOptions.ActualWeight, ShippingOptions.ActualWeightText, ShippingOptions.Amount
FROM (Customers INNER JOIN CourtDates ON Customers.[ID] = CourtDates.[OrderingID]) INNER JOIN ShippingOptions ON CourtDates.[ID] = ShippingOptions.[CourtDatesIDLK];


*/

/*


SELECT CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.ShippingID, Customers.ID AS Customers_ID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.BusinessPhone, Customers.EmailAddress, ShippingOptions.ID AS ShippingOptions_ID, ShippingOptions.CourtDatesID, ShippingOptions.MailClass, ShippingOptions.PackageType, ShippingOptions.Width, ShippingOptions.Length, ShippingOptions.Depth, ShippingOptions.PriorityMailExpress1030, ShippingOptions.HolidayDelivery, ShippingOptions.SundayDelivery, ShippingOptions.SaturdayDelivery, ShippingOptions.SignatureRequired, ShippingOptions.Stealth, ShippingOptions.ReplyPostage, ShippingOptions.InsuredMail, ShippingOptions.COD, ShippingOptions.RestrictedDelivery, ShippingOptions.AdultSignatureRestricted, ShippingOptions.AdultSignatureRequired, ShippingOptions.ReturnReceipt, ShippingOptions.CertifiedMail, ShippingOptions.SignatureConfirmation, ShippingOptions.USPSTracking, ShippingOptions.ReferenceID, ShippingOptions.ToName, ShippingOptions.ToAddress1, ShippingOptions.ToAddress2, ShippingOptions.ToCity, ShippingOptions.ToState, ShippingOptions.ToPostalCode, ShippingOptions.ToCountry, ShippingOptions.Value, ShippingOptions.Description, ShippingOptions.ToEMail, ShippingOptions.ToPhone, ShippingOptions.WeightOz, ShippingOptions.ActualWeight, ShippingOptions.ActualWeightText, ShippingOptions.Amount
FROM (Customers INNER JOIN CourtDates ON Customers.[ID] = CourtDates.[OrderingID]) INNER JOIN ShippingOptions ON CourtDates.[ID] = ShippingOptions.[CourtDatesID]
WHERE ShippingOptions.[CourtDatesID]=Forms![NewMainMenu]![ProcessJobSubformNMM].Form![JobNumberField];


*/

/*


SELECT CourtDates.ID AS CourtDatesID, CourtDates.BrandingTheme AS CourtDates_BrandingTheme, BrandingThemes.ID AS BrandingThemes_ID, BrandingThemes.BrandingTheme AS BrandingThemes_BrandingTheme
FROM BrandingThemes INNER JOIN CourtDates ON BrandingThemes.[ID] = CourtDates.[BrandingTheme];



*/

/*

SELECT CourtDatesBTRQuery2.BrandingThemes_BrandingTheme, InvoicesQuery4.CourtDatesID AS InvoicesQuery4_CourtDatesID, InvoicesQuery4.Reference, InvoicesQuery4.HearingDate, InvoicesQuery4.HearingStartTime, InvoicesQuery4.HearingEndTime, InvoicesQuery4.CasesID, InvoicesQuery4.OrderingID, InvoicesQuery4.AudioLength, InvoicesQuery4.Location, InvoicesQuery4.TurnaroundTimesCD, InvoicesQuery4.Expr1010, InvoicesQuery4.Cases_ID, InvoicesQuery4.Party1, InvoicesQuery4.Party2, InvoicesQuery4.CaseNumber1, InvoicesQuery4.CaseNumber2, InvoicesQuery4.Jurisdiction, InvoicesQuery4.CustomersID, InvoicesQuery4.Company, InvoicesQuery4.FirstName, InvoicesQuery4.LastName, InvoicesQuery4.Address, InvoicesQuery4.City, InvoicesQuery4.State, InvoicesQuery4.ZIP, InvoicesQuery4.EmailAddress, InvoicesQuery4.InvoiceNo, InvoicesQuery4.Quantity, InvoicesQuery4.InventoryItemCode, InvoicesQuery4.DueDate, InvoicesQuery4.InvoiceDate, InvoicesQuery4.AccountCode, InvoicesQuery4.TaxType, InvoicesQuery4.BrandingTheme, CourtDatesBTRQuery2.CourtDatesID, CourtDatesBTRQuery2.Code, CourtDatesBTRQuery2.[Rate]
FROM InvoicesQuery4 INNER JOIN CourtDatesBTRQuery2 ON InvoicesQuery4.CourtDatesID=CourtDatesBTRQuery2.[CourtDatesID];




*/

/*


SELECT CourtDates.ID, CourtDates.AudioLength, CourtDates.TurnaroundTimesCD, CourtDates.DatePaid, CourtDates.DueDate, Cases.Jurisdiction, UncompletedStatusesQ.CourtDatesID
FROM (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN UncompletedStatusesQ ON CourtDates.[ID] = UncompletedStatusesQ.[CourtDatesID];


*/

/*

SELECT OrderingAttorneyInfo.ID AS OrderingAttorneyInfo_ID, OrderingAttorneyInfo.Company, OrderingAttorneyInfo.MrMs, OrderingAttorneyInfo.LastName, OrderingAttorneyInfo.FirstName, OrderingAttorneyInfo.EmailAddress, OrderingAttorneyInfo.BusinessPhone, OrderingAttorneyInfo.Address, OrderingAttorneyInfo.City, OrderingAttorneyInfo.State, OrderingAttorneyInfo.ZIP, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge, CourtDates.HearingDate, CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.InvoicesID, Rates.ID AS Rates_ID, Rates.Code, Rates.ProductName, Rates.[List Price], Orders.[Order ID], Orders.OrderDate, Orders.DateShip, Orders.DateFactored, Orders.PaymentType, Orders.DatePaid, Orders.CourtDatesID, Orders.InvoiceNumber, Orders.Quantity, Orders.InventoryItemCode, Orders.Reference, Orders.DueDate, Orders.InvoiceDate, Orders.AccountCode, Orders.TaxType, Orders.BrandingTheme
FROM ((Cases INNER JOIN OrderingAttorneyInfo ON Cases.[ID] = OrderingAttorneyInfo.[CasesID]) INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN (Rates INNER JOIN Orders ON Rates.[ID] = Orders.[InventoryItemCode]) ON CourtDates.[ID] = Orders.[CourtDatesID];


*/

/*

SELECT OrderingAttorneyInfo.ID AS OrderingAttorneyInfo_ID, OrderingAttorneyInfo.Company, OrderingAttorneyInfo.MrMs, OrderingAttorneyInfo.LastName, OrderingAttorneyInfo.FirstName, OrderingAttorneyInfo.EmailAddress, OrderingAttorneyInfo.BusinessPhone, OrderingAttorneyInfo.Address, OrderingAttorneyInfo.City, OrderingAttorneyInfo.State, OrderingAttorneyInfo.ZIP, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge, CourtDates.HearingDate, CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.InvoicesID, Rates.ID AS Rates_ID, Rates.Code, Rates.ProductName, Rates.[List Price], Orders.[Order ID], Orders.OrderDate, Orders.DateShip, Orders.DateFactored, Orders.PaymentType, Orders.DatePaid, Orders.CourtDatesID, Orders.InvoiceNumber, Orders.Quantity, Orders.InventoryItemCode, Orders.Reference, Orders.DueDate, Orders.InvoiceDate, Orders.AccountCode, Orders.TaxType, Orders.BrandingTheme AS BrandingTheme
FROM ((Cases INNER JOIN OrderingAttorneyInfo ON Cases.[ID] = OrderingAttorneyInfo.[CasesID]) INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN (Rates INNER JOIN Orders ON Rates.[ID] = Orders.[InventoryItemCode]) ON CourtDates.[ID] = Orders.[CourtDatesID];



*/

/*

SELECT Rates.ID, Rates.Code, Rates.[List Price], CourtDates.InventoryItemCode, CourtDates.ID
FROM Rates INNER JOIN CourtDates ON Rates.[ID] = CourtDates.[InventoryItemCode];


*/

/*

SELECT CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.StatusesID, CourtDates.AudioLength, CourtDates.DueDate, CourtDates.PaymentType, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Statuses.ID AS Statuses_ID, Statuses.CourtDatesID, Statuses.ContactsEntered, Statuses.JobEntered, Statuses.CoverPage, Statuses.AutoCorrect, Statuses.Schedule, Statuses.Invoice, Statuses.Transcribe, Statuses.AddRDtoCover, Statuses.FindReplaceRD, Statuses.HyperlinkTranscripts, Statuses.SpellingsEmail, Statuses.AudioProof, Statuses.InvoiceCompleted, Statuses.NoticeofService, Statuses.PackageEnclosedLetter, Statuses.CDLabel, Statuses.GenerateZIPs, Statuses.TranscriptsReady, Statuses.InvoicetoFactorEmail, Statuses.FileTranscript, Statuses.BurnCD, Statuses.ShippingXMLs, Statuses.GenerateShippingEM, Statuses.AddTrackingNumber
FROM (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN Statuses ON (CourtDates.[ID] = Statuses.[CourtDatesID]) AND (CourtDates.[StatusesID] = Statuses.[ID])
WHERE ((Statuses.ContactsEntered)=No) Or ((Statuses.JobEntered)=No) Or ((Statuses.CoverPage)=No) Or ((Statuses.AutoCorrect)=No) Or ((Statuses.Schedule)=No) Or ((Statuses.Invoice)=No);


*/

/*

SELECT CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.StatusesID, CourtDates.AudioLength, CourtDates.DueDate, CourtDates.PaymentType, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Statuses.ID AS Statuses_ID, Statuses.CourtDatesID, Statuses.ContactsEntered, Statuses.JobEntered, Statuses.CoverPage, Statuses.AutoCorrect, Statuses.Schedule, Statuses.Invoice, Statuses.Transcribe, Statuses.AddRDtoCover, Statuses.FindReplaceRD, Statuses.HyperlinkTranscripts, Statuses.SpellingsEmail, Statuses.AudioProof, Statuses.InvoiceCompleted, Statuses.NoticeofService, Statuses.PackageEnclosedLetter, Statuses.CDLabel, Statuses.GenerateZIPs, Statuses.TranscriptsReady, Statuses.InvoicetoFactorEmail, Statuses.FileTranscript, Statuses.BurnCD, Statuses.ShippingXMLs, Statuses.GenerateShippingEM, Statuses.AddTrackingNumber
FROM (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN Statuses ON (CourtDates.[StatusesID] = Statuses.[ID]) AND (CourtDates.[ID] = Statuses.[CourtDatesID])
WHERE (((Statuses.ContactsEntered)=Yes) AND ((Statuses.JobEntered)=Yes) AND ((Statuses.CoverPage)=Yes) AND ((Statuses.AutoCorrect)=Yes) AND ((Statuses.Schedule)=Yes) AND ((Statuses.Invoice)=Yes) AND ((Statuses.Transcribe)=No)) OR (((Statuses.AddRDtoCover)=No)) OR (((Statuses.FindReplaceRD)=No)) OR (((Statuses.HyperlinkTranscripts)=No)) OR (((Statuses.SpellingsEmail)=No));


*/

/*


SELECT CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.StatusesID, CourtDates.AudioLength, CourtDates.DueDate, CourtDates.PaymentType, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Statuses.ID AS Statuses_ID, Statuses.CourtDatesID, Statuses.ContactsEntered, Statuses.JobEntered, Statuses.CoverPage, Statuses.AutoCorrect, Statuses.Schedule, Statuses.Invoice, Statuses.Transcribe, Statuses.AddRDtoCover, Statuses.FindReplaceRD, Statuses.HyperlinkTranscripts, Statuses.SpellingsEmail, Statuses.AudioProof, Statuses.InvoiceCompleted, Statuses.NoticeofService, Statuses.PackageEnclosedLetter, Statuses.CDLabel, Statuses.GenerateZIPs, Statuses.TranscriptsReady, Statuses.InvoicetoFactorEmail, Statuses.FileTranscript, Statuses.BurnCD, Statuses.ShippingXMLs, Statuses.GenerateShippingEM, Statuses.AddTrackingNumber
FROM (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN Statuses ON CourtDates.[ID] = Statuses.[CourtDatesID]
WHERE (((Statuses.ContactsEntered)=Yes) AND ((Statuses.JobEntered)=Yes) AND ((Statuses.CoverPage)=Yes) AND ((Statuses.AutoCorrect)=Yes) AND ((Statuses.Schedule)=Yes) AND ((Statuses.Invoice)=Yes) AND ((Statuses.Transcribe)=Yes) AND ((Statuses.AudioProof)=No) AND ((Statuses.InvoiceCompleted)=No));


*/

/*


SELECT CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.StatusesID, CourtDates.AudioLength, CourtDates.DueDate, CourtDates.PaymentType, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Statuses.ID AS Statuses_ID, Statuses.CourtDatesID, Statuses.ContactsEntered, Statuses.JobEntered, Statuses.CoverPage, Statuses.AutoCorrect, Statuses.Schedule, Statuses.Invoice, Statuses.Transcribe, Statuses.AddRDtoCover, Statuses.FindReplaceRD, Statuses.HyperlinkTranscripts, Statuses.SpellingsEmail, Statuses.AudioProof, Statuses.InvoiceCompleted, Statuses.NoticeofService, Statuses.PackageEnclosedLetter, Statuses.CDLabel, Statuses.GenerateZIPs, Statuses.TranscriptsReady, Statuses.InvoicetoFactorEmail, Statuses.FileTranscript, Statuses.BurnCD, Statuses.ShippingXMLs, Statuses.GenerateShippingEM, Statuses.AddTrackingNumber
FROM (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN Statuses ON CourtDates.[ID] = Statuses.[CourtDatesID]
WHERE (((Statuses.ContactsEntered)=Yes) AND ((Statuses.JobEntered)=Yes) AND ((Statuses.CoverPage)=Yes) AND ((Statuses.AutoCorrect)=Yes) AND ((Statuses.Schedule)=Yes) AND ((Statuses.Invoice)=Yes) AND ((Statuses.Transcribe)=Yes) AND ((Statuses.AudioProof)=No) AND ((Statuses.InvoiceCompleted)=No));


*/

/*


SELECT CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.StatusesID, CourtDates.AudioLength, CourtDates.DueDate, CourtDates.PaymentType, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Statuses.ID AS Statuses_ID, Statuses.CourtDatesID, Statuses.ContactsEntered, Statuses.JobEntered, Statuses.CoverPage, Statuses.AutoCorrect, Statuses.Schedule, Statuses.Invoice, Statuses.Transcribe, Statuses.AddRDtoCover, Statuses.FindReplaceRD, Statuses.HyperlinkTranscripts, Statuses.SpellingsEmail, Statuses.AudioProof, Statuses.InvoiceCompleted, Statuses.NoticeofService, Statuses.PackageEnclosedLetter, Statuses.CDLabel, Statuses.GenerateZIPs, Statuses.TranscriptsReady, Statuses.InvoicetoFactorEmail, Statuses.FileTranscript, Statuses.BurnCD, Statuses.ShippingXMLs, Statuses.GenerateShippingEM, Statuses.AddTrackingNumber
FROM (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN Statuses ON (CourtDates.[StatusesID] = Statuses.[ID]) AND (CourtDates.[ID] = Statuses.[CourtDatesID])
WHERE (((Statuses.ContactsEntered)=Yes) AND ((Statuses.JobEntered)=Yes) AND ((Statuses.CoverPage)=Yes) AND ((Statuses.AutoCorrect)=Yes) AND ((Statuses.Schedule)=Yes) AND ((Statuses.Invoice)=Yes) AND ((Statuses.Transcribe)=Yes) AND ((Statuses.AddRDtoCover)=Yes) AND ((Statuses.FindReplaceRD)=Yes) AND ((Statuses.HyperlinkTranscripts)=Yes) AND ((Statuses.SpellingsEmail)=Yes) AND ((Statuses.AudioProof)=Yes) AND ((Statuses.InvoiceCompleted)=No) OR ((Statuses.AddTrackingNumber)=No));

*/

/*

SELECT DSum([CourtDates].[Subtotal],"PaymentQueryInvoiceInfo") AS FinalPrice, Payments.ID AS PaymentsID, Payments.InvoiceNo AS pInvoiceNo, Payments.Amount, Payments.RemitDate, CourtDates.ID AS CourtDatesID, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.TurnaroundTimesCD, CourtDates.DueDate, CourtDates.InvoiceNo AS cInvoiceNo, CourtDates.InvoiceDate, CourtDates.PaymentDueDate, CourtDates.Subtotal, CourtDates.UnitPrice
FROM Payments INNER JOIN CourtDates ON Payments.InvoiceNo = CourtDates.InvoiceNo
WHERE (((CourtDates.ID)=[Forms]![NewMainMenu]![ProcessJobSubformNMM].[Form]![JobNumberField]));


*/

/*

SELECT Payments.ID AS ["PaymentsID"], Payments.InvoiceNo AS ["PaymentsInvoiceNo"], Payments.Amount AS ["Amount"], Payments.RemitDate AS ["RemitDate"], CourtDates.ID AS ["CourtDatesID"], CourtDates.HearingDate AS ["HearingDate"], CourtDates.HearingStartTime AS ["HearingStartTime"], CourtDates.HearingEndTime AS ["HearingEndTime"], CourtDates.CasesID AS ["CasesID"], CourtDates.OrderingID AS ["OrderingID"], CourtDates.AudioLength AS ["AudioLength"], CourtDates.TurnaroundTimesCD AS ["TurnaroundTimesCD"], CourtDates.InvoiceNo AS ["InvoiceNo"], CourtDates.InvoiceDate AS ["InvoiceDate"], CourtDates.PaymentDueDate AS ["PaymentDueDate"], CourtDates.UnitPrice AS ["UnitPrice"], CourtDates.Quantity AS ["Quantity"], CourtDates.Subtotal AS ["Subtotal"]
FROM Payments INNER JOIN CourtDates ON Payments.InvoiceNo=CourtDates.InvoiceNo;


*/

/*


SELECT Payments.InvoiceNo AS pInvoiceNo, CourtDates.ID AS CourtDatesID, CourtDates.UnitPrice, CourtDates.ActualQuantity, CourtDates.AudioLength, CourtDates.InvoiceDate, DSum([CourtDates].[Subtotal],"PaymentQueryInvoiceInfo3") AS FinalPrice, Payments.ID AS PaymentsID, Payments.Amount, Payments.RemitDate, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.TurnaroundTimesCD, CourtDates.DueDate, CourtDates.InvoiceNo AS cInvoiceNo, CourtDates.PaymentDueDate, CourtDates.Subtotal
FROM Payments INNER JOIN CourtDates ON Payments.InvoiceNo = CourtDates.InvoiceNo
WHERE (((Payments.InvoiceNo)=[Forms]![NewMainMenu]![ProcessJobSubformNMM].[Form]![InvoiceNo]));

*/

/*

SELECT InvoicesQuery4.EmailAddress AS [Recipient Email], InvoicesQuery4.FirstName AS [Recipient First Name], InvoicesQuery4.LastName AS [Recipient Last Name], InvoicesQuery4.InvoiceNo AS [Invoice Number], (DateAdd("d", 1, Date())) AS [Due Date], InvoicesQuery4.CourtDatesID AS Reference, CourtDatesRatesQuery.Code AS [Item Name], "|   " & InvoicesQuery4.Party1 & "  v. " & InvoicesQuery4.Party2 & "   |"   & Chr(13) & "|   " & InvoicesQuery4.CaseNumber1 & "   " & InvoicesQuery4.CaseNumber2 & "   |   Hearing Date:  " & InvoicesQuery4.HearingDate & "   |" & Chr(13) & "|   Approx. " & InvoicesQuery4.AudioLength & " minutes   |   " & InvoicesQuery4.TurnaroundTimesCD & " calendar-day turnaround   |" & Chr(13) & "   |" AS Description, InvoicesQuery4.Quantity AS [Item Amount], "" AS [Shipping Cost], "" AS [Discount Amount], "USD" AS [Currency Code], "Once both audio and a deposit has been received, the turnaround time will begin.  We will complete the transcript.  After transcript completion and final payment, the transcript will be filed if applicable as well as e-mailed to you in Word and PDF versions.  We will upload it to our online repository for your 24/7 access.  Two copies are included in our rate.  If we are filing this with the Court of Appeals, one is mailed to the court and the other to you.  Otherwise, you will receive both copies.  Our transcripts also include a weatherproof color-labeled CD of your audio and transcript.  If you don't want the hard copies mailed or just want the CD, that's fine, too; just let us know.  If this is filed with the Court of Appeals, you will receive a notification upon filing directly from the court.  If I have any spellings questions or things like that (hopefully not), I will let you know." AS [Note to Customer], "This is an invoice for deposit.  The deposit amount has been calculated as 100 percent of the estimated cost of the transcript.  The balance remaining will be due/refunded upon completion of the transcript after a final page count has been determined.  Please check out our full terms of service at http://www.aquoco.co/ServiceA.html.  Thank you for your business." AS [Terms and Conditions], InvoicesQuery4.CourtDatesID AS [Memo to Self]
FROM InvoicesQuery4 INNER JOIN CourtDatesRatesQuery ON CourtDatesRatesQuery.CourtDatesID=InvoicesQuery4.CourtDatesID
WHERE (InvoicesQuery4.CourtDatesID=Forms![NewMainMenu]![ProcessJobSubformNMM].Form![JobNumberField]);


*/

/*

SELECT InvoicesQuery4.EmailAddress AS [Recipient Email], InvoicesQuery4.FirstName AS [Recipient First Name], InvoicesQuery4.LastName AS [Recipient Last Name], InvoicesQuery4.InvoiceNo AS [Invoice Number], (DateAdd("d", 1, Date())) AS [Due Date], InvoicesQuery4.CourtDatesID AS Reference, CourtDatesRatesQuery.Code AS [Item Name], "|   " & InvoicesQuery4.Party1 & "  v. " & InvoicesQuery4.Party2 & "   |"   & Chr(13) & "|   " & InvoicesQuery4.CaseNumber1 & "   " & InvoicesQuery4.CaseNumber2 & "   |   Hearing Date:  " & InvoicesQuery4.HearingDate & "   |" & Chr(13) & "|   Approx. " & InvoicesQuery4.AudioLength & " minutes   |   " & InvoicesQuery4.TurnaroundTimesCD & " calendar-day turnaround   |" & Chr(13) & "   |" AS Description, InvoicesQuery4.Quantity AS [Item Amount], "" AS [Shipping Cost], "" AS [Discount Amount], "USD" AS [Currency Code], "This is an order confirmation and estimated price quote for the work you requested.  The details of your request and due date is listed on this quote for your convenience.  In terms of next steps, once audio has been received, the turnaround time will begin.  We will complete the transcript.  After transcript completion, the transcript will be filed if applicable as well as e-mailed to you in Word and PDF versions.  We will upload the transcript to our online repository for your 24/7 access.    You will receive an invoice at the time of completion.  Two copies are included in our rate.  If we are filing this with the Court of Appeals, one is mailed to the court and the other to you.  Otherwise, you will receive both copies.  Our transcripts also include a weatherproof color-labeled CD of your audio and transcript.  If you don't want the hard copies mailed or just want the CD, that's fine, too; just let us know.  Otherwise, we will just mail out as described previously.  If this is filed with the Court of Appeals, you will receive a notification upon filing directly from the court." AS [Note to Customer], "Please pay within 28 days.  5% interest if payment received after 28 calendar days of invoice date, additional 1% interest added every 7th calendar day after day 28 up to a maximum of 12%.  Please submit payment to A Quo Co., c/o American Funding Solutions, PO Box 572, Blue Springs, MO 64013.  Please check out our full terms of service at http://www.aquoco.co/ServiceA.html.  Thank you for your business." AS [Terms and Conditions], InvoicesQuery4.CourtDatesID AS [Memo to Self]
FROM InvoicesQuery4 INNER JOIN CourtDatesRatesQuery ON CourtDatesRatesQuery.CourtDatesID=InvoicesQuery4.CourtDatesID
WHERE (InvoicesQuery4.CourtDatesID=Forms![NewMainMenu]![ProcessJobSubformNMM].Form![JobNumberField]);


*/

/*

SELECT CourtDates.ID AS CourtDatesID, CourtDates.CasesID AS CasesID, Cases.Jurisdiction, Doctors.LX, Doctors.L1, Doctors.L2, Doctors.L3, Doctors.L4, Doctors.L5, Doctors.L6, Doctors.L7, Doctors.L8, Doctors.L9, Doctors.L10, Doctors.L11, Doctors.L12, Doctors.L13, Doctors.L14, Doctors.L15, Doctors.L16, Doctors.L17, Doctors.L18, Doctors.L19, Doctors.L20, Doctors.L21, Doctors.L22, Doctors.L23, Doctors.L24, Doctors.L25, Doctors.L26, Doctors.L27, Doctors.L28, Doctors.L29, Doctors.L30, Doctors.L31, Doctors.L32, Doctors.L33, Doctors.L34, Doctors.L35, Doctors.L36, Doctors.L37, Doctors.L38, Doctors.L39, Doctors.L40, Doctors.L41, Doctors.L42, Doctors.L43, Doctors.L44, Doctors.L45, Doctors.L46, Doctors.L47, Doctors.L48, Doctors.L49, Doctors.L50, Doctors.L51, Doctors.L52, Doctors.L53, Doctors.L54, Doctors.L55, Doctors.L56, Doctors.L57, Doctors.L58, Doctors.L59, Doctors.L60, Doctors.L61, Doctors.L62, Doctors.L63, Doctors.L64, Doctors.L65, Doctors.L66, Doctors.L67, Doctors.L68, Doctors.L69, Doctors.L70
FROM (Cases INNER JOIN Doctors ON (Cases.[Jurisdiction] = Doctors.[Jurisdiction]) AND (Cases.[ID] = Doctors.[CasesID])) INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]
WHERE (((CourtDates.ID)=(Forms![NewMainMenu]![ProcessJobSubformNMM].Form![JobNumberField])));


*/

/*

SELECT Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.ID, CourtDates.CasesID, CourtDates.App1, CourtDates.App2, CourtDates.App3, CourtDates.App4, CourtDates.App5, CourtDates.App6, CourtDates.OrderingID
FROM Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID];



*/

/*

SELECT Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.ID, CourtDates.Quantity, CourtDates.CasesID, CourtDates.App1, CourtDates.App2, CourtDates.App3, CourtDates.App4, CourtDates.App5, CourtDates.App6, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.TurnaroundTImesCD, CourtDates.PaymentDueDate, CourtDates.UnitPrice, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.Location, CourtDates.InvoiceNo, CourtDates.FactoringCost, CourtDates.InvoiceDate, CourtDates.Subtotal, CourtDates.FinalPrice, CourtDates.PaymentSum, CourtDates.EstimatedPageCount, CourtDates.DueDate
FROM Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID];


*/
