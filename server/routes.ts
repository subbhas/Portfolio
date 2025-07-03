import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to save contact" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Generate vCard
  app.get("/api/vcard", (req, res) => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jayan Jayabal
ORG:WealthX Financial Solutions
TITLE:Founder & CEO
ADR:;;142 Esplanade East;North Vancouver;BC;V7L 4X9;Canada
TEL:+1-604-555-0123
EMAIL:jayan@jayanjayabal.com
URL:https://jayanjayabal.com
NOTE:Wealth Management & Venture Capital Expert
END:VCARD`;

    res.setHeader('Content-Type', 'text/vcard');
    res.setHeader('Content-Disposition', 'attachment; filename="jayan-jayabal.vcf"');
    res.send(vCardData);
  });

  const httpServer = createServer(app);
  return httpServer;
}
