require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1 style="color:blue";>This is a login page</h1>')
})

app.get('/img', (req, res) => {
    res.send('<img src="https://hblimg.mmtcdn.com/content/hubble/img/img/mmt/activities/m_Mahakaleshwar_jyotirlinga_ujjain_img1_p_1090_818.jpg" alt="My Photo">')
})

app.listen(process.env, () => {
    console.log(`App listening on port ${port}`)
})
