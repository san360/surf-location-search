import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div>
      <h2 className="text-2xl font-bold mb-4">Surf Data for {location}</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <Card key={key} className="shadow-md">
            <CardHeader>
              <CardTitle>{key.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{value ?? "N/A"}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}