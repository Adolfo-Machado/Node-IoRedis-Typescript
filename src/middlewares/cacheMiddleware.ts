// middlewares/cacheMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import Redis from 'ioredis';

const redisClient = new Redis();

const checkCache = (cacheKey: string) => async (req: Request, res: Response, next: NextFunction) => {
  const cachedData = await redisClient.get(cacheKey);

  if (cachedData) {    
    return res.send(JSON.parse(cachedData));
  }
  next();  
};

export default checkCache;