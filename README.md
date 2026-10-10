# Personal Portfolio Website

A modern, responsive personal portfolio website designed for Mohammad Ajvad SY (Data Science and AI Engineer).

This project is built using:
- **HTML5** for structure
- **CSS3** with a custom dark theme
- **Bootstrap 5** for layout and responsive components
- **Vanilla JavaScript** for interactivity and animations

## Features
- Clean and modern dark UI with purple accent color.
- Responsive layout that works perfectly on desktop, tablet, and mobile.
- Smooth scrolling and scroll-reveal animations.
- Sections: Home (Hero), About, Skills, Projects, Education, Contact.
- Basic frontend form validation.

## How to Run / Preview

Since this is a static website consisting of HTML, CSS, and JS, you don't need to install any dependencies or run a build step.

**Method 1: Open in Browser directly (Easiest)**
1. Navigate to the project folder on your computer.
2. Double-click on `index.html` to open it in your default web browser (Chrome, Edge, Firefox, etc.).

**Method 2: Use VS Code Live Server (Recommended for Editing)**
1. Open this project folder in Visual Studio Code.
2. Install the **"Live Server"** extension by Ritwick Dey.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. This will open the website at a local URL (e.g., `http://127.0.0.1:5500`) and automatically reload it when you make changes to the code.

## Customization Guide for Beginners

1. **Images:** Replace the placeholder image URL in `index.html` with your actual profile picture path (e.g., `src="my-photo.jpg"`). Place the image file in the same folder.
2. **Colors:** Open `style.css` and modify the variables in the `:root` section to change the accent color (`--accent-color`). Try changing `#8a2be2` to `#3b82f6` for a blue theme!
3. **Content:** Open `index.html` and edit the text to update your skills, projects, and personal details.
4. **Links:** Update the `href="#"` attributes on social icons and buttons to point to your actual GitHub, LinkedIn, or live project URLs.

## Form Submission Note
The contact form currently has frontend validation and a success animation simulation. To actually receive emails, you will need to link the form's `action` attribute to a backend service like [Formspree](https://formspree.io/) or [Netlify Forms](https://www.netlify.com/platform/core/forms/).
