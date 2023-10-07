import satori, { type SatoriOptions } from "satori";
import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import template from "./og-template";

const fetchFonts = async () => {
  return Promise.all([
    fetch(
      "https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf"
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf"
    ).then((res) => res.arrayBuffer()),
  ]);
};

const fonts = await fetchFonts();
const options: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: fonts.map((font, i) => ({
    name: "IBM Plex Mono",
    data: font,
    weight: i === 0 ? 400 : 700,
    style: "normal",
  })),
};

export async function generateOg(post: CollectionEntry<"posts">) {
  const svg = await satori(template(post), options);
  return new Resvg(svg).render().asPng();
}
