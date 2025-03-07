const express = require('express');
const ExerciseController = require('../controllers/exercise.js');

const controller = new ExerciseController();
const router = express.Router();

router.post('/1', controller.Fibonnaci);
router.post('/2', controller.BinarySearch);
router.post('/3', controller.PerfectNumbers);
router.post('/4', controller.PalindromicSubstring);
router.post('/5', controller.GiveMeMoney);

module.exports = router;
