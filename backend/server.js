
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;
connectDB();
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);


app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => res.send('API running'));

app.listen(port, () => console.log(`Server started on port ${port}`));