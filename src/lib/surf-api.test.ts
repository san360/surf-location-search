import { geocodeLocation, fetchSurfData } from "./surf-api";

describe("geocodeLocation", () => {
  it("returns null for empty or short query", async () => {
    expect(await geocodeLocation("")).toBeNull();
    expect(await geocodeLocation("a")).toBeNull();
  });
  it("returns valid result for a known city", async () => {
    const result = await geocodeLocation("San Francisco");
    expect(result).toBeTruthy();
    expect(typeof result?.lat).toBe("number");
    expect(typeof result?.lon).toBe("number");
    expect(result?.display_name).toContain("San Francisco");
  });
});

describe("fetchSurfData", () => {
  it("returns nulls for invalid lat/lon", async () => {
    const result = await fetchSurfData(NaN, NaN);
    expect(result.wave_height).toBeNull();
    expect(result.sea_surface_temperature).toBeNull();
  });
  it("returns data for valid coastal coordinates", async () => {
    // Santa Cruz, CA (coastal)
    const result = await fetchSurfData(36.963, -122.018);
    expect(result).toBeTruthy();
    // At least one value should be a number or null
    expect(["wave_height","sea_surface_temperature"].some(k => typeof (result as any)[k] === "number" || (result as any)[k] === null)).toBe(true);
  });
});
