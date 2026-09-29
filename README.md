# Nipuni Amanda Portfolio

A personal portfolio website built with React, TypeScript, and Vite. It presents professional experience, projects, research, education, certificates, and contact details.

## Requirements

- Node.js (LTS recommended)
- npm

## Getting Started

From the project directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server. |
| `npm run build` | Run the TypeScript project build and create the production site in `dist/`. |
| `npm run preview` | Serve the production build locally for review. |
| `npm run lint` | Run ESLint across the project. |

## Project Structure

```text
src/
  App.tsx                 Portfolio content and section markup
  App.css                 Portfolio layout and visual styles
  index.css               Global styles
  images/                 Profile photo and research screenshots
  ISC2 Certificates/      ISC2 certificate PDFs
  *.pdf                   CV and other certificate PDFs
public/                   Static public assets
```

## Updating the Portfolio

- Edit section text, navigation, links, and certificate entries in `src/App.tsx`.
- Update section appearance and responsive layouts in `src/App.css`.
- Replace the profile image or research screenshots in `src/images/`, keeping the imports in `App.tsx` in sync.
- Certificate PDFs are imported from `src/` and `src/ISC2 Certificates/`. Update the imports and certificate links when replacing or adding files.
- The CV is imported from `src/` and linked by the fixed **Download CV** button.

## Production Build

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/` and can be deployed to a static hosting provider.