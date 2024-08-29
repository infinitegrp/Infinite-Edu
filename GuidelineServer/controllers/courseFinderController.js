const CourseFinder = require('../models/courseFinder')

const getCourse = async (req, res) => {
    try {
        const data = await CourseFinder.find().sort({ createdAt: -1 })
        res.status(200).json({ data })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
    }
};

const getCourseById = async (req, res) => {
    try {
        const {id} = req?.params
        const data = await CourseFinder.findOne({_id:id})
        res.status(200).json({ data })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
    }
};

const addCourse = async (req, res) => {
    const { name, abbreviation, description } = req?.body
    try {
        const data = await CourseFinder.create({
            name, abbreviation, description,
        })
        res.status(201).json({ data, message: 'Course created successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
    }
}

const updateCourse = async (req, res) => {
    const { _id, name, abbreviation, description } = req?.body
    try {
        const data = await CourseFinder.updateOne({ _id },
            { $set: { name, abbreviation, description, } })
        res.status(201).json({ data, message: 'Course updated successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
    }
}

const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id
        await CourseFinder.deleteOne({ _id: id });
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
    }
}

module.exports = {
    getCourse,
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourse,
}