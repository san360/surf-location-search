"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OPEN_METEO_GEOCODING_API } from "@/lib/config";

interface LocationOption {
  label: string;
  value: string;
  lat: number;
  lon: number;
}

/**
 * Props for the LocationSearch component.
 * @property onSearch - Callback when a location is selected or searched.
 * @property loading - Whether a search is in progress.
 */
interface LocationSearchProps {
  onSearch: (query: string, lat?: number, lon?: number) => void;
  loading?: boolean;
}

/**
 * LocationSearch component provides an input with autocomplete for surf locations.
 * Calls onSearch with the selected or entered location.
 */
export function LocationSearch({ onSearch, loading }: LocationSearchProps) {
  const [query, setQuery] = React.useState("");
  const [options, setOptions] = React.useState<LocationOption[]>([]);
  const [selected, setSelected] = React.useState<LocationOption | null>(null);
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    if (query.length < 2) {
      setOptions([]);
      return;
    }
    setFetching(true);
    const controller = new AbortController();
    fetch(`${OPEN_METEO_GEOCODING_API}?name=${encodeURIComponent(query)}&count=10&language=en&format=json`, {
      signal: controller.signal
    })
      .then(res => res.json())
      .then((data) => {
        setOptions(
          (data.results || []).map((item: any) => ({
            label: `${item.name}${item.country ? ', ' + item.country : ''}`,
            value: item.name,
            lat: item.latitude,
            lon: item.longitude,
          }))
        );
      })
      .catch(() => {})
      .finally(() => setFetching(false));
    return () => controller.abort();
  }, [query]);

  const handleSelect = (option: LocationOption) => {
    setSelected(option);
    setQuery(option.label);
    setTimeout(() => setOptions([]), 100); // Hide autocomplete after selection
    onSearch(option.label, option.lat, option.lon);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selected) {
      onSearch(selected.label, selected.lat, selected.lon);
    } else if (options.length > 0) {
      handleSelect(options[0]);
    } else if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-md relative">
      <div className="flex gap-2">
        <Input
          placeholder="Search for a surf location..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
            setSelected(null);
          }}
          disabled={loading}
          className="flex-1"
          autoComplete="off"
        />
        <Button type="submit" disabled={loading || !query.trim()}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
      {options.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded w-full mt-1 shadow max-h-56 overflow-auto">
          {options.map((option, idx) => (
            <li
              key={option.value + idx}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {fetching && <div className="text-xs text-gray-500 mt-1">Loading suggestions...</div>}
    </form>
  );
}
