# Surf Location Search Web App

A modern Next.js web application for searching surf locations, retrieving marine data, and displaying surf conditions using the Open-Meteo APIs. Built with TypeScript, shadcn/ui, and Tailwind CSS.

## Features

- **Location Search with Autocomplete:**
  - Search for any location with instant suggestions (city and country).
  - Powered by the Open-Meteo Geocoding API.
- **Marine Data Retrieval:**
  - Fetches real-time marine and surf data (wave, swell, wind, temperature, etc.) for selected locations using the Open-Meteo Marine API.
- **Modern UI:**
  - Built with shadcn/ui and Tailwind CSS for a clean, responsive interface.
- **Robust Error Handling:**
  - Handles API/network errors and invalid input gracefully.
- **Automated Testing:**
  - Jest test coverage for API utilities and edge cases.

## Tech Stack

- [Next.js](https://nextjs.org/) (TypeScript)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- [Open-Meteo Marine API](https://open-meteo.com/en/docs/marine-api)
- [Jest](https://jestjs.io/) for testing

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Project Structure

```
src/
  app/
    page.tsx            # Main page, state management, search integration
    layout.tsx          # App layout
    globals.css         # Global styles
  components/
    LocationSearch.tsx  # Autocomplete input, city/country display
    SurfDataDisplay.tsx # Displays marine parameters
    ui/                 # shadcn/ui components
  lib/
    config.ts           # API endpoint configuration
    surf-api.ts         # API utilities for geocoding and marine data
    surf-api.test.ts    # Jest test cases for API utilities
    utils.ts            # Shared utilities
public/                 # Static assets
```

## Configuration

API endpoint URLs are managed in `src/lib/config.ts` for easy updates and environment management.

## API Usage

- **Geocoding:**
  - Converts user input into latitude/longitude and displays city/country.
- **Marine Data:**
  - Fetches and displays surf/marine data for the selected location.

## Error Handling

- All API calls are validated and wrapped in try/catch blocks.
- Invalid input or API/network errors are handled gracefully and surfaced to the user.

## Testing

- Jest tests cover API utilities for both valid and invalid scenarios.
- Run `npm test` to execute all tests.

## Contributing

Pull requests and issues are welcome!

## License

MIT License

>>>>>>> 89223c0 (docs: add JSDoc comments to all methods and components)

Prompt used (Run in Agent mode)

I would like to create a web app for surf location where user can search for location using geocoding api from open meteo which will provide latitude and longitude and based on this use open meto api to get the wave height and wave direction, wave period, wave surface temperature, I would suggest to use next js web app and shadn ui for this, could you create a set of task that needs to be done?

Here’s a set of tasks to create your surf location web app using Next.js and shadcn/ui, with Open-Meteo API integration:

Initialize a new Next.js project.
Set up TypeScript for type safety.
Install and configure shadcn/ui for UI components.
Design the main UI: a search bar for locations and a results display area.
Integrate a geocoding API (e.g., OpenStreetMap Nominatim or Mapbox) to convert location names to latitude/longitude.
Create API utility functions to:
Fetch latitude/longitude from the geocoding API.
Fetch wave data (height, direction, period, surface temperature) from the Open-Meteo API using the coordinates.
Build React components for:
Location search input (with autocomplete, if possible).
Displaying surf data (wave height, direction, period, temperature).
Loading and error states.
Add state management for search, loading, and results.
Style the app using shadcn/ui components for a modern look.
Test the app for different locations and handle edge cases (invalid locations, API errors).
(Optional) Add features like recent searches, favorite locations, or a map view.
Prepare for deployment (e.g., Vercel).
Would you like to start with initializing the Next.js project and installing shadcn/ui?