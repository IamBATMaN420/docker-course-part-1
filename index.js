import  dotenv  from "dotenv"
import express from "express"

dotenv.config()
const app = express()
const PORT=process.env.PORT || 3000


app.get("/api/hello", (req, res) => {
  res.status(201).send("it's working")
})

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})