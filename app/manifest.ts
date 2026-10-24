import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CompactLab",
    short_name: "CompactLab",
    description:
      "Browser IDE for writing, compiling and deploying Compact smart contracts on Midnight.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/cl-icon.png",
        sizes: "654x648",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/cl-icon.png",
        sizes: "654x648",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
