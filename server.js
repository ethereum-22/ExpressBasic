const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/', (request, response) => {
  let height = request.body.height;
  let weight = request.body.weight;
  let bmi = weight / (height * height);

  response.send(` Your BMI is ${bmi}`);
});

app.listen(port, () => {
  console.log(`The port is connected on ${port}`);
});
