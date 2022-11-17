const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
    var result = {
        "country": "India",
        "latitude": 20.5937,
        "longitude": 78.9629,
        "temperature": 30,
        "wind_speed": 10,
        "flag": "https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg"
    }
    fs.writeFileSync('data.json', JSON.stringify(result))
    res.json(result)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})