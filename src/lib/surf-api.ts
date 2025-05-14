import { OPEN_METEO_GEOCODING_API, OPEN_METEO_MARINE_API } from "./config";

/**
 * Geocode a location name to latitude/longitude using the Open-Meteo Geocoding API.
 * @param query - The location name to search for (minimum 2 characters).
 * @returns An object with lat, lon, and display_name, or null if not found or error.
 */
export async function geocodeLocation(query: string): Promise<{ lat: number; lon: number; display_name: string } | null> {
  if (!query || query.length < 2) return null;
  const url = `${OPEN_METEO_GEOCODING_API}?name=${encodeURIComponent(query)}&count=1&language=en&format=json`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.results || !Array.isArray(data.results) || data.results.length === 0) return null;
    return {
      lat: data.results[0].latitude,
      lon: data.results[0].longitude,
      display_name: `${data.results[0].name}${data.results[0].country ? ', ' + data.results[0].country : ''}`,
    };
  } catch (e) {
    return null;
  }
}

/**
 * Fetch surf and marine data for a given latitude/longitude using the Open-Meteo Marine API.
 * @param lat - Latitude of the location.
 * @param lon - Longitude of the location.
 * @returns An object with all supported marine parameters, or all nulls if invalid or error.
 */
export async function fetchSurfData(lat: number, lon: number): Promise<{
  sea_level_height_msl: number | null;
  sea_surface_temperature: number | null;
  ocean_current_velocity: number | null;
  ocean_current_direction: number | null;
  secondary_swell_wave_direction: number | null;
  secondary_swell_wave_period: number | null;
  secondary_swell_wave_height: number | null;
  swell_wave_peak_period: number | null;
  swell_wave_period: number | null;
  swell_wave_direction: number | null;
  swell_wave_height: number | null;
  wave_height: number | null;
  wave_direction: number | null;
  wave_period: number | null;
  wind_wave_peak_period: number | null;
  wind_wave_height: number | null;
  wind_wave_direction: number | null;
  wind_wave_period: number | null;
}> {
  if (typeof lat !== "number" || typeof lon !== "number") return {
    sea_level_height_msl: null,
    sea_surface_temperature: null,
    ocean_current_velocity: null,
    ocean_current_direction: null,
    secondary_swell_wave_direction: null,
    secondary_swell_wave_period: null,
    secondary_swell_wave_height: null,
    swell_wave_peak_period: null,
    swell_wave_period: null,
    swell_wave_direction: null,
    swell_wave_height: null,
    wave_height: null,
    wave_direction: null,
    wave_period: null,
    wind_wave_peak_period: null,
    wind_wave_height: null,
    wind_wave_direction: null,
    wind_wave_period: null
  };
  const url = `${OPEN_METEO_MARINE_API}?latitude=${lat}&longitude=${lon}&current=sea_level_height_msl,sea_surface_temperature,ocean_current_velocity,ocean_current_direction,secondary_swell_wave_direction,secondary_swell_wave_period,secondary_swell_wave_height,swell_wave_peak_period,swell_wave_period,swell_wave_direction,swell_wave_height,wave_height,wave_direction,wave_period,wind_wave_peak_period,wind_wave_height,wind_wave_direction,wind_wave_period&timezone=auto`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    return {
      sea_level_height_msl: Array.isArray(data.current?.sea_level_height_msl) ? data.current.sea_level_height_msl[0] : data.current?.sea_level_height_msl ?? null,
      sea_surface_temperature: Array.isArray(data.current?.sea_surface_temperature) ? data.current.sea_surface_temperature[0] : data.current?.sea_surface_temperature ?? null,
      ocean_current_velocity: Array.isArray(data.current?.ocean_current_velocity) ? data.current.ocean_current_velocity[0] : data.current?.ocean_current_velocity ?? null,
      ocean_current_direction: Array.isArray(data.current?.ocean_current_direction) ? data.current.ocean_current_direction[0] : data.current?.ocean_current_direction ?? null,
      secondary_swell_wave_direction: Array.isArray(data.current?.secondary_swell_wave_direction) ? data.current.secondary_swell_wave_direction[0] : data.current?.secondary_swell_wave_direction ?? null,
      secondary_swell_wave_period: Array.isArray(data.current?.secondary_swell_wave_period) ? data.current.secondary_swell_wave_period[0] : data.current?.secondary_swell_wave_period ?? null,
      secondary_swell_wave_height: Array.isArray(data.current?.secondary_swell_wave_height) ? data.current.secondary_swell_wave_height[0] : data.current?.secondary_swell_wave_height ?? null,
      swell_wave_peak_period: Array.isArray(data.current?.swell_wave_peak_period) ? data.current.swell_wave_peak_period[0] : data.current?.swell_wave_peak_period ?? null,
      swell_wave_period: Array.isArray(data.current?.swell_wave_period) ? data.current.swell_wave_period[0] : data.current?.swell_wave_period ?? null,
      swell_wave_direction: Array.isArray(data.current?.swell_wave_direction) ? data.current.swell_wave_direction[0] : data.current?.swell_wave_direction ?? null,
      swell_wave_height: Array.isArray(data.current?.swell_wave_height) ? data.current.swell_wave_height[0] : data.current?.swell_wave_height ?? null,
      wave_height: Array.isArray(data.current?.wave_height) ? data.current.wave_height[0] : data.current?.wave_height ?? null,
      wave_direction: Array.isArray(data.current?.wave_direction) ? data.current.wave_direction[0] : data.current?.wave_direction ?? null,
      wave_period: Array.isArray(data.current?.wave_period) ? data.current.wave_period[0] : data.current?.wave_period ?? null,
      wind_wave_peak_period: Array.isArray(data.current?.wind_wave_peak_period) ? data.current.wind_wave_peak_period[0] : data.current?.wind_wave_peak_period ?? null,
      wind_wave_height: Array.isArray(data.current?.wind_wave_height) ? data.current.wind_wave_height[0] : data.current?.wind_wave_height ?? null,
      wind_wave_direction: Array.isArray(data.current?.wind_wave_direction) ? data.current.wind_wave_direction[0] : data.current?.wind_wave_direction ?? null,
      wind_wave_period: Array.isArray(data.current?.wind_wave_period) ? data.current.wind_wave_period[0] : data.current?.wind_wave_period ?? null
    };
  } catch (e) {
    return {
      sea_level_height_msl: null,
      sea_surface_temperature: null,
      ocean_current_velocity: null,
      ocean_current_direction: null,
      secondary_swell_wave_direction: null,
      secondary_swell_wave_period: null,
      secondary_swell_wave_height: null,
      swell_wave_peak_period: null,
      swell_wave_period: null,
      swell_wave_direction: null,
      swell_wave_height: null,
      wave_height: null,
      wave_direction: null,
      wave_period: null,
      wind_wave_peak_period: null,
      wind_wave_height: null,
      wind_wave_direction: null,
      wind_wave_period: null
    };
  }
}
