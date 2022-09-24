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
  dataBody = req.body
  usersData.push({ id: uuidv4(), ...dataBody })
  res.send("berhasil")
})

//# method get params
router.get("/:id", (req, res) => {
  console.log(req.params)
  const dataId = req.params
  const user = usersData.find((item) => (item.id = dataId.id))
  res.send(user)
})

module.exports = router
