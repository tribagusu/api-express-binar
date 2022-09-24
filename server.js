// import
const express = require("express")
const userRouter = require("./routes/users")

// invoke
const app = express()

app.use(express.json())
app.use("/users", userRouter)

const PORT = 9000

app.listen(PORT, () => {
  console.log(`api ini berjalan di ${PORT}`)
})
