// controllers/ProductController.ts
import { Request, Response } from 'express';
import Redis from 'ioredis';
import { fetchAllProducts } from '../services/getProducts';
import { logService } from '../services/logService';

const redisClient = new Redis();

export const getAllProducts = async (req: Request, res: Response) => {
  
  logService(req);
  const products = await fetchAllProducts();
  await redisClient.set('getAllProducts', JSON.stringify(products));

  res.send(products);
};

export const clearProductsCache = async (req: Request, res: Response) => {

  logService(req);
  await redisClient.del('getAllProducts');
  res.send({ CacheProduct: 'Limpo' });
};

