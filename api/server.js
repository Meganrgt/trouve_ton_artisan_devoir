const express = require('express');
const app = express();
const cors = require("cors");
const port = 5000;
const apiRoutes = require ('./routes');
const {sequelize, connectToDb} = require ('./db/db');


//Middleware
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

//Database Connection
const mysql = require('mysql2/promise');
const { applyExtraSetUp } = require('./extra-setup');

applyExtraSetUp(sequelize);


app.listen(port, async () => {
    console.log('server is running on port ' + port)
    await connectToDb();
});
