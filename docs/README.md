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
- [X] CRUD payments
- [X] CRUD commHistory
- [X] CRUD shipping
- [X] CRUD invoices
- [X] CRUD citations
- [X] CRUD customers

- [X] CRUD rates
- [X] CRUD agshortcuts
- [X] CRUD examtypes
- [X] CRUD styles
- [X] CRUD turnaroundtimes
- [X] CRUD courtdatescasescustomers
- [X] CRUD appearances
- [X] CRUD mailclass
- [X] CRUD packagetype
- [X] CRUD usc

- [X] GET jobs by customer
- [X] GET cases by customer
- [ ] GET unpaid invoices

- [ ] proofer/transcriber endpoints
- [ ] brainstorm other custom needs
