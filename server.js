import express from 'express';
import bodyParser from "body-parser";
import connect from './database/mongodb.js';
import cors from 'cors';
import MovieApis from './routes/MoviesApi.js';
import ReviewApis from './routes/ReviewsApi.js';

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use('/movie', MovieApis);
app.use('/review', ReviewApis);

await connect();

app.listen(PORT, () => {
    console.log('Server is running at http://localhost:4000');
})