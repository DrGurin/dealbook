const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  wallet: {
    type: String, 
    default: ''
  },
  ip: {
    type: String, 
    default: 'bez ip'
  }
})

module.exports = model('donator', schema)