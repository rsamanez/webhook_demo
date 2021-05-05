// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 8080
var log4js = require("log4js");
log4js.configure(
  {
    appenders: {
      file: {
        type: 'file',
        filename: 'important-things.log',
        maxLogSize: 10 * 1024 * 1024, // = 10Mb
        backups: 5, // keep five backup files
        compress: true, // compress the backups
        encoding: 'utf-8',
        mode: 0o0640,
        flags: 'w+'
      },
      dateFile: {
        type: 'dateFile',
        filename: 'more-important-things.log',
        pattern: 'yyyy-MM-dd-hh',
        compress: true
      },
      out: {
        type: 'stdout'
      }
    },
    categories: {
      default: { appenders: ['file', 'dateFile', 'out'], level: 'trace' }
    }
  }
);
const logger = log4js.getLogger('Web-Hooks');
// logger.debug('This little thing went to market');
// logger.info('This little thing stayed at home');
// logger.error('This little thing had roast beef');
// logger.fatal('This little thing had none');
// logger.trace('and this little thing went wee, wee, wee, all the way home.');
// Tell express to use body-parser's JSON parsing


// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))


app.post("/hook", (req, res) => {
  logger.info(req.rawHeaders)
  console.log(req.rawHeaders) // Call your action on the request here
  console.log(req.originalUrl) // Call your action on the request here
  logger.info(req.originalUrl)
  console.log(req._parsedUrl) // Call your action on the request here
  logger.info(req._parsedUrl)
  res.status(200).end() // Responding is important
})
