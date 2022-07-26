const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Client = require('../models/clientModel');

// Get clients | GET /api/clients | Private
const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find()
  res.status(200).json(clients)
})

// Register client | POST /api/clients | Private
const setClient = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    securityNumber,
    registerNumber,
    birthDay,
    birthMonth,
    birthYear,
    nationality,
    street,
    addressNumber,
    cityArea,
    city,
    country,
    postalCode,
    countryCode,
    areaCode,
    phoneNumber,
    email,
    civilStatus,
    job,
    income,
    description
  } = req.body;

  if (!firstName || !lastName) {
    res.status(400);
    throw new Error('É necessário um nome e um sobrenome para efetuar a solicitação');
  };

  if (firstName.length > 15 || lastName.length > 15) {
    res.status(400);
    throw new Error('O nome ou o sobrenome não podem ter mais do que 15 caracteres');
  };

  const data = {
    name: {
      firstName,
      lastName
    },
    securityNumber,
    registerNumber,
    birth: {
      birthDay,
      birthMonth,
      birthYear
    },
    nationality,
    address: {
      street,
      cityArea,
      addressNumber,
      city,
      country,
      postalCode,
    },
    phone: {
      countryCode,
      areaCode,
      phoneNumber
    }
    ,
    email,
    civilStatus,
    job,
    income,
    description
  };

  const client = await Client.create(data);
  const fullname = client.name.firstName + ' ' + client.name.lastName;

  res.status(201).json({ message: `O cadastro de ${fullname} foi criado` });
});

// Get client | GET /api/clients/:id | Private
const getClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id)
  res.status(200).json(client)
})

// Update client | PATCH /api/clients/:id | Private
const updateClient = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    securityNumber,
    registerNumber,
    birthDay,
    birthMonth,
    birthYear,
    nationality,
    street,
    addressNumber,
    cityArea,
    city,
    country,
    postalCode,
    countryCode,
    areaCode,
    phoneNumber,
    email,
    civilStatus,
    job,
    income,
    description
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error('Formato de id incorreto');
  }

  const client = await Client.findById(req.params.id);

  if (!client) {
    res.status(400);
    throw new Error('Nenhum cliente encontrado');
  };

  if (firstName?.length > 15 || lastName?.length > 15) {
    res.status(400);
    throw new Error('O nome ou o sobrenome não podem ter mais do que 15 caracteres');
  };

  const data = {
    name: {
      firstName,
      lastName
    },
    securityNumber,
    registerNumber,
    birth: {
      birthDay,
      birthMonth,
      birthYear
    },
    nationality,
    address: {
      street,
      cityArea,
      addressNumber,
      city,
      country,
      postalCode,
    },
    phones: {
      countryCode,
      areaCode,
      phoneNumber
    }
    ,
    email,
    civilStatus,
    job,
    income,
    description
  };

  const updatedClient = await Client.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });

  res.status(200).json({ message: `O cadastro foi atualizado`, data: updatedClient });
});


// Delete client | DELETE /api/clients/:id | Private
const deleteClient = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error('Formato de id incorreto');
  }

  const client = await Client.findById(req.params.id);

  if (!client) {
    res.status(400);
    throw new Error('Nenhum cliente encontrado');
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