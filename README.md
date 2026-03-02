# project-10

Simple static marketing site built with HTML, CSS, JavaScript, Bootstrap and Swiper.

## Development

1. Clone or open the repository in VS Code.
2. Install dependencies with `npm install`.
3. Preview pages using Live Server or by opening `index.html` in a browser.

## Deployment

The repository is prepared for GitHub Pages.

### Quick manual deployment

1. Create a repository on GitHub (for example `project-10`).
2. Add a remote and push your code:
    ```bash
    git init
    git add .
    git commit -m "initial commit"
    git remote add origin https://github.com/<your-username>/<repo-name>.git
    git push -u origin main
    ```
3. In the repository settings on GitHub, under **Pages**, choose the **main** branch and the root (`/`) folder as the publishing source. GitHub will serve the site at `https://<your-username>.github.io/<repo-name>`.

### Automated deployment using Actions or npm

- Set the `homepage` field in `package.json` to your site URL (replace `<your-username>` and `<repo-name>`).
- Install the deploy helper package:
    ```bash
    npm install --save-dev gh-pages
    ```
- You can run `npm run deploy` locally to push the current contents to the `gh-pages` branch, or simply rely on the workflow below.

A GitHub Actions workflow is provided in `.github/workflows/deploy.yml` that automatically publishes whenever you push to `main`.

---

> **Note:** ensure `index.html` exists at the project root (a copy of `home.html` has been created for you) as this is required by GitHub Pages.
