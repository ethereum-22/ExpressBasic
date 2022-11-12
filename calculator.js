const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //bodyParser.urlencoded() It allows us to perform post nested object..When we parse data from HTML form

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

// app.post accept the post request that comes to the home route

app.post('/', (request, response) => {
  let num1 = Number(request.body.num1);
  let num2 = Number(request.body.num2);

  //request.body returns the data of Whole form (i.e num1,num2,submit='') and we need only the num1,num2 and for that reason we only uses num1 and num2
  response.send(`The Result is ${num1 + num2}`);
});

// BMI Calculator

// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/bmiCalculator.html');
// });

// app.post('/', (request, response) => {
//   response.send('I am working Properly');
// });

// app.get('/', (request, response) => {
//   response.send('<h1>BMI Calculator</h1>');
// });

app.listen(port, () => {
  console.log(`The port is connected on ${port}`);
});
