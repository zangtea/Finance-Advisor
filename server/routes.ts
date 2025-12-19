import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { setupAuth, registerAuthRoutes } from "./replit_integrations/auth";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Auth setup
  await setupAuth(app);
  registerAuthRoutes(app);

  // Leads API
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.leads.list.path, async (req, res) => {
    // In a real app, you might check authentication here
    // if (!req.isAuthenticated()) return res.status(401).send();
    const allLeads = await storage.getLeads();
    res.json(allLeads);
  });

  // Seed data
  if ((await storage.getLeads()).length === 0) {
    await storage.createLead({
      name: "John Doe",
      phone: "1234567890",
      needs: "Looking for a personal loan of $5000",
    });
    await storage.createLead({
      name: "Jane Smith",
      phone: "0987654321",
      needs: "Interested in high-yield savings accounts",
    });
  }

  return httpServer;
}
