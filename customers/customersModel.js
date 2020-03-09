const db = require('../data/dbConfig');

// list of all functions used for customer table
module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// returns list of customers, displays customersid, username, email
function find() {
	return db('customers').select('customersid', 'username', 'email');
}

// returns list of customers or single customer, displays all fields
function findBy(filter) {
	return db('customers').where(filter);
}

// adds a customer (register function)
async function add(customer) {
	const [customersid] = await db('customers').insert(customer, 'customersid');
	return findById(customersid);
}

// returns a customer by ID number
function findById(customersid) {
	return db('customers')
		.select('customersid', 'username', 'email')
		.where({ customersid })
		.first();
}

// updates a customer
function update(customersid, user) {
	return db('customers')
		.where('customersid', Number(customersid))
		.update(user);
}

// deletes a customer
// TODO: Make sure it removes all associated data
function remove(customersid) {
	return db('customers')
		.where('customersid', Number(customersid))
		.del();
}

/*

SELECT [Customers].[ID], [Customers].[Company], [Customers].[LastName], [Customers].[FirstName], [Customers].[Address], [Customers].[City]
FROM Customers
ORDER BY [LastName];

*/

/*

SELECT DISTINCTROW *
FROM Customers;

*/

/*

SELECT Customers.ID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.JobTitle, Customers.EmailAddress, Customers.City, Customers.State
FROM Customers
ORDER BY Customers.[Company];

*/

/*

SELECT [Customers].[ID]
FROM Customers;


*/

/*

SELECT *
FROM Customers INNER JOIN CourtDates ON Customers.ID = CourtDates.OrderingID
WHERE ((CourtDates.ID) Like Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField);

SELECT *
FROM Customers INNER JOIN CourtDates ON Customers.ID = CourtDates.App1
WHERE ((CourtDates.ID) Like Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField);

SELECT *
FROM Customers INNER JOIN CourtDates ON Customers.ID = CourtDates.App2
WHERE ((CourtDates.ID) Like Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField);

SELECT *
FROM Customers INNER JOIN CourtDates ON Customers.ID = CourtDates.App3
WHERE ((CourtDates.ID) Like Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField);

SELECT *
FROM Customers INNER JOIN CourtDates ON Customers.ID = CourtDates.App4
WHERE ((CourtDates.ID) Like Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField);

SELECT *
FROM Customers INNER JOIN CourtDates ON Customers.ID = CourtDates.App5
WHERE ((CourtDates.ID) Like Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField);

SELECT *
FROM Customers INNER JOIN CourtDates ON Customers.ID = CourtDates.App6
WHERE ((CourtDates.ID) Like Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField);


*/

/*

SELECT Customers.ID, Customers.FactoringApproved, Customers.MrMs, Customers.[Company], Customers.[LastName], Customers.[FirstName], Customers.[BusinessPhone], Customers.EmailAddress, Customers.Address, Customers.City, Customers.[State], Customers.[ZIP], Courtdates.HearingDate, Courtdates.HearingStartTime, Courtdates.HearingEndTime, Courtdates.CasesID, Courtdates.OrderingID, Courtdates.AudioLength, Courtdates.Location, Courtdates.TurnaroundTimesCD, CourtDates.Subtotal, CourtDates.Quantity, Courtdates.DueDate, Courtdates.InvoiceNo, CourtDates.ID AS CourtDatesID, Courtdates.FiledNotFiled, Courtdates.InvoiceDate, Courtdates.PaymentDueDate, Courtdates.Quantity, CourtDates.ActualQuantity, CourtDates.UnitPrice, Courtdates.ExpectedAdvanceDate, Courtdates.ExpectedRebateDate, Courtdates.EstimatedPageCount, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, CourtDates.ShipDate, CourtDates.FactoringCost, CourtDates.TrackingNumber, CourtDates.Factored, CourtDates.FinalPrice
FROM Customers INNER JOIN (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) ON Customers.[ID] = CourtDates.[OrderingID];

SELECT CourtDates.InvoiceDate AS InvoiceDate, CourtDates.ID AS CourtDatesID, (DateAdd('d',1,InvoiceDate)) AS PaymentDueDate
FROM CourtDates INNER JOIN UnitPrice ON CourtDates.[UnitPrice] = UnitPrice.[ID];

SELECT CourtDates.ID, CourtDates.HearingDate, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.Location, Orders.InventoryItemCode, Cases.ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.Judge, Cases.HearingTitle, Rates.Code, Rates.ProductName, Rates.[List Price], Orders.OrderDate, Orders.DateShip, Orders.DateFactored, Orders.PaymentType, Orders.DatePaid, Orders.CourtDatesID, Orders.InvoiceNumber, Orders.Quantity, Orders.Reference, Orders.DueDate, Orders.InvoiceDate, Orders.InventoryItemCode, Orders.AccountCode, Orders.TaxType, Orders.BrandingTheme, Customers.ID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.EmailAddress, Customers.Address, Customers.City, Customers.State, Customers.ZIP
FROM Customers INNER JOIN ((Cases INNER JOIN CourtDates ON CourtDates.[CasesID] = Cases.[ID]) INNER JOIN (Rates INNER JOIN Orders ON Rates.[Code] = Orders.[InventoryItemCode]) ON CourtDates.[ID] = Orders.[CourtDatesID]) ON Customers.[ID] = CourtDates.[OrderingID]
WHERE (((CourtDates.ID)=Orders.Reference) And ((CourtDates.CasesID)=Cases.ID) And ((CourtDates.OrderingID)=Customers.ID) And ((Orders.Reference)=Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField));

SELECT OrderingAttorneyInfo.ID AS OrderingAttorneyInfo_ID, OrderingAttorneyInfo.Company, OrderingAttorneyInfo.MrMs, OrderingAttorneyInfo.LastName, OrderingAttorneyInfo.FirstName, OrderingAttorneyInfo.EmailAddress, OrderingAttorneyInfo.BusinessPhone, OrderingAttorneyInfo.Address, OrderingAttorneyInfo.City, OrderingAttorneyInfo.State, OrderingAttorneyInfo.ZIP, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge, CourtDates.HearingDate, CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.InvoicesID, Rates.ID AS Rates_ID, Rates.Code, Rates.ProductName, Rates.[List Price], Orders.[Order ID], Orders.OrderDate, Orders.DateShip, Orders.DateFactored, Orders.PaymentType, Orders.DatePaid, Orders.CourtDatesID, Orders.InvoiceNumber, Orders.Quantity, Orders.InventoryItemCode, Orders.Reference, Orders.DueDate, Orders.InvoiceDate, Orders.AccountCode, Orders.TaxType, Orders.BrandingTheme
FROM ((Cases INNER JOIN OrderingAttorneyInfo ON Cases.[ID] = OrderingAttorneyInfo.[CasesID]) INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN (Rates INNER JOIN Orders ON Rates.[ID] = Orders.[InventoryItemCode]) ON CourtDates.[ID] = Orders.[CourtDatesID];

SELECT OrderingAttorneyInfo.ID AS OrderingAttorneyInfo_ID, OrderingAttorneyInfo.Company, OrderingAttorneyInfo.MrMs, OrderingAttorneyInfo.LastName, OrderingAttorneyInfo.FirstName, OrderingAttorneyInfo.EmailAddress, OrderingAttorneyInfo.BusinessPhone, OrderingAttorneyInfo.Address, OrderingAttorneyInfo.City, OrderingAttorneyInfo.State, OrderingAttorneyInfo.ZIP, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge, CourtDates.HearingDate, CourtDates.ID AS CourtDates_ID, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.InvoicesID, Rates.ID AS Rates_ID, Rates.Code, Rates.ProductName, Rates.[List Price], Orders.[Order ID], Orders.OrderDate, Orders.DateShip, Orders.DateFactored, Orders.PaymentType, Orders.DatePaid, Orders.CourtDatesID, Orders.InvoiceNumber, Orders.Quantity, Orders.InventoryItemCode, Orders.Reference, Orders.DueDate, Orders.InvoiceDate, Orders.AccountCode, Orders.TaxType, Orders.BrandingTheme AS BrandingTheme
FROM ((Cases INNER JOIN OrderingAttorneyInfo ON Cases.[ID] = OrderingAttorneyInfo.[CasesID]) INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) INNER JOIN (Rates INNER JOIN Orders ON Rates.[ID] = Orders.[InventoryItemCode]) ON CourtDates.[ID] = Orders.[CourtDatesID];

SELECT CourtDates.ID AS CourtDatesID, CourtDates.ID AS Reference, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.Location, CourtDates.TurnaroundTimesCD, CourtDates.InvoiceNo, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Customers.ID AS CustomersID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.EmailAddress, CourtDates.InvoiceNo, CourtDates.Quantity, CourtDates.InventoryRateCode AS InventoryItemCode, CourtDates.DueDate, CourtDates.InvoiceDate, CourtDates.AccountCode, CourtDates.TaxType, CourtDates.BrandingTheme, CourtDates.FinalPrice, CourtDates.ActualQuantity
FROM Customers INNER JOIN (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) ON Customers.[ID] = CourtDates.[OrderingID];

SELECT InvoicesQuery4.CourtDatesID, InvoicesQuery4.BrandingTheme AS IQ4BrandingTheme, BrandingThemes.ID, BrandingThemes.BrandingTheme AS BTBrandingTheme
FROM InvoicesQuery4 INNER JOIN BrandingThemes ON InvoicesQuery4.[BrandingTheme]=BrandingThemes.[ID];

SELECT CourtDates.ID AS CourtDatesID, CourtDates.ID AS Reference, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.Location, CourtDates.TurnaroundTimesCD, CourtDates.InvoiceNo, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Customers.ID AS CustomersID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.EmailAddress, CourtDates.InvoiceNo, CourtDates.Quantity, CourtDates.InventoryRateCode AS InventoryItemCode, CourtDates.DueDate, CourtDates.InvoiceDate, CourtDates.AccountCode, CourtDates.TaxType, CourtDates.BrandingTheme, CourtDates.subtotal, CourtDates.FinalPrice, CourtDates.ActualQuantity
FROM Customers INNER JOIN (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) ON Customers.[ID] = CourtDates.[OrderingID]
WHERE CourtDates.FinalPrice = 0;

SELECT Customers.ID AS CustomersID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.BusinessPhone, Customers.EmailAddress, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.FactorApvlID, Customers.FactoringApproved, CourtDates.ID AS CourtDates_ID, CourtDates.HearingDate, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, Cases.Party1, Cases.ID AS Cases_ID, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, CourtDates.FinalPrice, CourtDates.ActualQuantity, CourtDates.InvoiceDate, Payments.Amount, Payments.RemitDate, CourtDates.InvoiceNo
FROM ((CourtDates INNER JOIN Cases ON CourtDates.CasesID=Cases.ID) INNER JOIN Customers ON CourtDates.[OrderingID] =[Customers].[ID]) INNER JOIN Payments ON CourtDates.InvoiceNo=Payments.InvoiceNo;

SELECT CourtDates.ID AS CourtDatesID, CourtDates.InvoiceDate, CourtDates.ActualQuantity, CourtDates.FinalPrice, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.DueDate, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceNo, CourtDates.CasesID, Cases.ID AS Cases_ID, Cases.Party1, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Customers.ID AS Customers_ID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.FactoringApproved, Expenses.ID AS ExpensesID, Expenses.Vendor, Expenses.ExpensesDate, Expenses.Amount, Expenses.Memo, Expenses.CourtDatesID, Expenses.InvoiceNo
FROM Customers INNER JOIN (Cases INNER JOIN (Expenses INNER JOIN CourtDates ON Expenses.[InvoiceNo] = CourtDates.[InvoiceNo]) ON Cases.[ID] = CourtDates.[CasesID]) ON Customers.[ID] = CourtDates.[OrderingID];



*/

/*

SELECT MaxCourtDatesUnion.ID AS MaxCourtDatesUnion_ID, MaxCourtDatesUnion.HearingDate, MaxCourtDatesUnion.HearingStartTime, MaxCourtDatesUnion.HearingEndTime, MaxCourtDatesUnion.CasesID, MaxCourtDatesUnion.App1, MaxCourtDatesUnion.App2, MaxCourtDatesUnion.App3, MaxCourtDatesUnion.App4, MaxCourtDatesUnion.App5, MaxCourtDatesUnion.App6, MaxCourtDatesUnion.OrderingID, MaxCourtDatesUnion.StatusesID, MaxCourtDatesUnion.AudioLength, MaxCourtDatesUnion.Location, MaxCourtDatesUnion.TurnaroundTimesCD, MaxCourtDatesUnion.InvoiceNo, MaxCourtDatesUnion.DueDate, MaxCourtDatesUnion.ShipDate, MaxCourtDatesUnion.TrackingNumber, MaxCourtDatesUnion.PaymentType, MaxCourtDatesUnion.Notes, MaxCourtDatesUnion.ShippingOptionsID, MaxCourtDatesUnion.SPKRID, MaxCourtDatesUnion.AGShortcuts, MaxCourtDatesUnion.CDLabel, MaxCourtDatesUnion.RoughDraft, MaxCourtDatesUnion.AutoCorrect, MaxCourtDatesUnion.PackageEnclosedLetter, MaxCourtDatesUnion.TranscriptsReady, MaxCourtDatesUnion.FactorCustApvl, MaxCourtDatesUnion.CoverPage, MaxCourtDatesUnion.FactorInvFactor, MaxCourtDatesUnion.FiledNotFiled, MaxCourtDatesUnion.Factored, MaxCourtDatesUnion.InvoiceDate, MaxCourtDatesUnion.PaymentDueDate, MaxCourtDatesUnion.FactoringInterestID, MaxCourtDatesUnion.ExpectedRebateDate, MaxCourtDatesUnion.EstimatedPageCount, MaxCourtDatesUnion.FactoringCost, MaxCourtDatesUnion.UnitPrice, MaxCourtDatesUnion.Quantity, MaxCourtDatesUnion.ActualQuantity, MaxCourtDatesUnion.Subtotal, MaxCourtDatesUnion.ExpectedAdvanceDate, MaxCourtDatesUnion.FinalPrice, MaxCourtDatesUnion.PaymentSum, MaxCourtDatesUnion.InventoryRateCode, MaxCourtDatesUnion.AccountCode, MaxCourtDatesUnion.TaxType, MaxCourtDatesUnion.BrandingTheme, MaxCourtDatesUnion.CourtDatesID, Cases.ID AS CasesID, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Customers.ID AS Customers_ID, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.JobTitle, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.FactoringApproved
FROM Customers INNER JOIN (Cases INNER JOIN MaxCourtDatesUnion ON Cases.[ID] = MaxCourtDatesUnion.[CasesID]) ON Customers.[ID] = MaxCourtDatesUnion.[OrderingID];



*/

/*

SELECT CourtDates.ID AS CourtDatesID, CourtDates.InvoiceNo AS OAIInvoiceNo, CourtDates.Subtotal AS OAISubtotal, CourtDates.Quantity AS OAIQuantity, CourtDates.UnitPrice AS OAIUnitPrice, CourtDates.PaymentSum AS PaymentSum, Customers.ID AS CustomersID, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.FaxNumber, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.Notes, Customers.FactoringApproved, CourtDates.CasesID AS OAICasesID
FROM Customers INNER JOIN CourtDates ON Customers.ID = CourtDates.OrderingID
WHERE (((CourtDates.ID)=[Forms]![NewMainMenu]![ProcessJobSubformNMM].[Form]![JobNumberField]));


*/

/*



SELECT CourtDates.ID AS CourtdatesID, CourtDates.InvoiceNo AS InvoiceNo, Customers.ID AS CustomersID, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.FaxNumber, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.Notes, Customers.FactoringApproved, CourtDates.CasesID
FROM Customers INNER JOIN CourtDates ON CourtDates.OrderingID = Customers.ID
WHERE CourtDates.ID = [CourtDatesID];

*/

/*


SELECT Customers.ID, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.FactoringApproved
FROM Customers INNER JOIN InvoiceInfoQ ON Customers.ID = InvoiceInfoQ.ID
WHERE (((Customers.ID)=[InvoiceInfoQ].[OrderingID]));

*/

/*


SELECT QInfobyInvoiceNumber.ID AS QInfobyInvoiceNumber_ID, QInfobyInvoiceNumber.Party1, QInfobyInvoiceNumber.Party2, QInfobyInvoiceNumber.Party1Name, QInfobyInvoiceNumber.Party2Name, QInfobyInvoiceNumber.CaseNumber1, QInfobyInvoiceNumber.CaseNumber2, QInfobyInvoiceNumber.Jurisdiction, QInfobyInvoiceNumber.HearingTitle, QInfobyInvoiceNumber.Judge, QInfobyInvoiceNumber.InvoiceNo, QInfobyInvoiceNumber.UnitPrice, QInfobyInvoiceNumber.Quantity, QInfobyInvoiceNumber.Subtotal, QInfobyInvoiceNumber.AudioLength, QInfobyInvoiceNumber.TurnaroundTimesCD, QInfobyInvoiceNumber.DueDate, QInfobyInvoiceNumber.InvoiceDate, QInfobyInvoiceNumber.HearingStartTime, QInfobyInvoiceNumber.HearingEndTime, QInfobyInvoiceNumber.HearingDate, QInfobyInvoiceNumber.CasesID, QInfobyInvoiceNumber.OrderingID, QInfobyInvoiceNumber.FiledNotFiled, QInfobyInvoiceNumber.PaymentDueDate, QInfobyInvoiceNumber.ExpectedAdvanceDate, QInfobyInvoiceNumber.ExpectedRebateDate, QInfobyInvoiceNumber.EstimatedPageCount, Customers.ID AS Customers_ID, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.JobTitle, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.FactoringApproved, (QInfobyInvoiceNumber.[Subtotal]*.8) AS ExpectedAdvanceAmount
FROM Customers INNER JOIN QInfobyInvoiceNumber ON Customers.[ID] = QInfobyInvoiceNumber.[OrderingID];

*/

/*

SELECT DISTINCT CourtDates.OrderingID, Customers.Company, Customers.FirstName, Customers.LastName, CourtDates.InvoiceNo AS cInvoiceNo, CourtDates.InvoiceDate AS cInvoiceDate, QEstimatedPricebyInvoiceNumber.InvoiceNo AS qInvoiceNo, QEstimatedPricebyInvoiceNumber.Subtotal AS qSubtotal, QEstimatedPricebyInvoiceNumber.PageCount AS qPageCount, QEstimatedPricebyInvoiceNumber.AudioLength AS qAudioLength
FROM Customers INNER JOIN (QEstimatedPricebyInvoiceNumber INNER JOIN CourtDates ON QEstimatedPricebyInvoiceNumber.[InvoiceNo] = CourtDates.[InvoiceNo]) ON Customers.[ID] = CourtDates.[OrderingID]
WHERE (((QEstimatedPricebyInvoiceNumber.InvoiceNo)=[CourtDates].[InvoiceNo]))
GROUP BY QEstimatedPricebyInvoiceNumber.InvoiceNo, CourtDates.InvoiceNo, CourtDates.OrderingID, Customers.Company, Customers.FirstName, Customers.LastName, CourtDates.InvoiceDate, QEstimatedPricebyInvoiceNumber.Subtotal, QEstimatedPricebyInvoiceNumber.PageCount, QEstimatedPricebyInvoiceNumber.AudioLength;



*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, Cases.ID, CourtDates.CasesID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM Customers INNER JOIN (Cases INNER JOIN CourtDates ON Cases.[ID] = CourtDates.[CasesID]) ON Customers.[ID] = CourtDates.[OrderingID]
WHERE (((Customers.Company) Like [Enter search term to search companies; enter a * before and after to search with wildcard or it will search exact match:]));



*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM Customers, CourtDates INNER JOIN Cases ON CourtDates.CasesID = Cases.ID
WHERE (((Cases.Judge) Like [Enter search term to search judges; enter a * before and after to search with wildcard or it will search exact match:]));



*/

/*


SELECT CourtDates.ID, Customers.ID, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.FaxNumber, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.Notes, CourtDates.CasesID
FROM Customers INNER JOIN CourtDates ON (CourtDates.App1 = Customers.ID) OR (CourtDates.App2 = Customers.ID) OR (CourtDates.App3 = Customers.ID) OR (CourtDates.App4 = Customers.ID) OR (CourtDates.App5 = Customers.ID) OR (CourtDates.App6 = Customers.ID)
WHERE (CourtDates.ID=Forms![NewMainMenu]![ProcessJobSubformNMM].Form![JobNumberField]);

*/

/*

SELECT Customers.ID, Customers.MrMs, Customers.[Company], Customers.[LastName], Customers.[FirstName], Customers.[BusinessPhone], Customers.Address, Customers.City, Customers.[State], Customers.[ZIP], Customers.FactoringApproved, Customers.EmailAddress, Customers.Notes, GetInvoiceNoFromCDID.Subtotal*.8 AS EstimatedAdvanceAmount
FROM Customers INNER JOIN GetInvoiceNoFromCDID ON Customers.ID=[GetInvoiceNoFromCDID].OrderingID
WHERE Customers.ID=[GetInvoiceNoFromCDID].OrderingID;



*/

/*


SELECT Customers.ID, Customers.MrMs, Customers.[Company], Customers.[LastName], Customers.[FirstName], Customers.[BusinessPhone], Customers.Address, Customers.City, Customers.[State], Customers.[ZIP], Customers.FactoringApproved, Customers.EmailAddress, Customers.Notes
FROM Customers INNER JOIN [TR-Court-Q] ON (Customers.ID=[TR-Court-Q].OrderingID) OR (Customers.ID=[TR-Court-Q].App1) Or (Customers.ID=[TR-Court-Q].App2) Or (Customers.ID=[TR-Court-Q].App3) Or (Customers.ID=[TR-Court-Q].App4) Or (Customers.ID=[TR-Court-Q].App5) Or (Customers.ID=[TR-Court-Q].App6)
WHERE Customers.ID=[TR-Court-Q].OrderingID OR Customers.ID=[TR-Court-Q].App1 Or Customers.ID=[TR-Court-Q].App2 Or Customers.ID=[TR-Court-Q].App3 Or Customers.ID=[TR-Court-Q].App4 Or Customers.ID=[TR-Court-Q].App5 Or Customers.ID=[TR-Court-Q].App6;


*/

/*


SELECT Customers.ID, Customers.MrMs, Customers.[Company], Customers.[LastName], Customers.[FirstName], Customers.[BusinessPhone], Customers.Address, Customers.City, Customers.[State], Customers.[ZIP], Customers.FactoringApproved, Customers.EmailAddress, Customers.Notes
FROM Customers INNER JOIN [TR-Court-Q] ON (Customers.ID=[TR-Court-Q].OrderingID) OR (Customers.ID=[TR-Court-Q].App1) Or (Customers.ID=[TR-Court-Q].App2) Or (Customers.ID=[TR-Court-Q].App3) Or (Customers.ID=[TR-Court-Q].App4) Or (Customers.ID=[TR-Court-Q].App5) Or (Customers.ID=[TR-Court-Q].App6)
WHERE Customers.ID=[TR-Court-Q].OrderingID OR Customers.ID=[TR-Court-Q].App1 Or Customers.ID=[TR-Court-Q].App2 Or Customers.ID=[TR-Court-Q].App3 Or Customers.ID=[TR-Court-Q].App4 Or Customers.ID=[TR-Court-Q].App5 Or Customers.ID=[TR-Court-Q].App6;

*/

/*

SELECT [INV-Q-CustomerHistory].[Company], [INV-Q-CustomerHistory].[FirstName], [INV-Q-CustomerHistory].[LastName], [INV-Q-CustomerHistory].[EmailAddress], [INV-Q-CustomerHistory].[AudioLength], [INV-Q-CustomerHistory].[ActualQuantity], [INV-Q-CustomerHistory].[FinalPrice], [INV-Q-CustomerHistory].[InvoiceDate], [INV-Q-CustomerHistory].[InvoiceNo], [Customers].[ID]
FROM [INV-Q-CustomerHistory] INNER JOIN Customers ON [INV-Q-CustomerHistory].[CustomersID] =[Customers].[ID];



*/

/*

SELECT CourtDates.ID, CourtDates.OrderingID, CourtDates.App1, CourtDates.App2, CourtDates.App3, CourtDates.App4, CourtDates.App5, CourtDates.App6, Customers.ID, Customers.Company, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.FaxNumber, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.Notes
FROM CourtDates INNER JOIN Customers ON (CourtDates.OrderingID like Customers.ID) OR (CourtDates.App1 like Customers.ID) Or (CourtDates.App2 like Customers.ID) Or (CourtDates.App3 like Customers.ID) Or (CourtDates.App4 like Customers.ID) Or (CourtDates.App5 like Customers.ID) Or (CourtDates.App6 like Customers.ID)
WHERE ((CourtDates.ID) Like Forms!NewMainMenu!ProcessJobSubformNMM.Form!JobNumberField) And Customers.ID Like CourtDates.OrderingID Or Customers.ID Like CourtDates.App1 Or Customers.ID Like CourtDates.App2 Or Customers.ID Like CourtDates.App3 Or Customers.ID Like CourtDates.App4 Or Customers.ID Like CourtDates.App5 Or Customers.ID Like CourtDates.App6;



*/

/*

SELECT Customers.ID AS CustomersID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.BusinessPhone, Customers.EmailAddress, Customers.Address, Customers.City, Customers.State, Customers.ZIP, Customers.FactorApvlID, Customers.FactoringApproved, CourtDates.ID AS CourtDates_ID, CourtDates.HearingDate, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, Cases.Party1, Cases.ID AS Cases_ID, Cases.Party2, Cases.CaseNumber1, Cases.CaseNumber2, Cases.Jurisdiction, CourtDates.FinalPrice, CourtDates.ActualQuantity, CourtDates.InvoiceDate, Payments.Amount, Payments.RemitDate, CourtDates.InvoiceNo
FROM ((CourtDates INNER JOIN Cases ON CourtDates.CasesID=Cases.ID) INNER JOIN Customers ON CourtDates.[OrderingID] =[Customers].[ID]) INNER JOIN Payments ON CourtDates.InvoiceNo=Payments.InvoiceNo;



*/

/*

SELECT CourtDates.ID, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.App1, CourtDates.App2, CourtDates.App3, CourtDates.App4, CourtDates.App5, CourtDates.App6, CourtDates.OrderingID, CourtDates.StatusesID, CourtDates.AudioLength, CourtDates.Location, CourtDates.TurnaroundTimesCD, CourtDates.InvoiceNo, CourtDates.DueDate, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.PaymentType, CourtDates.Notes, CourtDates.ShippingOptionsID, CourtDates.SPKRID, CourtDates.AGShortcuts, CourtDates.FiledNotFiled, CourtDates.Factored, CourtDates.InvoiceDate, CourtDates.PaymentDueDate, CourtDates.FactoringInterestID, CourtDates.ExpectedRebateDate, CourtDates.EstimatedPageCount, CourtDates.FactoringCost, CourtDates.UnitPrice, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.Subtotal, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.PaymentSum, CourtDates.InventoryRateCode, CourtDates.AccountCode, CourtDates.TaxType, CourtDates.BrandingTheme, CourtDates.PPID, CourtDates.PPStatus, CourtDates.FinalPrice AS FinalPrice, CourtDates.ID AS CourtDatesID, CourtDates.InvoiceDate, CourtDates.PaymentDueDate, CourtDates.Subtotal, CourtDates.UnitPrice, CourtDates.ActualQuantity, CourtDates.PaymentSum, CourtDates.PPStatus, CourtDates.PPID, Customers.Company, Customers.FirstName, Customers.LastName, Customers.Address, Customers.City, Customers.State, Customers.Zip, Customers.FactoringApproved
FROM CourtDates INNER JOIN Customers ON CourtDates.OrderingID = Customers.ID
WHERE (((CourtDates.PPStatus)<>'PAID') or (CourtDates.PPStatus<>'MARKED_AS_PAID'));


*/

/*

SELECT [CourtDates].[FinalPrice] AS FinalPrice, Payments.ID AS PaymentsID, Payments.InvoiceNo AS pInvoiceNo, Payments.Amount, Payments.RemitDate, CourtDates.ID AS CourtDatesID, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.AudioLength, CourtDates.TurnaroundTimesCD, CourtDates.DueDate, CourtDates.InvoiceNo AS cInvoiceNo, CourtDates.InvoiceDate, CourtDates.PaymentDueDate, CourtDates.Subtotal, CourtDates.UnitPrice, CourtDates.ActualQuantity, CourtDates.PaymentSum, Customers.Company, Customers.FirstName, Customers.LastName, Customers.Address, Customers.City, Customers.State, Customers.Zip, Customers.FactoringApproved
FROM (Payments INNER JOIN CourtDates ON Payments.InvoiceNo = CourtDates.InvoiceNo) INNER JOIN Customers ON CourtDates.OrderingID = Customers.ID
WHERE ((CourtDates.[FinalPrice]-CourtDates.[PaymentSum])>1);


*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE ((Customers.FirstName) like '*Ellis, Li*' OR (Customers.LastName) like '*Ellis, Li*' OR (Customers.Company) like '*Ellis, Li*' OR (Customers.EmailAddress) like '*Ellis, Li*' OR (Customers.BusinessPhone) like '*Ellis, Li*' OR (Customers.Address) like '*Ellis, Li*' OR (Customers.City) like '*Ellis, Li*' OR (Customers.State) like '*Ellis, Li*' OR (Customers.ZIP) like '*Ellis, Li*' OR (Cases.Party1) like '*Ellis, Li*' OR (Cases.Party1Name) like '*Ellis, Li*' OR (Cases.Party2) like '*Ellis, Li*' OR (Cases.Party2Name) like '*Ellis, Li*' OR (Cases.CaseNumber1) like '*Ellis, Li*' OR (Cases.CaseNumber2) like '*Ellis, Li*' OR (Cases.HearingTitle) like '*Ellis, Li*' OR (Cases.Judge) like '*Ellis, Li*' OR (Cases.JudgeTitle) like '*Ellis, Li*' OR (Cases.Jurisdiction) like '*Ellis, Li*' OR (Customers.Company) like '*Ellis, Li*' OR (CourtDates.HearingDate) like '*Ellis, Li*' OR (CourtDates.HearingStartTime) like '*Ellis, Li*' OR (CourtDates.HearingEndTime) like '*Ellis, Li*' OR (CourtDates.CasesID) like '*Ellis, Li*' OR (CourtDates.OrderingID) like '*Ellis, Li*' OR (CourtDates.Subtotal) like '*Ellis, Li*' OR (CourtDates.ShipDate) like '*Ellis, Li*' OR (CourtDates.TrackingNumber) like '*Ellis, Li*' OR (CourtDates.InvoiceDate) like '*Ellis, Li*' OR (CourtDates.Quantity) like '*Ellis, Li*' OR (CourtDates.ActualQuantity) like '*Ellis, Li*' OR (CourtDates.ExpectedRebateDate) like '*Ellis, Li*' OR (CourtDates.ExpectedAdvanceDate) like '*Ellis, Li*' OR (CourtDates.FinalPrice) like '*Ellis, Li*' OR (CourtDates.UnitPrice) like '*Ellis, Li*');



*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Customers.FirstName))like [Enter search term to search attorney's first name.  Enter a * before and after to search with wildcard or it will search exact match:]);



*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, Cases.ID, CourtDates.CasesID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice, Cases.CaseNumber1
FROM (CourtDates INNER JOIN Cases ON CourtDates.CasesID = Cases.ID) INNER JOIN Customers ON CourtDates.OrderingID=Customers.ID
WHERE (((Cases.CaseNumber1) Like [Enter search term to search casenumber1; enter a * before and after to search with wildcard or it will search exact match:]));



*/

/*


SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Cases.Party2))like [Enter search term to search defendants; enter a * before and after to search with wildcard or it will search exact match:]);


*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Customers.EmailAddress))like [Enter search term to search email addresses; enter a * before and after to search with wildcard or it will search exact match:]);



*/

/*


SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((CourtDates.ID)like [Enter search term to search job numbers; enter a * before and after to search with wildcard or it will search exact match:]));


*/

/*


SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Cases.Jurisdiction)like [Enter search term to search jurisdiction; enter a * before and after to search with wildcard or it will search exact match:]));


*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON Customers.ID = CourtDates.OrderingID) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Customers.Company)like [Enter search term to search ordering client's company; enter a * before and after to search with wildcard or it will search exact match:]));



*/

/*


SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON Customers.ID = CourtDates.OrderingID) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Customers.FirstName)like [Enter search term to search ordering attorney's first name; enter a * before and after to search with wildcard or it will search exact match:]));


*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Customers.LastName)like [Enter search term to search ordering attorney's last name; enter a * before and after to search with wildcard or it will search exact match:]));
z


*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Cases.Party1) OR (Cases.Party2) like [Enter search term to search either party; enter a * before and after to search with wildcard or it will search exact match:]));



*/

/*

SELECT CourtDates.ID, CourtDates.InvoiceNo, CourtDates.AudioLength, Cases.Party1, Cases.Party1Name, Cases.Party2, Cases.Party2Name, Cases.CaseNumber1, Cases.CaseNumber2, Cases.HearingTitle, Cases.Judge, Cases.JudgeTitle, Cases.Jurisdiction, Customers.Company, Customers.MrMs, Customers.LastName, Customers.FirstName, Customers.EmailAddress, Customers.BusinessPhone, Customers.Address, Customers.City, Customers.State, Customers.ZIP, CourtDates.HearingDate, CourtDates.HearingStartTime, CourtDates.HearingEndTime, CourtDates.CasesID, CourtDates.OrderingID, CourtDates.Subtotal, CourtDates.ShipDate, CourtDates.TrackingNumber, CourtDates.InvoiceDate, CourtDates.Quantity, CourtDates.ActualQuantity, CourtDates.ExpectedRebateDate, CourtDates.ExpectedAdvanceDate, CourtDates.FinalPrice, CourtDates.UnitPrice
FROM (CourtDates INNER JOIN Customers ON (Customers.ID = CourtDates.OrderingID) OR (Customers.ID = CourtDates.App6) OR (Customers.ID = CourtDates.App5) OR (Customers.ID = CourtDates.App4) OR (Customers.ID = CourtDates.App3) OR (Customers.ID = CourtDates.App2) OR (Customers.ID = CourtDates.App1)) INNER JOIN Cases ON Cases.ID = CourtDates.CasesID
WHERE (((Cases.Party1)like [Enter search term to search plaintiffs; enter a * before and after to search with wildcard or it will search exact match:]));



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
