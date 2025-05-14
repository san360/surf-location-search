<<<<<<< HEAD
<<<<<<< HEAD
# surf-location-search
Next.js app for surf location search and marine data using Open-Meteo APIs. Features autocomplete, robust error handling, and test coverage.
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
=======
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
>>>>>>> 89223c0 (docs: add JSDoc comments to all methods and components)

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

<<<<<<< HEAD
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 8490772 (Initial commit from Create Next App)
=======
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
