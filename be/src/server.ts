import { v1 } from '@/router/v1';
import { productSeeder } from '@/seeders/product-seeder';
import { connectToMongoDB } from '@/services/mongodb';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

const app = express();
dotenv.config();
connectToMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/v1', v1);

app.get('/healthcheck', (_req, res) => {
  res.send({ message: 'Ok' });
});

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'development') {
  console.error('The NODE_ENV must be either production or development.');
  process.exit(1);
}

productSeeder();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT} 🚀.`));
