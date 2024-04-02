const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const RouterAuth= require('server/Routes/AuthRoutes.js');
const RouterLogin= require('server/Routes/LoginRoutes.js')


app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use('/auth', RouterAuth)
app.use('/auth', RouterLogin)



app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});