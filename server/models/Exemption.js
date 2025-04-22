import mongoose from 'mongoose';

const exemptionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  completedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  }],
  electiveCourse: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  rejectionReason: {  // 🆕 Added field
    type: String,
    default: ''
  }
}, { timestamps: true });

export default mongoose.model('Exemption', exemptionSchema);
