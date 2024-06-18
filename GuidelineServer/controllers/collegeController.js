const College = require('../models/college')
const fs = require('fs');

const getCollege = async (req, res) => {
  try {
    const data = await College.find()
    res.status(200).json({ data })
  } catch (error) {
    console.log(error);
  }
};

const addCollege = async (req, res) => {
  const { name, desc } = req?.body
  const image = req?.file?.filename
  try {
    let arr = []
    const collegeData = await College.find()
    collegeData.map(x => {
      arr.push(x?.name?.toUpperCase())
    })
    const college = name.toUpperCase()
    const isExisting = arr.findIndex(x => x == college)
    if (isExisting === -1) {
      const data = new College({ name, desc, image })
      await data.save()
      res.status(201).json({ data: data, message: 'college created successfully' });
    } else {
      return res.status(400).json({ message: 'college already exists' })
    }
  } catch (error) {
    console.log(error);
  }
}

const deleteCollege = async (req, res) => {
  try {
    const id = req.query.id
    const data = await College.deleteOne({ _id: id });
    fs.unlink(`public/uploads/${data?.image}`, (err) => {
      if (err) {
        console.error('Error deleting image:', err);
        return;
      }
      console.log('Image deleted successfully.');
    });
    res.status(200).json({ message: 'college deleted successfully' });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    getCollege,
    addCollege,
    deleteCollege,
  }