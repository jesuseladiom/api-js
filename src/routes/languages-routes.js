const express= require('express')
const router= express.Router();
const languageController= require('./../controller/languages-controller');

router.get("/api/languages", languageController.getLanguages);

module.exports = router;