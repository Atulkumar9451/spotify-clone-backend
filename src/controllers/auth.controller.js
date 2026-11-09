const { model } = require('mongoose');
const userModel = require('../models/user.model');

const jwt = require('jsonwebtoken')

async function registerUser(req, res) {


  const { username, email, password } = req.body

  const isUsrerAlreadyExist = await userModel.findOne({
    email
  })

  if (isUsrerAlreadyExist) {
    return res.status(409).json({
      message:"user already exists"
    })
  }

  const user = await userModel.create({
    username, email, password
  })

  const token = jwt.sign({
    id: user._id,
  }, process.env.JWT_SECRET)

  res.cookie('token', token)//cookie me store kar rha hun token nam se token store karayenge

  res.status(201).json({
    message: "user registered successfully",
    user
  })
}


module.exports = { registerUser }