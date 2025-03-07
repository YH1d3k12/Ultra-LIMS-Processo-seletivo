const express = require('express');
const ExerciseController = require('../controllers/exercise.js');

const controller = new ExerciseController();
const router = express.Router();

router.get('/1', controller.Fibonnaci);
router.get('/2', controller.BinarySearch);
router.get('/3', controller.PerfectNumbers);
router.get('/4', controller.PalindromicSubstring);
router.get('/5', controller.GiveMeMoney);

module.exports = router;
