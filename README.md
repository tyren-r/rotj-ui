# SWAPI: Return of the Jedi UI

A Vite + React + TypeScript front end that wraps the SWAPI: ROTJ data in a human-friendly search and browse experience.

## Features
- Star Wars themed UI/UX with responsive layout.
- Search by human-readable names instead of raw IDs or API URLs.
- Rich results with images and descriptions.
- Built with React Router, MUI, Emotion, and Sass.
- Ready for Dockerized production deploys.

## Prerequisites
- Node.js 18+ and npm.
- Docker (optional) if you prefer containerized builds.

## Local Development
1) Create a local env file (Vite will load `.env`):

```bash
cp example-env.txt .env
```

`example-env.txt` contains the default API endpoints (`VITE_API_BASE_URL` and `VITE_DOCS_OPENAPI_URL`); tweak them in your local `.env` if you need to point at a different backend.

2) Install dependencies:

```bash
npm install
```

3) Start the dev server (Vite):

```bash
npm run start
```

Visit http://localhost:3000.

## Production Build and Preview
```bash
npm run build    # output to dist/
npm run serve    # preview the production build locally
```

## Linting
```bash
npm run lint      # check
npm run lint:fix  # autofix
```

## Testing
- Cypress (headed):

```bash
npm run cy:open
```

## Docker
Build and run the production image served by nginx on port 80:

```bash
docker build -t swapi-rotj-ui .
docker run -p 80:80 swapi-rotj-ui
```

## Project Structure
- `config/` – Vite, TypeScript, ESLint, and Cypress configs.
- `src/` – React app entrypoint, styles, and feature components.
- `public/` – Static assets.

## Useful References
- Scripts are defined in `package.json`.
- Dockerfile builds and serves the production bundle via nginx.
