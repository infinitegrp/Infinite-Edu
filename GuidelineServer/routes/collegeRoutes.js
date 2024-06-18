const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { getCollege, addCollege, deleteCollege } = require('../controllers/collegeController');
const { upload } = require('../middlewares/multer');

router.get('/', getCollege);
router.post("/", authorization, upload.single('image'), addCollege);
// router.patch("/:id",authorization, updateCollege);
router.delete("/", authorization, deleteCollege);

module.exports = router;
