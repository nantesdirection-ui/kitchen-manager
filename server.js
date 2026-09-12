const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const db = new sqlite3.Database('./kitchen.db', (err) => {
  if (err) console.error('❌ Erreur:', err);
  else console.log('✅ Base de données OK');
});

// Routes de test
app.get('/api/test', (req, res) => {
  res.json({ message: '✅ Serveur fonctionne!' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur sur http://localhost:${PORT}`);
});