import * as React from "react";

/**
 * Interface for all supported surf and marine data parameters.
 */
export interface SurfData {
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
  latitude: number;
  longitude: number;
}

/**
 * Props for the SurfDataDisplay component.
 * @property data - The surf/marine data to display.
 * @property location - The display name of the location.
 * @property loading - Whether data is loading.
 * @property error - Error message if any.
 */
interface SurfDataDisplayProps {
  data: SurfData | null;
  location: string;
  loading: boolean;
  error: string | null;
}

/**
 * SurfDataDisplay component renders all marine parameters for a location.
 */
export function SurfDataDisplay({ data, location, loading, error }: SurfDataDisplayProps) {
  if (loading) {
    return <div className="mt-8">Loading surf data...</div>;
  }
  if (error) {
    return <div className="mt-8 text-red-500">{error}</div>;
  }
  if (!data) {
    return null;
  }
  return (
    <div className="mt-8 border rounded-lg p-6 bg-card shadow-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-2">Surf Data for {location}</h2>
      <ul className="space-y-1">
        <li><strong>Latitude:</strong> {data.latitude}</li>
        <li><strong>Longitude:</strong> {data.longitude}</li>
        <li><strong>Sea Level Height (MSL):</strong> {data.sea_level_height_msl ?? 'N/A'}</li>
        <li><strong>Sea Surface Temperature (°C):</strong> {data.sea_surface_temperature ?? 'N/A'}</li>
        <li><strong>Ocean Current Velocity (m/s):</strong> {data.ocean_current_velocity ?? 'N/A'}</li>
        <li><strong>Ocean Current Direction (°):</strong> {data.ocean_current_direction ?? 'N/A'}</li>
        <li><strong>Secondary Swell Wave Direction (°):</strong> {data.secondary_swell_wave_direction ?? 'N/A'}</li>
        <li><strong>Secondary Swell Wave Period (s):</strong> {data.secondary_swell_wave_period ?? 'N/A'}</li>
        <li><strong>Secondary Swell Wave Height (m):</strong> {data.secondary_swell_wave_height ?? 'N/A'}</li>
        <li><strong>Swell Wave Peak Period (s):</strong> {data.swell_wave_peak_period ?? 'N/A'}</li>
        <li><strong>Swell Wave Period (s):</strong> {data.swell_wave_period ?? 'N/A'}</li>
        <li><strong>Swell Wave Direction (°):</strong> {data.swell_wave_direction ?? 'N/A'}</li>
        <li><strong>Swell Wave Height (m):</strong> {data.swell_wave_height ?? 'N/A'}</li>
        <li><strong>Wave Height (m):</strong> {data.wave_height ?? 'N/A'}</li>
        <li><strong>Wave Direction (°):</strong> {data.wave_direction ?? 'N/A'}</li>
        <li><strong>Wave Period (s):</strong> {data.wave_period ?? 'N/A'}</li>
        <li><strong>Wind Wave Peak Period (s):</strong> {data.wind_wave_peak_period ?? 'N/A'}</li>
        <li><strong>Wind Wave Height (m):</strong> {data.wind_wave_height ?? 'N/A'}</li>
        <li><strong>Wind Wave Direction (°):</strong> {data.wind_wave_direction ?? 'N/A'}</li>
        <li><strong>Wind Wave Period (s):</strong> {data.wind_wave_period ?? 'N/A'}</li>
      </ul>
    </div>
  );
}
