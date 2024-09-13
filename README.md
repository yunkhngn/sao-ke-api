# Sao kê API 🔮

> Currently working right now!

### A simple API for searching for transactions from nhà tài trợ

*Author: @yunkhngn*

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Euro_coins_and_banknotes_%28cropped%29.jpg/800px-Euro_coins_and_banknotes_%28cropped%29.jpg" style="border-radius:5px"/>

## Quick start

```javascript
fetch("https://soundke.vercel.app/api/")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    //extract data
  })
  .catch(function (error) {
    // handle what went wrong
  });
```

## Documentation

| GET path | Result| Params|
| :------------ | ---------- | :----------- |
| `/api/`| test for api| |
| `/api/search/:keywork` | return card with keyword include `name` | `'/khoa-nguyen'`,`'/phuong-hang'`... |

**JSON format:**
```json
{
  "date":"Date of transaction",
  "trans_no":"Transaction number",
  "credit":"Value",
  "debit":"Value",
  "detail":"Transaction detail",
}
```

## Local development

1. Clone this repository and install dependencies locally.

```sh
git clone https://github.com/yunkhngn/sao-ke-api.git
```

2. Then
```sh
cd sao-ke-api

cd api

yarn install
#or npm install

node index.js
```
3. Install nodemon (optional for hot reload)
```sh
yarn add nodemon

nodemon index.js
```

## License & contributions

Contributions to Repository are welcome! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make changes and commit them to your branch
4. Submit a pull request to the main repository.

Sao ke API's Repository is licensed under the GNU License. See LICENSE for more information.

