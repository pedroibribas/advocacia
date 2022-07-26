const express = require('express');
const { getClients, setClient, getClient, updateClient, deleteClient } = require('../controllers/clientController');
// const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route /api/clients
router.route('/').get(getClients).post(setClient);
// @route /api/clients/:id
router.route('/:id').get(getClient).patch(updateClient).delete(deleteClient);

module.exports = router;