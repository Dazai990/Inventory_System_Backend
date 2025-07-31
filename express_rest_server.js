const express = require('express')
const connectToMongoDB = require('./dbconfig/db_connectivity')
const productServiceRouter = require('./controllers/product_service_router')
const cors = require('cors')

const app = express();
connectToMongoDB();

app.use(cors());

app.use(express.json())

app.use('/api/products',productServiceRouter)

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Product RESTFul 
    Service started and listening on port ${PORT}`))
