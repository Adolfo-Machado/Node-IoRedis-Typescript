// controllers/ClientController.ts
import { Request, Response } from "express";
import { Redis } from "ioredis";
import { fetchAllClients } from "../services/getClients";
import { logService } from "../services/logService";

const redisClient = new Redis();

export const getAllClients = async (req: Request, res: Response) => {

  logService(req);
  let clients = await fetchAllClients();
  await redisClient.set('getAllClients', JSON.stringify(clients));

  res.send(clients);
};

export const clearClientsCache = async (req: Request, res: Response) => {

  logService(req);
  await redisClient.del('getAllClients');
  res.send({CacheClient: 'Limpo'});
};