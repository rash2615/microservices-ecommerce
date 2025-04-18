const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

let products = [];

// Route racine
app.get('/', (req, res) => {
  res.send('Bienvenue sur le service catalogue !');
});

// GET /products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/:id
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Produit non trouvé' });
  }
  res.json(product);
});

// POST /products
app.post('/products', (req, res) => {
  const { id, name, price } = req.body;
  const product = { id, name, price };
  products.push(product);
  res.status(201).json(product);
});

app.listen(PORT, () => {
  console.log(`Catalogue service running on http://localhost:${PORT}`);
});

module .exports = app; // Exporter l'application pour les tests