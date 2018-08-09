const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/weather', (req, res) => {
  const weatherdata = [
    {
      city: 'Barrie, ON',
      temperature: 20,
      weather_condition: 'Sunny',
    },
    {
      city: 'Toronto, ON',
      temperature: 25,
      weather_condition: 'Flurries',
    },
    {
      city: 'Orillia, ON',
      temperature: 18,
      weather_condition: 'Overcast',
    },
  ];

  res.json(weatherdata);
});

module.exports = router;
