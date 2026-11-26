# Huda Saed | ICT Student Portfolio

Static portfolio built with HTML, CSS and JavaScript. No build step, no dependencies.
Deployed with GitHub Pages: push the files to the `main` branch of `huda-saed.github.io`.

## Edit your content
Everything lives in **`js/config.js`**:
- `education`: add `school` and `period` to Primary and Secondary when you want them shown (they stay hidden while empty).
- `projects`: add a screenshot by saving it in `images/` and setting `image: "images/name.png"`.
- `certificates`: copy the existing entry, save the image in `images/`. Add `link` (the real verification URL from Coursera) to show a "Verify online" button.
- `contact.linkedin`: add your LinkedIn URL and the link appears automatically.
- `contact.formEndpoint`: paste a Formspree (or similar) URL so the form sends email directly. While empty, the form opens the visitor's email app.

## Files
- `index.html` structure and navigation
- `css/styles.css` design, animations, responsive layout
- `js/config.js` your content
- `js/main.js` rendering, navigation, animations, certificate preview, form
- `images/` profile photo and certificate
