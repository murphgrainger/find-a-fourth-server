var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
const objection = require('objection');
const Model = objection.Model;
const knex = require('knex')(config);
Model.knex(knex);

module.exports = knex;
