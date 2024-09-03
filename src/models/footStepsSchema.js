const mongoose = require('mongoose');

const FootstepsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },  // Storing date as 'YYYY-MM-DD'
  footsteps: { type: Number, required: true }
});

export default mongoose.model('Footsteps', FootstepsSchema);