// import
const express = require("express")
const { v4: uuidv4 } = require("uuid")
// invoke
const router = express.Router()

const usersData = []

//# method get
router.get("/", (req, res) => {
  res.send(usersData)
})

//# method post
router.post("/", (req, res) => {
  // console.log(req.body)
  usersData.push({ id: uuidv4(), ...req.body })
  res.send("berhasil")
})

module.exports = router
