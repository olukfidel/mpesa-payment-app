// ~/mern-ecommerce-v2/server/models/orderModel.js
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    products: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, required: true, enum: ['M-Pesa', 'Stripe'] },
    paymentStatus: {
      type: String,
      required: true,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    // Store transaction IDs for auditing
    mpesaTransactionId: { type: String },
    stripePaymentIntentId: { type: String },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
