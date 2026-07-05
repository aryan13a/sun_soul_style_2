# Sun Soul Style — Premium Interior Designer Portfolio Website

An elegant, editorial-style portfolio website built for a boutique interior design studio. Designed with soft neutral tones, raw wood details, and natural light to convey calm luxury and tactile refinement.

## Key Features

- **Homepage**: Full-bleed hero image/video, signature serif philosophy quote, featured projects grid with visual hover cards, curated Instagram strip, testimonials carousel, and newsletter call-to-action.
- **Dynamic Portfolio Grid**: Interactive filters (all, full-home, kitchen, bedroom, dining-room) and slide-up transition entries.
- **Bespoke Case Studies**: Case-study template displaying concept narratives, material lists, customized color palettes, double-column masonry galleries, and an interactive **Before & After comparison slider**.
- **Services**: Service offering columns detailing inclusions and rates.
- **Contact Inquiry**: Responsive booking form with project type and budget dropdown selectors, with direct integration to WhatsApp and submitting to a local inquiries list.

---

## Tech Stack

- **Frontend**: Semantic HTML5, Vanilla JavaScript, and Custom CSS3 (flexible variables, smooth transitions, custom cursors, scroll reveals).
- **Backend**: Node.js & Express (API controllers, static servers).
- **Database**: Local JSON file-store (`db.json` / `db.js`) for storing site text and portfolio configuration.

---

## Getting Started

### Prerequisites
- Node.js (v16.0 or higher)

### Setup & Run
1. Navigate into the project folder:
   ```cmd
   cd C:\Users\Lenovo\sun_soul_style_2
   ```
2. Install dependencies:
   ```cmd
   npm install
   ```
3. Launch the server:
   ```cmd
   npm start
   ```
4. Open your web browser and navigate to:
   - [http://localhost:3000](http://localhost:3000)

---

## Project Structure

- `server.js`: API routes and static servers.
- `db.js`: Database reading engine.
- `db.json`: JSON database storage holding website text and portfolio configuration.
- `public/`:
  - `index.html`: Homepage structure.
  - `projects.html`: Portfolio grid listing.
  - `project-detail.html`: Case study page template.
  - `about.html`: Biography page.
  - `services.html`: Packages redirect page.
  - `contact.html`: Inquiries form.
  - `css/style.css`: Main stylesheet styling the entire design system.
  - `js/main.js`: Main client-side script handling pages, sliders, and animation.
  - `assets/`: SVGs and seed images (covers, gallery, designer portrait, logo).
