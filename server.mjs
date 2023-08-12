
console.log("Hello world express js ways of output");

import express from 'express'
import cors from 'cors'
import path from 'path'
const __dirname = path.resolve();

const app = express()
app.use(cors())
app.use(express.json()) //body parser

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.post("/weather", (req, res, next) => {

    console.log("req.body:", req.body);

    // res.send("Weather is normal"); //Not recommened

    // res.end()

    res.send({

        message: "Weather is normal",
        temp: 32,
        min: 20,
        
    });
})

app.get('/getHtmlFile', (req, res, next) => {

    res.sendfile('./public/vscode_windows.exe') 

})

// app.get('/getHtmlFile', (req, res) => {

//     res.sendfile('./public/download.jpeg')

// })

// app.get('/getHtmlFile', (req, res) => {

//     res.sendfile('./public/index.html')

// })

//   /static/vscode_windows.exe
app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})