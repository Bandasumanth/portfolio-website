import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import { createContactTable } from './models/Contact.js';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Database
createContactTable();

// Routes
app.use('/api', contactRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Email notifications enabled`);
  console.log(`💾 Database connected\n`);
});

export default app;
