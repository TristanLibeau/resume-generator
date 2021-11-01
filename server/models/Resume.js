const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

const resumeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  currentRole: {
    type: String, 
    required: true,
  },
  address1: {
    type: String, 
    required: true,
  }, 
  address2: {
    type: String, 
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String, 
    required: true,
  },
  textValue: {
    type: String, 
    required: true,
  },
  position: {
    type: String, 
    required: true,
  },
  company: {
    type: String, 
    required: true,
  },
  address: {
    type: String, 
    required: true,
  },
  from: {
    type: String, 
    required: true,
  },
  to: {
    type: String, 
    required: true,
  },
  description: {
    type: String, 
    required: true,
  },
  school: {
    type: String, 
    required: true,
  },
  address: {
    type: String, 
    required: true,
  },
  degree: {
    type: String, 
    required: true,
  },
  focus: {
    type: String, 
    required: true,
  },
  from: {
    type: String, 
    required: true,
  },
  to: {
    type: String, 
    required: true,
  },

});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
