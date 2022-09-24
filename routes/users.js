// import
const express = require("express")
// invoke
const router = express.Router()

const usersData = []

//# method get
router.get("/", (req, res) => {
  res.send(usersData)
})

//# method post
router.post("/", (req, res) => {
  console.log(req.body)
  res.send("berhasil")
  usersData.push(req.body)
  // if (usersData.length > 1) {
  //   res.send("data berhasil ditambah")
  // }
})

module.exports = router
