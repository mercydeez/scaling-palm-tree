# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## React Compiler

# My Portfolio (React + Vite)

Single-page scrolling portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Three.js.

## Scripts

- `npm run dev` — start local development server
- `npm run build` — build production bundle
- `npm run preview` — preview production build locally

## Current Structure

```text
src/
	components/
		layout/
			MainLayout.jsx
			Navbar.jsx
			Footer.jsx
		ui/
			Button.jsx
			SectionHeading.jsx
			Card.jsx
		three/
			HeroCanvas.jsx
	data/
		portfolioData.js
	hooks/
		useTypewriter.js
	sections/
		HeroSection.jsx
		AboutSkillsSection.jsx
		ExperienceProjectsSection.jsx
		ContactSection.jsx
	App.jsx
	main.jsx
	index.css
```

## Editing Guide

- Update all section text/content in `src/data/portfolioData.js`
- Update section layouts in `src/sections/*`
- Update shared UI patterns in `src/components/ui/*`
- Hero 3D background is isolated in `src/components/three/HeroCanvas.jsx`

## Notes

- Navigation uses smooth-scroll anchors, no route tabs.
- Keep section IDs stable (`hero`, `about-skills`, `experience-projects`, `contact`, `footer`) so navbar links keep working.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
