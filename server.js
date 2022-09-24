const express = require("express")

const app = express()
const userRouter = require("./routes/users")

app.use("/users", userRouter)

const PORT = 9000

app.listen(PORT, () => {
  console.log(`api ini berjalan di ${PORT}`)
})
