# Alex Morgan — Portfolio

A fresh, editable portfolio landing page built with Vue 3 and Vite. All copy and project details are placeholders; replace them with your own before publishing.

## Local development

Install Node.js 20 or newer, then run:

```sh
npm install
npm run dev
```

Create and preview a production build with:

```sh
npm run build
npm run preview
```

## Personalize the page

- Edit the name, intro, project cards, skills, contact address, and social links in `src/App.vue`.
- Update the Material Procurement Workflow case study in `src/MaterialProcurementWorkflow.vue`; its spreadsheet-style table and interactive request demo use sample material and supplier data.
- Update the Self-Service ERP Data Translation case study in `src/ErpDataTranslation.vue`.
- Update the page title and description in `index.html`.
- Adjust colors, typography, and responsive layouts in `src/style.css`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds the site and deploys it when changes are pushed to `main`. You can also start it manually from the **Actions** tab.

Vite is configured with `base: './'`, so generated assets use relative paths and work both on a user/organization site and under a repository path. No repository name needs to be configured.
