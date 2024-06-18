const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { addCourse, getCourse, deleteCourse, updateCourse, getCourseById } = require('../controllers/courseFinderController');

router.get('/', getCourse);
router.get('/:id', getCourseById);
router.post('/', addCourse);
router.patch('/',authorization, updateCourse);
router.delete('/:id', authorization, deleteCourse);

module.exports = router;
