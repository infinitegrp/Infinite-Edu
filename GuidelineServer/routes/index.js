const express = require('express');
const authRoutes = require('./authRoutes');
const courseRoutes = require('./courseRoutes');
const enquiryRoutes = require('./enquiryRoutes');
const blogRoutes = require('./blogRoutes');
const router = express.Router();

router.use('/v1/auth', authRoutes);
router.use('/v1/courses', courseRoutes);
router.use('/v1/enquiry', enquiryRoutes);
router.use('/v1/blogs', blogRoutes);

module.exports = router;
