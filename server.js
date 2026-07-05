const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON and URL-encoded body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Disable caching for all API routes
app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// ------------------ API ROUTES ------------------

// 1. Site Info API
app.get('/api/site-info', (req, res) => {
  const data = db.getData();
  res.json(data.siteInfo);
});

// 2. Projects APIs
app.get('/api/projects', (req, res) => {
  const data = db.getData();
  const sortedProjects = [...data.projects].sort((a, b) => (a.order || 0) - (b.order || 0));
  res.json(sortedProjects);
});

app.get('/api/projects/:id', (req, res) => {
  const data = db.getData();
  const project = data.projects.find(p => p.id === req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

// 3. Services API
app.get('/api/services', (req, res) => {
  const data = db.getData();
  res.json(data.services);
});

// 4. Testimonials API
app.get('/api/testimonials', (req, res) => {
  const data = db.getData();
  res.json(data.testimonials);
});

// 5. Contact Message API (saves to local database)
app.post('/api/contact', (req, res) => {
  const { name, email, projectType, budget, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  
  const data = db.getData();
  const newMessage = {
    id: `msg-${Date.now()}`,
    name,
    email,
    projectType: projectType || 'General Inquiry',
    budget: budget || 'Not Specified',
    message,
    date: new Date().toISOString(),
    read: false
  };
  
  data.messages.push(newMessage);
  db.saveData(data);
  res.json({ success: true, message: 'Message sent successfully.' });
});

// ------------------ PAGE SERVING ------------------

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route: serve index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Sun Soul Style website is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
