const express = require('express');
const app = express();
const port = 3010;
app.use(express.json());

app.get('/api/books', (req, res) => {
  res.json(getBooks());
});

app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = getBookById(id);
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

app.post('/api/books', (req, res) => {
  const book = addBooks(req.body);
  res.status(201).json(book);
});

app.get('/', (req, res) => {
  res.send('BD6.1 CW');
});

app.listen(port, () => {
  console.log(`BD6.1 CW listening at http://localhost:${port}`);
});
