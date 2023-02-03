const express = require('express')
const router = express.Router();

router.route("/").get(getallProducts)
router.route("/testing").get(getallProductsTesting)

module.exports=router