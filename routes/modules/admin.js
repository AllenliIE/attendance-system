const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const { authenticatedAdmin } = require('../../middleware/auth') 

router.get('/attendance', authenticatedAdmin, adminController.getAttendance)
router.use('/', (req, res) => res.redirect('/admin/attendance'))

module.exports = router