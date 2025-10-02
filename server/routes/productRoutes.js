// ~/mern-ecommerce-v2/server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');

// Dummy controller functions for demonstration
const getProducts = (req, res) => res.json({ message: 'All products' });
const createProduct = (req, res) => res.status(201).json({ message: 'Product created' });

// @route   GET /api/products -> Publicly accessible
router.get('/', getProducts);

// @route   POST /api/products -> Admin only
router.post('/', protect, admin, createProduct); // Chained middleware!

module.exports = router;
