const express = require('express');
const { getClients, setClient, getClient, updateClient, deleteClient } = require('../controllers/clientController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route /api/clients
router.route('/').get(protect, getClients).post(protect, setClient);
// @route /api/clients/:id
router
  .route('/:id')
  .get(protect, getClient)
  .patch(protect, updateClient)
  .delete(protect, deleteClient);

module.exports = router;