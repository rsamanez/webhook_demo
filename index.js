// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing


// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))


app.post("/hook", (req, res) => {
  console.log(req.rawHeaders) // Call your action on the request here
  console.log(req.originalUrl) // Call your action on the request here
  console.log(req._parsedUrl) // Call your action on the request here
  res.status(200).end() // Responding is important
})
