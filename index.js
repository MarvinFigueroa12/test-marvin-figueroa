const express = require('express');
const app = express();

const usersRoutes = require('./routes/users');
const categoryRoutes = require('./routes/category');
const documentsRoutes = require('./routes/documents');
const recordsRoutes = require('./routes/record');
const userdocumentRoutes = require('./routes/user_document');

const errorController = require('./controllers/error');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Routes
app.use('/', usersRoutes);
app.use('/', categoryRoutes);
app.use('/', documentsRoutes);
app.use('/', recordsRoutes);
app.use('/', userdocumentRoutes);
app.use(errorController.get404);
app.use(errorController.get500);
/*

app.use(require('./src/routes/user_document'));*/

//Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

