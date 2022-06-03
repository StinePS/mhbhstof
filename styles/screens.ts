export type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * The screen sizes, based on the Tailwind breakpoints. Ensure these match what we have defined
 */
export const screens = {
  xs: "0px",
  sm: "640px",
  // => @media (min-width: 640px) { ... }

  md: "768px",
  // => @media (min-width: 768px) { ... }

  lg: "1024px",
  // => @media (min-width: 1024px) { ... }

  xl: "1280px",
  // => @media (min-width: 1280px) { ... }

  "2xl": "1681px",
  // => @media (min-width: 1681px) { ... }
};

export const breakpointKeys = Object.keys(screens) as Breakpoints[];

type Size = `${number}px` | `${number}vw` | `${number}rem` | number;

export type SizeValues = {
  [key in Breakpoints]?: Size;
};

function sizeToString(value?: Size) {
  if (typeof value === "number") return `${value}px`;
  return value || "0px";
}

/**
 * Define the `sizes` for different breakpoints.
 * This takes an object and with the keys, and converts it in to a valid sizes string.
 * */
export function generateSizes(values: SizeValues) {
  const defaultValue = sizeToString(values.xs || "100vw");

  const sizes = breakpointKeys
    .filter((key) => !!values[key])
    .map((key) => {
      return `(min-width: ${screens[key]}) ${sizeToString(values[key])}`;
    })
    .join(", ");

  if (!sizes) return defaultValue;
  return sizes + ", " + defaultValue;
}
