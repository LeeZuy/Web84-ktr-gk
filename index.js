import express from 'express';
import RootRouter from './routes/index.js';
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
await mongoose.connect(process.env.MONGOOSE_URI).then(() => {
    console.log('Connected database!');
});

const app = express();
app.use(express.json());


app.get('', (req, res) => {
    res.send({
        message: 'Connected!'
    })
});

app.use('/api',RootRouter)

app.listen(8080, () => {
    console.log('Server is running!');
})