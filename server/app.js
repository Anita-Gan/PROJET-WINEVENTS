const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const RouterAuth= require('./Routes/AuthRoutes.js');
const RouterLogin= require('./Routes/LoginRoutes.js')


app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use('/user', RouterAuth)
app.use('/user', RouterLogin)



app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});