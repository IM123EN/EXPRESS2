const express=require("express");
const { getAll, getOne } = require("./Controlles/strorescontroller");
const router= express.Router();

router.get('/all',getAll)
router.get('/one',getOne);
module.exports = router;
