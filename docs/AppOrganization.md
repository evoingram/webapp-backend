# App Organization

## Suggested Outline:

- src
    - modules
        - reducers.js
        - users
            - constants.js
            - actions
                - user_fetch.js
                - user_login.js
                - permissions_fetch.js
            - reducers
                - index.js
                - user.js
                - permission.js
        -projects/
    - routes
        - home page
            - jurisdiction rules
            - other law resources
        - login
            - index.js
            - containers
                - login.js
            - components
                - login.js
        - dashboard/ (logged in)
            -
        - project_list/
        - project_view/


## features outline: 

- home page (same endless page structure)
    - pop-up/buttons to register/login/cancel

    - login:  
        - inline notifications
        - endpoints:  
        - login fields
        - loginWithGoogle
        - loginWithMicrosoft
        - loginWithLinkedIn
        - changepw
        - forgotpw
        - register
    - register
        - inline notifications
        - pop-up/buttons to submit/cancel
        - endpoint:  

        
- component folder/overarching page
    - component
        - endpoints:  
            -
        - links:  
            -
        - buttons:  
            -
        - fields:  
            -
        - tables:  
            -
        - queries:  
            -
        - other features to enable related to this component:
            -

'html: register
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo qaOneCustomerInfo
'buttons: register cancel
'js-response: successful unsuccessful missing-info
'fields: username email password
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'links: login loginWithGoogle loginWithMicrosoft loginWithLinkedIn changepw forgotpw
'php: register
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo qaOneCustomerInfo
'if good load userprofile page to edit
'if good jsresponse: registry successful
'if good send account/email confirmation
'if bad jsresponse: missing required field
'set session
'authorize/authenticate


'html: login
'fields: username password
'buttons: login cancel
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo
'links: loginWithGoogle loginWithMicrosoft loginWithLinkedIn changepw forgotpw register
'php: login
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo
'login with Google LinkedIn Microsoft
'if good load userprofile page
'if bad jsresponse: missing info try again
'html: change pw
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo quOneCustomerInfo
'links: register loginWithGoogle loginWithMicrosoft loginWithLinkedIn changepw forgotpw
'fields: username email password
'buttons: submit cancel
'php: change pw
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo quOneCustomerInfo
'if good jsresponse:  change pw successful
'if good send email confirmation
'if bad jsresponse: missing info try again
'html: forgot pw
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo quOneCustomerInfo
'links: login loginWithGoogle loginWithMicrosoft loginWithLinkedIn changepw forgotpw register
'fields: username email password
'buttons: submit cancel
'php: forgot pw
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo quOneCustomerInfo
'if good jsresponse:  forgot pw successful
'if good send email confirmation
'if bad jsresponse: missing info try again
'php: sessions
'SQL tables:
'SQL queries:
'fields:
'php: authorize/authenticate
'SQL tables:
'SQL queries:
'fields:
'html: userprofile
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'buttons: save-info change-pw collapsecases
'SQL tables: Customers Addresses Groups
'SQL queries: qsOneCustomerInfo
'links: logout changepw
'html: cases
'SQL tables: Customers Cases CourtDates Status Tasks Files Rates CommHistory
'SQL queries: qsOneCustomerInfo, qsOneCaseInfo, qsAllCaseInfo
'SQL queries: qsAllAudio qsAllTranscripts
'fields: casename casenumber1 casenumber2 judge hearingdates turnaround
'fields: audiolength hearingtitle
'buttons: submit delete new
'links:
'section: notifications field for status changes
'links:
'jsresponse: notification message
'if needs attention, font yellow
'if nothing new, font green "nothing requires your attention"
'red for not logged in or error
'jsresponse: delete order completed
'jsresponse: confirm new order
'jsresponse: new order, an email confirmation has been sent
'jsresponse: add case completed
'section: search cases
'fields: search
'buttons: submit cancel
'links:
'if good: load results
'if good: jsresponse: search complete
'if bad: jsresponse: no results try again
'if one case, load selection here
'buttons: collapse
'if more than one case, load dropdown with window
'buttons: collapse
'php: new order for current case
'SQL tables: Customers Cases CourtDates Files CommHistory Status Rates
'SQL queries: qsOneCaseInfo qaAllAudio qsOneCustomerInfo
'if good: open new order
'if good: jsresponse: new order opened
'if bad: jsresponse: no new order opened, try again
'section: communication / messaging
'fields: subject message datetime
'buttons: respond resolve cancel downloadpdf collapse
'links:
'jsresponse: message sent / issue resolved
'php: respond to current message
'SQL tables: CommHistory Customers
'SQL queries: qsOneCustomerInfo qsOneCommHistory qaOneCommHistory
'if good: save response in database
'if good: jsresponse: your message has been sent
'if bad: jsresponse: no message sent try again
'section: status
'fields: statustext progressbar
'links:
'jsresponse: statustext
'section: audio
'fields: filename-downloadZIP delete datetime upload-username
'buttons: upload downloadZIP delete collapsedate
'links:
'listen online MAYBE
'audio to text MAYBE
'php: download in zip format
'SQL tables: Files Cases CourtDates Customers
'SQL queries: qsOneFile
'if good: download file
'if good: jsresponse: file downloading...
'if bad: jsresponse: file not downloaded, try again
'php: upload files
'SQL tables: Files Cases CourtDates Customers
'SQL queries: quOneFile
'if good: upload file
'if good: jsresponse: file uploading...
'if bad: jsresponse: file not uploaded, try again
'php: delete audio
'SQL tables: Files Cases CourtDates Customers
'SQL queries: qdAudio
'jsresponse: confirm delete audio
'if good: delete audio file(s)
'if good: jsresponse: file deleted
'if bad: jsresponse: file not deleted, try again
'section: transcripts
'fields: filename-downloadZIP delete datetime upload-username upload
'buttons: upload delete download(2up) download(4up) download(regpdf)
'buttons: download(regword) download(wc) download(windex)
'buttons: collapsedate collapseshippinginfo
'OR two buttons download/view with dropdown for which transcript
'links:
'php: shipping info
'SQL tables: CourtDates
'SQL queries: qsShipping
'if good: load shipping info
'if good: jsresponse: shipping one moment
'if bad: jsresponse: try again
'php: download transcript
'SQL tables: Files Cases CourtDates Customers
'SQL queries: qsOneFile
'if good: download transcript
'if good: jsresponse: Transcript downloading...
'if bad: jsresponse: transcript not downloaded, try again
'php: view transcript
'SQL tables: Files Cases CourtDates Customers
'SQL queries: qsOneFile
'if good: download file
'if good: jsresponse: load view one moment
'if bad: jsresponse: file not downloaded, try again
'php: delete transcripts
'SQL tables: Files Cases CourtDates Customers
'SQL queries: qdTranscripts
'jsresponse: confirm delete transcript
'if good: delete transcript file(s)
'if good: jsresponse: transcripts deleted
'if bad: jsresponse: transcripst not deleted, try again
'jsresponse: delete transcripts completed
'section: billing
'fields: invoicenumber downloadPDF amount paymentstatus viewHTML
'fields invoicestatus approvedtermsstatus viewinvoice
'buttons: download-invPDF paypal status terms-approved TermsApp-prefilled
'buttons: pricequote collapse terms/TOS AppForTerms
'links:
'list of invoices
'section: price quote calculator
'fields: audiolength deadline calendar-calculated-date estimate
'buttons: emailquote saveneworder
'buttons: neworder cancel
'php: view invoice
'SQL tables: Files Cases CourtDates Customers
'SQL queries: qsOneFile
'if good: load invoice into viewinvoice field
'if good: jsresponse: invoice loaded
'if bad: jsresponse: invoice not loaded, try again
'jsresponse: invoice loaded
'php: download pdf
'SQL tables: Files Cases CourtDates Customers
'SQL queries: qsOneFile
'if good: download invoice PDF
'if good: jsresponse: invoice PDF downloading...
'if bad: jsresponse: invoice PDF not downloaded, try again
'php: price quote calculator
'SQL tables: Cases CourtDates Rates Customers
'SQL queries: qaOn
'calendar calculated date
'calculate amount
'php: delete case
'SQL tables: Files Cases CourtDates Customers
'SQL queries: qdAllCaseInfo
'if logged in, no email notification of delete
'if not logged in, send email notification of delete
'php: new order
'SQL tables: Customers Cases CourtDates Files CommHistory Status Rates
'SQL queries: qsOneCaseInfo qaAllAudio qsOneCustomerInfo
'if good: open new order
'if good: jsresponse: new order opened
'if bad: jsresponse: no new order opened, try again
'php: add case
'SQL tables: Customers Cases CourtDates Files CommHistory Status Rates
'SQL queries: qsOneCaseInfo qaAllAudio qsOneCustomerInfo
'if good: open new case
'if good: jsresponse: new case opened
'if bad: jsresponse: no new case opened, try again
'php: get info
'SQL tables: Customers Addresses Groups
'SQL queries: qsOneCustomerInfo
'if good: run case info query
'if good: load case info on page
'if bad: jsresponse: could not get case info, try again
'php: save new info
'SQL tables: Customers Addresses Groups
'SQL queries: quOneCustomerInfo
'if good: save case info
'if good: load case info on page
'if bad: jsresponse: could not save case info, try again
'php: change password
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo quOneCustomerInfo
'jsresponse: confirm password change
'if good jsresponse:  change pw successful
'if good send email confirmation
'if bad jsresponse: missing info try again
'html: administrator
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'buttons: save-info change-pw
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo qaOneCustomerInfo
'links:
'section: new notifications/comms
'fields: message linktosolution
'buttons: resolve delete
'send message w/ or w/o file
'change status of user
'send user notification
'section: search
'html: user profile
'SQL tables: Customers Addresses Groups
'SQL queries: qsOneCustomerInfo
'fields: email firstname lastname company creditstatus shippingaddress
'fields: invoicingaddress phone
'buttons: save-info change-pw
'links:
'php: user profile
'SQL tables: Customers Addresses Groups
'SQL queries: qsOneCustomerInfo
'html: change password
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo quOneCustomerInfo
'fields: username email password
'buttons: submit cancel
'links:
'php: change password
'SQL tables: Customers
'SQL queries: qsOneCustomerInfo quOneCustomerInfo
'html: task mgmt
'SQL tables: Tasks CourtDatesID Cases Customers
'SQL queries: qsOneCaseInfo qsOneCustomerInfo qsTasksInfo
'SQL queries: qaTasksInfo quTasksInfo
'fields: taskname description stage duedate startdate
'fields: casename casenumber1 casenumber2 judge hearingdates turnaround
'fields: audiolength hearingtitle checkbox-to-complete
'buttons: new-manual-task collapse
'links:
'section: search tasks
'links:
'section: jobs by stage
'buttons: nextaction
'links:
'show status of all active jobs
'incomplete tasks
'html: task management status for users (subcontractors)
'SQL tables: Tasks CourtDatesID Cases Customers
'SQL queries: qsOneCaseInfo qsOneCustomerInfo qsTasksInfo
'links:
'fields: courtdatesid
'buttons: N/A
'then propagates other fields:
'fields: invoicenumber downloadPDF amount paymentstatus viewHTML quantity
'fields: casename casenumber1 casenumber2 judge hearingdates turnaround audiolength hearingtitle
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'fields: taskname description stage duedate startdate
'buttons: complete-task change-user view-case view-customer
'php: task mgmt
'SQL tables: Tasks CourtDatesID Cases Customers
'SQL queries: qsOneCaseInfo qsOneCustomerInfo qsTasksInfo
'links:
'complete task
'search tasks
'html: billing
'SQL tables: Customers Cases Rates Files CourtDates
'SQL queries: qsOneCustomerInfo qsOneCaseInfo qsAllCaseInfo qsOneStatusInfo qsPaymentInfo
'SQL queries: qsOneCommHistory qsTasksInfo qsOneUserInfo qsShippingInfo
'SQL queries: qdAllCaseInfo qdTranscripts qdAudio
'fields: invoicenumber downloadPDF amount paymentstatus viewHTML quantity
'fields: casename casenumber1 casenumber2 judge hearingdates turnaround
'fields: audiolength hearingtitle email firstname lastname company
'fields: creditstatus shippingaddress invoicingaddress phone
'buttons:
'links:
'section: price quote calculator & email
'fields: audiolength deadline calendar-calculated-date emailquote
'fields: saveneworder
'buttons: download-invPDF paypal status terms-approved
'buttons: TermsApp-prefilled pricequote
'links:
'reports  ***
'fields:
'buttons:
'links:
'section: search invoices
'fields: invoicenumber downloadPDF amount paymentstatus viewHTML quantity
'fields: casename casenumber1 casenumber2 judge hearingdates turnaround audiolength hearingtitle
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'buttons: submit cancel
'links:
'php: auto-send reminder if deposit/invoice not paid
'SQL tables: Customers Cases Rates Files CourtDates
'SQL queries: qsOneCustomerInfo qsOneCaseInfo qsAllCaseInfo qsOneStatusInfo qsPaymentInfo
'SQL queries: qsOneCommHistory qsTasksInfo qsOneUserInfo qsShippingInfo
'courtdatesid paypal-status
'php: auto calculate interest
'fields:  courtdatesID today date-entered
'SQL tables: Customers Cases Rates Files CourtDates
'SQL queries: qsOneCustomerInfo qsOneCaseInfo qsAllCaseInfo qsOneStatusInfo qsPaymentInfo
'SQL queries: qsOneCommHistory qsTasksInfo qsOneUserInfo qsShippingInfo
'php: billing
'SQL tables: Customers Cases Rates Files CourtDates
'SQL queries: qsOneCustomerInfo qsOneCaseInfo qsAllCaseInfo qsOneStatusInfo qsPaymentInfo
'SQL queries: qsOneCommHistory qsTasksInfo qsOneUserInfo qsShippingInfo
'SQL queries: qdAllCaseInfo qdTranscripts qdAudio
'html: customers
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'buttons:
'SQL tables: Customers Files Cases CourtDates
'SQL queries: qsOneCustomerInfo quOneCustomerInfo qaOneCustomerInfo qdOneCustomerInfo qsAllAudio
'SQL queries: qsAllTranscripts qsOneCaseInfo qsOneOrder qsAllCaseInfo qsCommHistory qsPaymentInfo
'links:
'section: edit user
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'buttons: submit cancel
'links:
'section: add user
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'buttons: submit cancel
'links:
'section: delete user
'buttons: submit cancel
'links:
'section: change password of user
'fields: oldpw newpw
'buttons: submit cancel
'links:
'section: search customers
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'buttons: submit cancel
'links:
'section: search cases
'fields: casename casenumber1 casenumber2 judge hearingdates turnaround audiolength hearingtitle
'buttons: submit cancel
'links:
'section: search file names
'fields: filename
'buttons: submit cancel
'links:
'section: cases by customer
'fields: casename casenumber1 casenumber2 judge hearingdates turnaround audiolength hearingtitle
'fields: email firstname lastname company creditstatus shippingaddress invoicingaddress phone
'buttons: submit/change delete new cancel select-customer select-open-case
'links:
'section: file upload / download
'fields: fileselect pagecount
'buttons: submit cancel
'ask for page count
'confirm rate/page count
'section: billing status bar
'section: by hearing date
'audio
'transcripts
'status
'comm history
'generate & send invoice
'links:
'php: customers
'SQL tables: Customers Files Cases CourtDates
'SQL queries: qsOneCustomerInfo quOneCustomerInfo qaOneCustomerInfo qdOneCustomerInfo qsAllAudio
'SQL queries: qsAllTranscripts qsOneCaseInfo qsOneOrder qsAllCaseInfo qsCommHistory qsPaymentInfo
'groups: subcontractor, subadmin, client, root
'change user groups
'define things each group can do or has access to
'notifications for status changes or uploads
                