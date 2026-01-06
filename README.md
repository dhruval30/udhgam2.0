To write a README for this project, I have analyzed the codebase structure, the tech stack used, and the specific event details for Udhgam 2.0. This README reflects the current state of the repository, including the recently added past edition archives.

# Udhgam 2.0 Web Portal

This is the official website for Udhgam 2.0, the tech fest of Woxsen University scheduled for February 2026. The project is a React-based web application designed to handle event promotion, registrations, and legacy archives.

## Tech Stack

The project is built with a modern frontend stack focused on performance and high-impact visuals:

* **Framework**: React 19
* **Build Tool**: Vite
* **Styling**: Tailwind CSS 4.0
* **Icons**: Lucide React
* **Routing**: React Router DOM 7
* **Form Handling**: Formspree React

## Project Structure

* **src/components/**: Contains all section-based components like LandingPage, AboutSection, and Agenda.
* **src/components/PastEditionPage.jsx**: The archive page for Udhgam 1.0, featuring a custom bento-grid gallery and historical stats.
* **src/components/PartnershipPage.jsx**: Dedicated page for corporate and startup collaborations.
* **public/**: Static assets including background images and the past edition photo library.

## Features

* **Visit Counter**: Integrated with counterapi.dev to track unique visitors via localStorage.
* **Responsive Design**: Custom bento grids for the gallery that stack for mobile devices and scale for large desktop monitors.
* **Legacy Archive**: A dedicated /past route showing stats from the previous edition, including 1.5L+ impressions and 650+ pan-India registrations.
* **Contact Integration**: Functional inquiry form powered by Formspree.

## Development

1. Install dependencies:
```bash
npm install

```


2. Run local development server:
```bash
npm run dev

```


3. Build for production:
```bash
npm run build

```



## Environment Variables

The project requires the following keys in a .env file to function correctly:

* VITE_FORMSPREE_ID: For the contact form.

## Notes

The project uses a dark theme by default with high-contrast gradients. Images for the past edition are stored in /public/past/ and should maintain their original aspect ratios to fit the bento grid correctly.