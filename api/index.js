const express = require('express');
const res = require('express/lib/response');
const app = express();
const fs =require('fs')
const path = require('path');

const databasePath = path.join(__dirname, 'database.csv')
const csvData = fs.readFileSync(databasePath, 'utf8');

const jsonData = csvData.split('\n').map((line) => {
  const [date, trans_no, credit, debit, detail] = line.split(',');
  return { date, trans_no, credit, debit, detail };
}
);

app.get('/api/transactions', (req, res) => {
  const transactions = jsonData.slice(0,
    Math.min(25, jsonData.length));
  res.json(transactions);
}
);

app.get('/api/search/', (req, res) => {
  const response = { status: "/search/:keyword/ để tra giao dịch" };
  res.send(response);
});

app.get('/api/search/:keyword', (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  const transactions = jsonData.filter((transaction) => {
    if (transaction.detail && typeof transaction.detail === 'string') {
      const normalizedDetail = transaction.detail.toLowerCase().replace(/[\W_]+/g, ' '); 
      return normalizedDetail.includes(keyword);
    }
    return false;
  });
  res.json(transactions);
});

app.get('/api', (req, res) => {
  const response = { status: "Successfully deploying API" };
  res.send(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;