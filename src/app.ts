import express, { Request, Response } from 'express';
import Redis from 'ioredis';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3200;

const redisClient = new Redis();

const getAllProducts = async (): Promise<any> => {
  const time = Math.random() * 5000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Produto 1' },
        { id: 2, name: 'Produto 2' },
        { id: 3, name: 'Produto 3' },
        { id: 4, name: 'Produto 4' },
      ]);
    }, time);
  });
};

app.use(cors()); 

app.get('/clear', async (_req: Request, res: Response) => {
  await redisClient.del('getAllProducts');  
  res.send({ ok: true });
});

app.get('/', async (_req: Request, res: Response) => {
  const productsFromCache = await redisClient.get('getAllProducts');
  if (productsFromCache) {
    return res.send(JSON.parse(productsFromCache));
  }

  const products = await getAllProducts();
  await redisClient.set('getAllProducts', JSON.stringify(products));

  res.send(products);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', ()=> {
  server.close();
  console.log("App finalizado");
})
