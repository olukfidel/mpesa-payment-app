// ~/mern-ecommerce-v2/server/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Dummy controller function for M-Pesa payment
const processMpesaPayment = (req, res) => {
  // 1. Get user from req.user (attached by 'protect' middleware)
  // 2. Create a new Order in the DB with status 'pending'
  // 3. Initiate STK push
  // 4. In the callback, find the order and update status to 'completed'
  console.log('Processing payment for user:', req.user.name);
  res.json({ message: `STK push initiated for order.` });
};

// @route   POST /api/payments/mpesa -> Logged-in users only
router.post('/mpesa', protect, processMpesaPayment);

module.exports = router;
