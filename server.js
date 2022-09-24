// import
const express = require("express")
const userRouter = require("./routes/users")
// const bodyparser = require("body-parser")

// invoke
const app = express()

app.use("/users", userRouter)
// app.use(express.json())
// app.use(bodyparser.json())

const PORT = 9000

app.listen(PORT, () => {
  console.log(`api ini berjalan di ${PORT}`)
})
