const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use('/api/v1/', routes);

const port = process.env.PORT;

app.listen(port, () => console.log(`server listening on port ${port}`));
