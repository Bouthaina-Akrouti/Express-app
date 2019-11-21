const express = require('express')
const app = express()


app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    let requestdate = new Date().getHours()

if (requestdate < 8 || requestdate > 17) {
        res.sendFile(__dirname + '/public/date.html')
    }else{
        res.sendFile(__dirname + '/public/home.html')
    }
}
)

app.listen(3000, (err) => {
    if (err) console.log('server is not running')
    else console.log('server is running on port 3000')
})

