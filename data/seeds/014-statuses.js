/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	return knex("statuses")
		.del()
		.then(() => {
			return knex("statuses").insert([
				{
					sid: 1,
					courtdatesid: 1,
					appsentered: false,
					jobentered: false,
					coverpage: false,
					autocorrect: false,
					schedule: false,
					prepinvoice: false,
					agshortcuts: false,
					tassigned: false,
					tfiletransmission: false,
					ttranscriptsubmitted: false,
					tinvoicereceived: false,
					tinvoicepaid: false,
					passigned: false,
					pfiletransmission: false,
					ptranscriptsubmitted: false,
					pinvoicereceived: false,
					pinvoicepaid: false,
					transcribe: false,
					addrdtocover: false,
					findreplacerd: false,
					hyperlink: false,
					spellingsemail: false,
					audioproof: false,
					invoicecompleted: false,
					noticeofservice: false,
					peletter: false,
					cdlabel: false,
					generatezips: false,
					transcriptsready: false,
					invoicetofactoremail: false,
					filetranscript: false,
					burncd: false,
					shippingxmls: false,
					shippingemail: false,
					addtrackingno: false
				},
				{
					sid: 2,
					courtdatesid: 2,
					appsentered: false,
					jobentered: false,
					coverpage: false,
					autocorrect: false,
					schedule: false,
					prepinvoice: false,
					agshortcuts: false,
					tassigned: false,
					tfiletransmission: false,
					ttranscriptsubmitted: false,
					tinvoicereceived: false,
					tinvoicepaid: false,
					passigned: false,
					pfiletransmission: false,
					ptranscriptsubmitted: false,
					pinvoicereceived: false,
					pinvoicepaid: false,
					transcribe: false,
					addrdtocover: false,
					findreplacerd: false,
					hyperlink: false,
					spellingsemail: false,
					audioproof: false,
					invoicecompleted: false,
					noticeofservice: false,
					peletter: false,
					cdlabel: false,
					generatezips: false,
					transcriptsready: false,
					invoicetofactoremail: false,
					filetranscript: false,
					burncd: false,
					shippingxmls: false,
					shippingemail: false,
					addtrackingno: false
				},
				{
					sid: 3,
					courtdatesid: 3,
					appsentered: false,
					jobentered: false,
					coverpage: false,
					autocorrect: false,
					schedule: false,
					prepinvoice: false,
					agshortcuts: false,
					tassigned: false,
					tfiletransmission: false,
					ttranscriptsubmitted: false,
					tinvoicereceived: false,
					tinvoicepaid: false,
					passigned: false,
					pfiletransmission: false,
					ptranscriptsubmitted: false,
					pinvoicereceived: false,
					pinvoicepaid: false,
					transcribe: false,
					addrdtocover: false,
					findreplacerd: false,
					hyperlink: false,
					spellingsemail: false,
					audioproof: false,
					invoicecompleted: false,
					noticeofservice: false,
					peletter: false,
					cdlabel: false,
					generatezips: false,
					transcriptsready: false,
					invoicetofactoremail: false,
					filetranscript: false,
					burncd: false,
					shippingxmls: false,
					shippingemail: false,
					addtrackingno: false
				},
				{
					sid: 4,
					courtdatesid: 4,
					appsentered: false,
					jobentered: false,
					coverpage: false,
					autocorrect: false,
					schedule: false,
					prepinvoice: false,
					agshortcuts: false,
					tassigned: false,
					tfiletransmission: false,
					ttranscriptsubmitted: false,
					tinvoicereceived: false,
					tinvoicepaid: false,
					passigned: false,
					pfiletransmission: false,
					ptranscriptsubmitted: false,
					pinvoicereceived: false,
					pinvoicepaid: false,
					transcribe: false,
					addrdtocover: false,
					findreplacerd: false,
					hyperlink: false,
					spellingsemail: false,
					audioproof: false,
					invoicecompleted: false,
					noticeofservice: false,
					peletter: false,
					cdlabel: false,
					generatezips: false,
					transcriptsready: false,
					invoicetofactoremail: false,
					filetranscript: false,
					burncd: false,
					shippingxmls: false,
					shippingemail: false,
					addtrackingno: false
				},
				{
					sid: 5,
					courtdatesid: 5,
					appsentered: false,
					jobentered: false,
					coverpage: false,
					autocorrect: false,
					schedule: false,
					prepinvoice: false,
					agshortcuts: false,
					tassigned: false,
					tfiletransmission: false,
					ttranscriptsubmitted: false,
					tinvoicereceived: false,
					tinvoicepaid: false,
					passigned: false,
					pfiletransmission: false,
					ptranscriptsubmitted: false,
					pinvoicereceived: false,
					pinvoicepaid: false,
					transcribe: false,
					addrdtocover: false,
					findreplacerd: false,
					hyperlink: false,
					spellingsemail: false,
					audioproof: false,
					invoicecompleted: false,
					noticeofservice: false,
					peletter: false,
					cdlabel: false,
					generatezips: false,
					transcriptsready: false,
					invoicetofactoremail: false,
					filetranscript: false,
					burncd: false,
					shippingxmls: false,
					shippingemail: false,
					addtrackingno: false
				}
			]);
		});
};
