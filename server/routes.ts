import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // You would typically send an email or store the contact submission here
      // Since this is a static site, we'll just return success
      
      res.status(200).json({ message: 'Message received successfully' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });

  // Serve resume PDF if it exists
  app.get('/resume.pdf', (req, res) => {
    const resumePath = path.join(process.cwd(), 'dist', 'public', 'resume.pdf');
    
    // Check if resume file exists
    if (fs.existsSync(resumePath)) {
      res.sendFile(resumePath);
    } else {
      // If resume doesn't exist, return a 404
      res.status(404).json({ message: 'Resume file not found' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
