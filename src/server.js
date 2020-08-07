const express = require('express');
const bodyParser = require('body-parser');

require('./database');

const cors = require('cors');
const routes = require('./routes');

const PORTA = 3000;
const app = express();

app.set('port', process.env.PORT || PORTA);

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(PORTA, () => {
  console.log(`Server iniciado na PORTA: ${PORTA}`);
});
