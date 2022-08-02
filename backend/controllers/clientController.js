const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Client = require('../models/clientModel');
const User = require('../models/userModel');

// Get clients | GET /api/clients | Private
const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find({ user: req.user.id });
  res.status(200).json(clients);
});

// Register client | POST /api/clients | Private
const setClient = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    gender,
    civilStatus,
    nationality,
    job,
    securityNumber,
    rgNumber,
    rgOrigin,
    birthDay,
    birthMonth,
    birthYear,
    street,
    addressNumber,
    cityArea,
    city,
    state,
    country,
    postalCode,
    countryCode,
    areaCode,
    phoneNumber,
    email,
    lawsuitNumber,
    description
  } = req.body;

  if (!firstName || !lastName) {
    res.status(400);
    throw new Error('É necessário um nome e um sobrenome');
  };

  const data = {
    user: req.user.id,
    name: {
      firstName,
      lastName
    },
    gender,
    civilStatus,
    nationality,
    job,
    securityNumber,
    registerNumber: {
      rgNumber,
      rgOrigin
    },
    birth: {
      birthDay,
      birthMonth,
      birthYear
    },

    address: {
      street,
      cityArea,
      addressNumber,
      city,
      state,
      country,
      postalCode,
    },
    phone: {
      countryCode,
      areaCode,
      phoneNumber
    },
    email,
    lawsuitNumber,
    description
  };

  const client = await Client.create(data);

  const fullname = client.name.firstName + ' ' + client.name.lastName;

  res.status(201).json({ message: `O cadastro de ${fullname} foi criado` });
});

// Get client | GET /api/clients/:id | Private
const getClient = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Formato de caminho incorreto");
  }

  const client = await Client.findById(req.params.id);

  if (!client) {
    res.status(400);
    throw new Error("O cadastro não foi encontrado");
  };

  const user = await User.findById(req.user.id);

  if (client.user.toString() !== user.id) {
    res.status(401);
    throw new Error('O usuário não está autorizado');
  };

  res.status(200).json(client);
});

// Update client | PATCH /api/clients/:id | Private
const updateClient = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Formato de caminho incorreto");
  }

  const client = await Client.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (client.user.toString() !== user.id) {
    res.status(401);
    throw new Error('O usuário não está autorizado');
  };

  if (req.body.firstName) client.name.firstName = req.body.firstName;
  if (req.body.lastName) client.name.lastName = req.body.lastName;
  if (req.body.gender) client.gender = req.body.gender;
  if (req.body.civilStatus) client.civilStatus = req.body.civilStatus;
  if (req.body.nationality) client.nationality = req.body.nationality;
  if (req.body.job) client.job = req.body.job;
  if (req.body.securityNumber) client.securityNumber = req.body.securityNumber;
  if (req.body.rgNumber) client.registerNumber.rgNumber = req.body.rgNumber;
  if (req.body.rgOrigin) client.registerNumber.rgOrigin = req.body.rgOrigin;
  if (req.body.birthDay) client.birth.birthDay = req.body.birthDay;
  if (req.body.birthMonth) client.birth.birthMonth = req.body.birthMonth;
  if (req.body.birthYear) client.birth.birthYear = req.body.birthYear;
  if (req.body.street) client.address.street = req.body.street;
  if (req.body.addressNumber) client.address.addressNumber = req.body.addressNumber;
  if (req.body.cityArea) client.address.cityArea = req.body.cityArea;
  if (req.body.city) client.address.city = req.body.city;
  if (req.body.postalCode) client.address.postalCode = req.body.postalCode;
  if (req.body.state) client.address.state = req.body.state;
  if (req.body.country) client.address.country = req.body.country;
  if (req.body.countryCode) client.phone.countryCode = req.body.countryCode;
  if (req.body.areaCode) client.phone.areaCode = req.body.areaCode;
  if (req.body.phoneNumber) client.phone.phoneNumber = req.body.phoneNumber;
  if (req.body.email) client.email = req.body.email;
  if (req.body.lawsuitNumber) client.lawsuitNumber = req.body.lawsuitNumber;
  if (req.body.description) client.description = req.body.description;

  await client.save();

  const fullname = client.name.firstName + ' ' + client.name.lastName;

  res.status(201).json({ message: `O cadastro de ${fullname} foi alterado` });
});

// Delete client | DELETE /api/clients/:id | Private
const deleteClient = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Formato de caminho incorreto");
  }

  const client = await Client.findById(req.params.id);

  if (!client) {
    res.status(400);
    throw new Error('Nenhum cliente encontrado');
  };

  const user = await User.findById(req.user.id);

  if (client.user.toString() !== user.id) {
    res.status(401);
    throw new Error('O usuário não está autorizado');
  };

  const fullname = client.name.firstName + ' ' + client.name.lastName;

  await client.remove();

  res.status(200).json({ message: `O cadastro de ${fullname} foi excluído` });
});


module.exports = {
  getClients,
  setClient,
  getClient,
  updateClient,
  deleteClient
};