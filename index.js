const express = require('express');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 5000;

app.use('/', express.static('./'));
app.use('/champions', express.static('./'));
app.use('/download', express.static('./'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Página de inicio');
});

app.get('/champions', (req, res) => {
  res.send('Página de campeones');
});

app.get('/download', (req, res) => {
  res.send('Página de descargas');
});

app.use((req, res) => {
  res.status(404);
  res.send(
    `<h1>Lo sentimos, no se ha encontrado la ruta ${
      req.url
    } dentro de nelson-league 😿 </h1>
        <a href=${'http://localhost:5000'}>Regresar a Home Page</a>
    `
  );
});

app.listen(port, () => {
  console.log(`Servidor abierto en http://localhost:${port}`);
});
