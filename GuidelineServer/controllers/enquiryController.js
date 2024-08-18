const Enquiry = require('../models/enquiry')

const getEnquiry = async (req, res) => {
  try {
    const data = await Enquiry.find().sort({ createdAt: -1 })
    res.status(200).json({ data })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
};

const addEnquiry = async (req, res) => {
  const { firstname, lastname, email, phone, code, course, qualification, message } = req?.body
  try {
    const data = await Enquiry.create({
      firstname, lastname, email, phone, code, course, qualification, message
    })
    res.status(201).json({ data, message: 'Enquiry created successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
}

const updateEnquiry = async (req, res) => {
  const { _id, read, priority } = req?.body
  try {
    const data = await Enquiry.updateOne({ _id },
      { $set: { read, priority } })
    res.status(201).json({ data, message: 'Enquiry updated successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
}

const deleteEnquiry = async (req, res) => {
  try {
    const id = req.params.id
    await Enquiry.deleteOne({ _id: id });
    res.status(200).json({ message: 'Enquiry deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
}

module.exports = {
  getEnquiry,
  addEnquiry,
  updateEnquiry,
  deleteEnquiry,
}