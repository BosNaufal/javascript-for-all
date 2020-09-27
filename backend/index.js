const express = require('express')
const app = express()
const port = 5000

app.get('/', function (req, res) {
  res.json('Halo Dunia')
})
app.get('/belanjaan', function (req, res) {
  res.json([
    {
      id: 1,
      image: "http://image_url_1",
      name: "Sepatu Gunung",
      price: 35,
      qty: 1,
      size: "42",
      color: "Brown",
    },
    {
      id: 2,
      image: "http://image_url_2",
      name: "Sepatu Cinderella",
      price: 50,
      qty: 1,
      size: "39",
      color: "Red",
    },
    {
      id: 3,
      image: "http://image_url_3",
      name: "Sepatu Kereta",
      price: 21,
      qty: 1,
      size: "40",
      color: "Brown",
    },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})