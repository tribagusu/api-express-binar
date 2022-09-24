// import
const express = require("express")
// invoke
const router = express.Router()

const usersData = [
  {
    id: 1,
    name: "muhsin",
    address: "bogor",
  },
]

//# method get
router.get("/", (req, res) => {
  res.send(usersData)
})

//# method post
router.post("/", (req, res) => {
  console.log(req.body)
  res.send("berhasil")
})

module.exports = router
