const express = require('express')
const app = express()
const port = 3000

let Parser = require('rss-parser');
let parser = new Parser();

app.get('/', (req, res) => {
    (async () => {
        let feed = await parser.parseURL('https://podcasts.files.bbci.co.uk/b006qjxt.rss');
        res.send(feed.items[0].enclosure.url)
      })();
  
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})