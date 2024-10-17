import { Installment } from '@/models/Installment';
import { Price } from '@/models/Price';
import { v1 } from '@/router/v1';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import request from 'supertest';

Price;
Installment;

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', v1);

describe('GET /products', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI!);
  });

  it('should return six products with pagination', async () => {
    const res = await request(app).get('/api/v1/products');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBe(6);
    expect(res.body.next).toBe(null);
    expect(res.body.prev).toBe(null);
    expect(res.body.currentPage).toBe(1);
    expect(res.body.totalPages).toBe(1);
    expect(res.body.quantity).toBe(6);
    expect(res.body.skip).toBe(0);
  });

  it('should return 2 products with page and limit query params set to 2 each', async () => {
    const res = await request(app).get('/api/v1/products?page=1&limit=2');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBe(2);
    expect(res.body.next.endsWith('/api/v1/products/?page=2&limit=2')).toBe(true);
    expect(res.body.prev).toBe(null);
    expect(res.body.currentPage).toBe(1);
    expect(res.body.totalPages).toBe(3);
    expect(res.body.quantity).toBe(6);
    expect(res.body.skip).toBe(0);
  });

  it('should return a single product with energyClass set to C at the query param', async () => {
    const res = await request(app).get('/api/v1/products?energyClass=C');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].energyClass).toBe('C');
  });

  it('should return status 400 when a query param has incorrect value', async () => {
    const res = await request(app).get('/api/v1/products?energyClass=Z');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message[0].message).toBe("Invalid enum value. Expected 'A' | 'B' | 'C', received 'Z'");
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });
});
