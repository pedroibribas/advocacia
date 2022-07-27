const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Register user | POST /api/users | Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Um email e password devem ser informados');
  }

  if (await User.findOne({ email })) {
    res.status(400);
    throw new Error('Já existe um usuário cadastrado com esse email');
  };

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email: email,
    password: hashedPassword
  });

  if (user) {
    res.status(201).json({ message: "Novo usuário registrado" });
  } else {
    res.status(400);
    throw new Error("Dados de usuário inválidos");
  }
});

// Login user | POST /api/users/login | Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Algum dado está incorreto");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

module.exports = {
  registerUser,
  loginUser
};