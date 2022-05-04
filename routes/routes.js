const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/', express.static(path.join('./')));
router.use('/champions', express.static(path.join('./')));
router.use('/champions/*', express.static(path.join('./')));
router.use('/download', express.static(path.join('./')));

router.get('/', (req, res) => {
  res.status(200).send('Página de inicio');
});
router.get('/champions', (req, res) => {
  res.status(200).send('Página de campeones');
});
router.get('/champions/*', (req, res) => {
  res.status(200).send('Página de campeones');
});
router.get('/download', (req, res) => {
  res.status(200).send('Página de descargas');
});

module.exports = router;
