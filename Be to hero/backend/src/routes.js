const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//rotas da ong
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//rotas da profile
routes.get('/profile', ProfileController.index);

//routes de incidentes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

//rotas de login
routes.post('/sessions', SessionController.create);

module.exports = routes;