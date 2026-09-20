import { onCleanup, onMount } from "solid-js";
import * as d3 from "d3";
import type { FeatureCollection, Geometry } from "geojson";
import worldData from "../lib/world.json";
import { VISITED_COUNTRIES } from "../data/travel";

const visitedNames = new Set(VISITED_COUNTRIES.map((country) => country.mapName));
const world = worldData as FeatureCollection<Geometry, { name: string }>;

const GlobeComponent = () => {
  let mapContainer: HTMLDivElement | undefined;
  onMount(() => {
    if (!mapContainer) return;
    const projection = d3.geoOrthographic().scale(235).rotate([95, -20]).translate([250, 250]);
    const path = d3.geoPath(projection);
    const svg = d3.select(mapContainer).append("svg")
      .attr("viewBox", "0 0 500 500").attr("width", "100%").attr("height", "100%")
      .attr("role", "img").attr("aria-label", "Visited countries highlighted on a globe");
    svg.append("title").text(`Visited: ${VISITED_COUNTRIES.map((country) => country.name).join(", ")}`);
    svg.append("circle").attr("cx", 250).attr("cy", 250).attr("r", 235).attr("fill", "#202020");
    const countries = svg.append("g").selectAll("path").data(world.features).join("path")
      .attr("d", (feature) => path(feature))
      .attr("data-country", (feature) => feature.properties.name)
      .attr("data-visited", (feature) => String(visitedNames.has(feature.properties.name)))
      .attr("fill", (feature) => visitedNames.has(feature.properties.name) ? "var(--color-primary-500)" : "#d4d4d4")
      .attr("stroke", "#171717").attr("stroke-width", .4);
    countries.append("title").text((feature) => feature.properties.name === "USA" ? "United States" : feature.properties.name);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: d3.Timer | undefined;
    const updateMotion = () => {
      timer?.stop();
      if (reducedMotion.matches) return;
      const rotation = projection.rotate();
      timer = d3.timer((elapsed) => {
        projection.rotate([rotation[0] - elapsed * .006, rotation[1], rotation[2]]);
        countries.attr("d", (feature) => path(feature));
      });
    };
    updateMotion();
    reducedMotion.addEventListener("change", updateMotion);
    onCleanup(() => {
      timer?.stop();
      reducedMotion.removeEventListener("change", updateMotion);
      svg.remove();
    });
  });
  return <div style={{ width: "100%", height: "100%" }} ref={mapContainer} />;
};

export default GlobeComponent;
