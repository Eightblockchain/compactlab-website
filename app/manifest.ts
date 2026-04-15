import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Compact Lab",
    short_name: "Compact Lab",
    description:
      "Browser-based IDE for writing Compact smart contracts on the Midnight blockchain.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
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
