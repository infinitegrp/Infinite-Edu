const Course = require('../models/course')

const getCourse = async (req, res) => {
  try {
    const data = await Course.find().sort({ createdAt: -1 })
    res.status(200).json({ data })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
};

const addCourse = async (req, res) => {
  const { name, abbreviation, institution, description, type, fee, admission_fee, duration, fastrack, semester, isAvailable } = req?.body
  try {
    const data = await Course.create({
      name, abbreviation, institution, description, type, fee, admission_fee, duration, fastrack, semester, isAvailable,
    })
    res.status(201).json({ data, message: 'Course created successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
}

const updateCourse = async (req, res) => {
  const { _id, name, abbreviation, institution, description, type, fee, admission_fee, duration, fastrack, semester, isAvailable } = req?.body
  try {
    const data = await Course.updateOne({ _id },
      { $set: { name, abbreviation, institution, description, type, fee, admission_fee, duration, fastrack, semester, isAvailable, } })
    res.status(201).json({ data, message: 'Course updated successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
}

const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id
    await Course.deleteOne({ _id: id });
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
}

module.exports = {
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
}