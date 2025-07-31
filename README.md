# BDC Onboarding Single Page Application

A Vue.js single-page application for Business Development Center onboarding at Facet Renovations.

## Features

- **Single Page Application**: Navigate between different sections without page reloads
- **Responsive Design**: Works on desktop and mobile devices
- **Vue.js 3**: Modern Vue framework with Composition API
- **Vue Router**: Client-side routing for smooth navigation
- **Professional Styling**: Maintains the original design aesthetic

## Pages

1. **Home** - Overview and welcome page
2. **Pay Structure** - Current BDC pay structure details
3. **Expectations & Responsibilities** - Key responsibilities and performance expectations
4. **Tools & Technology** - List of tools and platforms used
5. **Interface** - Company contact information and resources

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This will start the development server, typically at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable Vue components
├── views/          # Page components
│   ├── Home.vue
│   ├── PayStructure.vue
│   ├── Expectations.vue
│   ├── ToolsTechnology.vue
│   └── Interface.vue
├── App.vue         # Root component
└── main.js         # Application entry point

public/
└── assets/         # Static assets (images, icons)
```

## Original HTML Files

The original HTML files have been preserved in the root directory for reference:
- `0_bdc_onboarding_cover.html`
- `1_bdc_pay_Structure.html`
- `2_expectations_responsibilities.html`
- `3_tools_technology.html`
- `5_bdc_facet_renovations_interface.html`

## Technologies Used

- Vue.js 3
- Vue Router 4
- Vite (build tool)
- CSS3 with scoped styling
- Tomorrow Google Font

## License

Internal use for Facet Renovations BDC onboarding.
