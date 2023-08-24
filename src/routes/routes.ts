// routes/routes.ts
import { Router } from 'express';
import { getAllProducts, clearProductsCache } from '../controllers/ProductController';
import { getAllClients, clearClientsCache } from '../controllers/ClientController';
import checkCache from '../middlewares/cacheMiddleware';

const router = Router();

router.get('/clearprod', clearProductsCache);
router.get('/clearcli', clearClientsCache);
router.get('/prod', checkCache('getAllProducts'), getAllProducts);
router.get('/cli', checkCache('getAllClients'),  getAllClients);

export default router;
