import { onCleanup, onMount } from "solid-js";
import * as d3 from "d3";
import type { FeatureCollection, Geometry } from "geojson";
import worldData from "../lib/world.json";
import { VISITED_COUNTRIES } from "../data/travel";

const visitedNames = new Set(VISITED_COUNTRIES.map((country) => country.mapName));
const world = worldData as FeatureCollection<Geometry, { name: string }>;

const GlobeComponent = (props: { language?: "en" | "es" }) => {
  const spanish = props.language === "es";
  const countryLabels: Record<string, string> = spanish ? { Canada: "Canadá", Mexico: "México", Peru: "Perú", USA: "Estados Unidos", "United States": "Estados Unidos" } : { USA: "United States" };
  const countryLabel = (name: string) => countryLabels[name] ?? name;
  const projection = d3.geoOrthographic().scale(235).rotate([95, -20]).translate([250, 250]);
  const path = d3.geoPath(projection);
  let svg: SVGSVGElement | undefined;

  onMount(() => {
    if (!svg) return;
    // Enhance the server-rendered map; loading the animation must never hide it.
    const countries = d3.select(svg).selectAll<SVGPathElement, typeof world.features[number]>("path")
      .data(world.features);

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
    });
  });
  return (
    <svg
      ref={svg}
      viewBox="0 0 500 500"
      width="100%"
      height="100%"
      style={{ display: "block" }}
      role="img"
      aria-label={spanish ? "Países visitados resaltados en un globo" : "Visited countries highlighted on a globe"}
    >
      <title>{`${spanish ? "Visitados" : "Visited"}: ${VISITED_COUNTRIES.map((country) => countryLabel(country.name)).join(", ")}`}</title>
      <circle cx="250" cy="250" r="235" fill="#202020" />
      <g stroke="#171717" stroke-width="0.4">
        {world.features.map((feature) => (
          <path
            d={path(feature) ?? undefined}
            data-country={feature.properties.name}
            data-visited={String(visitedNames.has(feature.properties.name))}
            fill={visitedNames.has(feature.properties.name) ? "var(--color-primary-500)" : "#d4d4d4"}
          >
            <title>{countryLabel(feature.properties.name)}</title>
          </path>
        ))}
      </g>
    </svg>
  );
};

export default GlobeComponent;
