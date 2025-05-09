import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    required: true
  },
  registeredCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  completedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
}, { timestamps: true });


export default mongoose.model('User', userSchema);



// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     enum: ['admin', 'student'],
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   rollNumber: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   department: {
//     type: String,
//     required: true
//   },
//   year: {
//     type: String,
//     required: true
//   },
//   registeredCourses: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Course'
//   }],
//   completedCourses: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Course'
//   }]
// }, { timestamps: true });

// export default mongoose.model('User', userSchema);
