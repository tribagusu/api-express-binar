const express = require("express")
const router = express.Router()

const usersData = [
  {
    id: 1,
    name: "muhsin",
    address: "bogor",
  },
]

router.get("/", (req, res) => {
  res.send(usersData)
})

module.exports = router
