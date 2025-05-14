"use client";

import { useState } from "react";
import { LocationSearch } from "../components/LocationSearch";
import { SurfDataDisplay } from "../components/SurfDataDisplay";
import { geocodeLocation, fetchSurfData } from "@/lib/surf-api";

/**
 * Main Home page for the Surf Location Search app.
 * Handles state, search, and data display.
 */
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [surfData, setSurfData] = useState<any>(null);
  const [location, setLocation] = useState("");

  /**
   * Handles search for a location, geocoding and fetching surf data.
   * @param query - The location name or label.
   * @param lat - Optional latitude (if selected from autocomplete).
   * @param lon - Optional longitude (if selected from autocomplete).
   */
  const handleSearch = async (query: string, lat?: number, lon?: number) => {
    setLoading(true);
    setError(null);
    setSurfData(null);
    setLocation("");
    try {
      let geo = null;
      if (lat !== undefined && lon !== undefined) {
        geo = { lat, lon, display_name: query };
      } else {
        geo = await geocodeLocation(query);
      }
      if (!geo) {
        setError("Location not found.");
        setLoading(false);
        return;
      }
      setLocation(geo.display_name);
      const surf = await fetchSurfData(geo.lat, geo.lon);
      setSurfData({ latitude: geo.lat, longitude: geo.lon, ...surf });
    } catch (e) {
      setError("Failed to fetch surf data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8">
      <h1 className="text-3xl font-bold mb-4">Surf Location Search</h1>
      <LocationSearch onSearch={handleSearch} loading={loading} />
      <SurfDataDisplay data={surfData} location={location} loading={loading} error={error} />
    </div>
  );
}
