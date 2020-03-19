# Transcript Web App

This is the back end, work in progress, for porting my database online, and currently contains fake data.  Copyright 2020 Erica Ingram.

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

### TO DO

- [ ] add body examples (in postman docs currently)
- [ ] multiple-table endpoints
    - [ ] cases/courtdates/customers
    - [ ] cases/courtdates
    - [ ] cases/courtdates/invoices/customers
    - [ ] possibly different query per document generated
