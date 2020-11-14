const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  ip: {
    type: String, 
    default: 'bez ip'
  }
})

module.exports = model('newEmail', schema)