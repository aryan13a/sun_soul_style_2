# Sun Soul Style — Premium Interior Designer Portfolio Website (Static Version)

An elegant, editorial-style portfolio website built for a boutique interior design studio. Designed with soft neutral tones, raw wood details, and natural light to convey calm luxury and tactile refinement.

This version of the website is **purely static** (HTML, CSS, and Vanilla JavaScript). It does not require Node.js, databases, or any active backend servers. All content configurations are managed through a central data store inside the main JavaScript file.

## Key Features

- **Homepage**: Full-bleed hero image/video, signature serif philosophy quote, featured projects grid with visual hover cards, curated Instagram strip, testimonials carousel, and newsletter call-to-action.
- **Dynamic Portfolio Grid**: Interactive filters (all, full-home, kitchen, bedroom, dining-room) and slide-up transition entries.
- **Bespoke Case Studies**: Case-study template displaying concept narratives, material lists, customized color palettes, double-column masonry galleries, and an interactive **Before & After comparison slider**.
- **Services**: Service offering columns detailing inclusions and rates.
- **Contact Inquiry**: Responsive booking form with project type and budget dropdown selectors, integrating directly with WhatsApp to send the inquiry details directly to the designer's phone.

---

## Tech Stack

- **HTML5**: Semantic markup for clean structure and SEO.
- **CSS3**: Premium design styling, variables, custom cursors, and smooth layout animations.
- **JavaScript (ES6)**: Handles page routing, scroll reveals, interactive before-after sliders, testimonials, and dynamic rendering from local variables.

---

## Central Data Configuration

Since there is no database server, all the text details, bio photo URLs, services list, testimonials, and portfolio projects are kept in a single JavaScript object `DATA` at the top of:
- [js/main.js](file:///C:/Users/Lenovo/sun_soul_style_2/js/main.js)

To update any site details, add new projects, or swap photos, simply open `js/main.js` and modify the fields inside the `DATA` object.

---

## Getting Started / Hosting

Because the website is static and uses relative paths, it can be run and hosted in a variety of ways:

### 1. Locally (Browser Double-Click)
Simply open the folder and double-click:
- [index.html](file:///C:/Users/Lenovo/sun_soul_style_2/index.html)

### 2. Local HTTP Server
If you want to run a local server for testing, you can use any static server. For example:
- **Python**: Run `python -m http.server 8000` in the directory, then visit `http://localhost:8000`.
- **VS Code**: Install the "Live Server" extension and click "Go Live".

### 3. Static Hosting
You can deploy this codebase directly for free to any static hosting provider:
- **GitHub Pages** (Fully supported out-of-the-box since all paths are relative)
- **Netlify**
- **Vercel** (Select "Static Site" or deploy the root folder directly)
- **Render**

---

## Project Structure

- `index.html`: Homepage structure.
- `projects.html`: Portfolio grid page.
- `project-detail.html`: Project case study page.
- `about.html`: Designer biography page.
- `services.html`: Redirection helper.
- `contact.html`: Inquiry booking form.
- `css/style.css`: Design system stylesheet.
- `js/main.js`: Main client-side script holding the static `DATA` config and frontend handlers.
- `assets/`: Image archives, motifs, logos, and loop videos.
