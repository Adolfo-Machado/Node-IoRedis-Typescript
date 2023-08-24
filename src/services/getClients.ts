// services/getClients.ts
import { Client } from "../models/Client";

export const fetchAllClients = async (): Promise<Client[]> => {
  const time = Math.random() * 5000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John', email: 'john@email.com' },
        { id: 2, name: 'Bob', email: 'bob@email.com' },
        { id: 3, name: 'Anna', email: 'anna@email.com' },
        { id: 4, name: 'Alex', email: 'alex@email.com' },
      ]);
    }, time);
  });
};
