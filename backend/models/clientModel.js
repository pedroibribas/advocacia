const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
    },
    gender: {
      type: String,
      default: 'Não informado'
    },
    civilStatus: {
      type: String,
      default: 'Não informado'
    },
    nationality: {
      type: String,
      default: 'Brasileira'
    },
    job: {
      type: String,
      default: 'Não informado'
    },
    securityNumber: {
      type: String,
      default: 'Não informado'
    },
    registerNumber: {
      rgNumber: {
        type: String,
        default: 'Não informado'
      },
      rgOrigin: {
        type: String,
        default: 'Não informado'
      }
    },
    birth: {
      birthDay: {
        type: Number,
        default: 0,
      },
      birthMonth: {
        type: Number,
        default: 0,
      },
      birthYear: {
        type: Number,
        default: 0,
      },
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
        default: 'Não informado'
      },
      city: {
        type: String,
        default: 'Não informado'
      },
      state: {
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
        default: 0
      }
    },
    email: {
      type: String,
      default: 'Não informado'
    },
    lawsuitNumber: {
      type: String,
      default: 'Não informado'
    },
    description: {
      type: String,
      default: 'Não informado'
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Client', clientSchema);