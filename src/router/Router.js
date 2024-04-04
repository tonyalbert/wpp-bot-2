const express = require('express')
const router = express.Router()
const { sendT, sendF } = require('../controller/appController')

router.post('/send-text', sendT)
router.post('/send-file', sendF)


module.exports = router 