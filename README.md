# Personal Website

A modern personal website built with Vue.js and Tailwind CSS.

## Project Overview

This project is a personal website template that includes:
- Vue.js 3 with Composition API
- Tailwind CSS for styling
- Vue Router for navigation
- Responsive design
- Home and About page templates

## Project Structure

```
personal-website/
├── public/              # Static assets
├── src/
│   ├── assets/          # CSS and other assets
│   ├── components/      # Vue components
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Customization

- Edit the content in `src/views/` to customize the pages
- Modify the navigation in `src/App.vue`
- Add new routes in `src/router/index.js`
- Customize Tailwind CSS in `tailwind.config.js`

## License

MIT
