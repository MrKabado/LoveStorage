//app use, initialization of middlewares, and default routing and etc...
import express from 'express'
import cors from 'cors'
import testingRoute from './routes/testingRoute.js'

const app = express() //get all kay global mani nga file

app.use(express.json()) //accept json from frontend
app.use(cors({
  origin: 'http://localhost:5173',
}))

app.use('/api/doc', testingRoute)

export default app
