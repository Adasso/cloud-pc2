const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const res = require('express/lib/response');
// get all students
router.get('/api', async (req, res)=>{
    const students = await Student.find()
    res.send(students)
})

router.post('/api', async (req,res)=>{
    const studentId = req.body.id;
    const studentCode = req.body.code;
    const studentName = req.body.first_name;
    const studentLastName = req.body.last_name;
    const studentMail = req.body.mail;
    const studentMajor = req.body.major;

    const student = new Student({
        code: studentCode,
        first_name: studentName,
        last_name: studentLastName,
        mail: studentMail,
        major: studentMajor
    })

    try {
        await student.save();
        res.send(student)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router