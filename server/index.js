const express = require('express');
var cors = require('cors')
const server = express();

const db = require('./db.json');
const serverPort = 3000;

const animals = db.animals;
const shelters = db.shelters;
const adopters = db.adopters;

server.use( cors() );
server.use( express.json() );

const defaultPath = {
  animals: 'http://localhost:3000/animals',
  cats: 'http://localhost:3000/cats',
  dogs: 'http://localhost:3000/dogs',
  shelters: 'http://localhost:3000/shelters',
  adopters: 'http://localhost:3000/adopters'
}

server.get('/', (req, res) => {
  return res.status(200).json(defaultPath);
})

server.get('/animals', (req, res) => {
  return res.status(200).json(animals);
})

server.get('/cats', (req, res) => {
  const cats = animals.filter((animal) => animal.type === 'cat');
  return res.status(200).json(cats);
})

server.get('/dogs', (req, res) => {
  const dogs = animals.filter((animal) => animal.type === 'dog');
  return res.status(200).json(dogs);
})

server.get('/shelters', (req, res) => {
  return res.status(200).json(shelters);
})

server.get('/adopters', (req, res) => {
  return res.status(200).json(adopters);
})

server.listen(serverPort, (err) => {
  if (err) throw err;
  console.log(`Server is listening on port ${serverPort} | API: http://localhost:${serverPort}`);
})
