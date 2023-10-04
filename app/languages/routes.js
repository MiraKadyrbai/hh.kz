const express = require('express')
const router = express.Router();
// const {getCountries, getCities} = require('./controllers')


router.get('/api/languages', (req, res)=> 
res.status(200).send(['Английский', 'Русский', 'Казахский']))



module.exports = router;