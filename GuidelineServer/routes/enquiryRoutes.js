const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { addEnquiry, getEnquiry, deleteEnquiry, updateEnquiry } = require('../controllers/enquiryController');

router.get('/', getEnquiry);
router.post('/', addEnquiry);
router.patch('/:id',authorization, updateEnquiry);
router.delete('/:id', authorization, deleteEnquiry);

module.exports = router;
