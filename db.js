const fs = require('fs');
const path = require('path');

const BUNDLE_DB_PATH = path.join(__dirname, 'db.json');
const DB_PATH = process.env.VERCEL
  ? path.join('/tmp', 'db.json')
  : BUNDLE_DB_PATH;

const DEFAULT_DB = {
  siteInfo: {
    name: "Sun Soul Style",
    designerName: "Keshavi Gupta",
    tagline: "Warm, elevated spaces shaped by natural light and organic textures.",
    philosophy: "We believe a home should feel like an extension of the soul. Our design language merges tactile simplicity with confident refinement — balancing cream boucle textures, raw walnut wood, and warm Mediterranean tones.",
    heroVideoUrl: "/assets/hero-video.mp4",
    heroVideoUrlPortrait: "/assets/hero-mobile.mp4",
    heroFallbackImg: "/assets/hero-interior.jpg",
    bio: "Inspired by Mediterranean architecture, natural textiles, and the quiet luxury of clean lines, Keshavi Gupta creates spaces that feel both elevated and deeply lived-in. Based in Jaipur, Rajasthan, her boutique studio specializes in high-end residential interiors that honor natural light, organic materials, and hand-crafted details.",
    bioPhoto: "/assets/kp.png",
    contactEmail: "hello@sunsoulstyle.com",
    contactPhone: "+91 70733 19692",
    studioLocation: "Jaipur, Rajasthan",
    instagram: "@sun_soul_style",
    responseTimeNote: "We typically respond to new inquiries within 2-3 business days. We look forward to shaping your space."
  },
  projects: [],
  services: [],
  testimonials: [],
  messages: []
};

// Initialize DB locally
function initDb() {
  if (!fs.existsSync(DB_PATH)) {
    let initialData = DEFAULT_DB;
    if (fs.existsSync(BUNDLE_DB_PATH)) {
      try {
        initialData = JSON.parse(fs.readFileSync(BUNDLE_DB_PATH, 'utf-8'));
      } catch (e) {
        initialData = DEFAULT_DB;
      }
    } else {
      fs.writeFileSync(BUNDLE_DB_PATH, JSON.stringify(DEFAULT_DB, null, 2), 'utf-8');
    }
    
    // Ensure the folder exists (for Vercel /tmp)
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
  }
}

initDb();

function waitForInit() {
  return Promise.resolve();
}

function getData() {
  try {
    const content = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    if (fs.existsSync(BUNDLE_DB_PATH)) {
      try {
        return JSON.parse(fs.readFileSync(BUNDLE_DB_PATH, 'utf-8'));
      } catch (e) {}
    }
    return DEFAULT_DB;
  }
}

function saveData(data) {
  try {
    const tempPath = `${DB_PATH}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempPath, DB_PATH);
  } catch (err) {
    console.error("Failed to save database:", err);
  }
}

module.exports = {
  getData,
  saveData,
  waitForInit
};
