import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())  //es un middleware que transforma la req.body en un json

const PORT = 3000

app.get('/ping', (_req, res) => {  //cuando pongo _req es = a '_' que implica, ignora el parametro, si ignoras mas de uno, _param1, _param2 
    console.log('some pinged here!!')
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})