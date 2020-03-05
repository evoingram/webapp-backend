# Transcript Web App

This is the back end, work in progress, for my database online port.

# [DB Schema](https://dbdesigner.page.link/gbEtfTr1XjgwDa2C7)

# [BASE URL](https://transcript-webapp.herokuapp.com/)

# [POSTMAN DOCUMENTATION](https://documenter.getpostman.com/view/)

All endpoints have NOT been tested via Postman.

### Endpoints For Login / Registration

| Request Method | Endpoint         | Description                          |
| :------------- | :--------------- | :----------------------------------- |
| `POST`         | `/api/login`     | Logs user in and returns a token     |
| `POST`         | `/api/register`  | creates a user                       |

### Endpoints For Users

| Request Method | Endpoint                      | Description                          |
| :------------- | :---------------------------- | :----------------------------------- |
| `GET`          | `/api/customers`              | returns list of users                |
| `GET`          | `/api/customers/:customersid` | returns a user                       |
| `DELETE`       | `/api/customers/:customersid` | deletes a user                       |
