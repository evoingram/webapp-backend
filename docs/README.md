# Transcript Web App

This is the back end, work in progress, for my database online port.  This is currently an empty database.  Copyright 2020 Erica Ingram.

## [DB Schema](https://dbdesigner.page.link/gbEtfTr1XjgwDa2C7)

## [BASE URL](https://transcript-webapp.herokuapp.com/api)

## [POSTMAN DOCUMENTATION](https://documenter.getpostman.com/view/6401823/SzRxWAvu?version=latest)

All endpoints have been tested via Postman.

### Endpoints For Login / Registration

| Request Method | Endpoint         | Description                          |
| :------------- | :--------------- | :----------------------------------- |
| `POST`         | `/login`         | Logs user in and returns a token     |
| `POST`         | `/register`      | creates a user                       |

### Endpoints For Users

| Request Method | Endpoint                      | Description                          |
| :------------- | :---------------------------- | :----------------------------------- |
| `GET`          | `/customers`                  | returns list of users                |
| `GET`          | `/customers/:customersid`     | returns a user                       |
| `DELETE`       | `/customers/:customersid`     | deletes a user                       |
| `GET`          | `/courtdates/:courtdatesid`   | returns an order                     |


### TO DO

- [X] CRUD brandingthemes
- [X] CRUD tasks
- [X] CRUD statuses
- [X] CRUD expenses
- [ ] CRUD payments
- [ ] CRUD commHistory
- [ ] CRUD shipping
- [X] CRUD invoices
- [ ] CRUD citations
- [ ] CRUD customers

- [ ] CRUD rates
- [ ] CRUD agshortcuts
- [ ] CRUD examtypes
- [ ] CRUD styles
- [ ] CRUD turnaroundtimes
- [ ] CRUD courtdatescasescustomers
- [ ] CRUD appearances
- [ ] CRUD mailclass
- [ ] CRUD packagetype

- [ ] GET jobs by customer
- [ ] GET jobs by duedate?
- [ ] GET invoices by amount/duedate/factoring
- [ ] GET customers by factoring
- [ ] GET cases by customer
- [ ] GET unpaid invoices

