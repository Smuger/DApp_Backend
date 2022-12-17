const express = require('express')
const fileUpload = require('express-fileupload');

const app = express()
const port = 10000
app.use(fileUpload());

app.get('/', (req, res) => {
    (async () => {
        res.send("CONNECTED")
      })();
  
})

app.post('/dapp/backup', (req, res) => {
  console.log(req.files); // the uploaded file object
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})