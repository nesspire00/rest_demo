const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: {
    type: String,
    required: 'Please the city name',
  },
  temperature: {
    type: Number,
    required: 'Please enter the temperature value',
  },
  weather_condition: {
    type: String,
    required: 'Please enter the weather condition',
  },
});

module.exports = mongoose.model('Weather', weatherSchema);
