const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
  {
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    securityNumber: {
      type: String,
      default: 'Não informado'
    },
    registerNumber: {
      number: {
        type: String,
        default: 'Não informado'
      },
      origin: {
        type: String,
        default: 'Não informado'
      }
    },
    birth: {
      birthDay: {
        type: Number,
        default: 00,
      },
      birthMonth: {
        type: Number,
        default: 00,
      },
      birthYear: {
        type: Number,
        default: 00,
      },
    },
    nationality: {
      type: String,
      default: 'Brasileira'
    },
    address: {
      street: {
        type: String,
        default: 'Não informado',
      },
      addressNumber: {
        type: Number,
        default: 0
      },
      cityArea: {
        type: String,
        default: 'Não informadom'
      },
      city: {
        type: String,
        default: 'Não informado'
      },
      country: {
        type: String,
        default: 'Brasil'
      },
      postalCode: {
        type: String,
        default: 'Não informado'
      },
    },
    phone: {
      countryCode: {
        type: Number,
        default: 55
      },
      areaCode: {
        type: Number,
        default: 18,
      },
      phoneNumber: {
        type: Number,
        default: 00000000
      }
    },
    email: {
      type: String,
      default: 'Não informado'
    },
    civilStatus: {
      type: String,
      default: 'Não informado'
    },
    job: {
      type: String,
      default: 'Não informado'
    },
    income: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: 'Não informado'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Client', clientSchema);