//importando o express
const express = require('express');

//impostando módulo cors quem pode acessá-lo
const cors = require('cors');

//importando os arquivos de rotas (routes)
const routes = require('./routes');

//criando uma constante app
const app = express();

//informa o endereço da aplicação 
app.use(cors());

//avisa app que utiliza o formato json nos metodos
app.use(express.json());

//utiliza o arquivo routes
app.use(routes);
/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 * 
 */

 /**
  * Tipos de parâmetros:
  *
  * Query Params: Parâmetros nomeados enviados na rota após o símbolo de interrogaração. Servem para filtros e paginação.
  * Route Params: Parâmetros utilizados para identificar recursos.
  * Request Body: Corpo da requisição, utilizado para criação e edição de dados.
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 * 
 * 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 * 
 */


//acessar a porta 3333
app.listen(3333);