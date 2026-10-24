/** Public URLs, set per deployment in .env.local (see .env.example). */

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://compactlab.dev";

export const PLAYGROUND_URL = process.env.NEXT_PUBLIC_PLAYGROUND_URL || "https://playground.compactlab.dev";

export const SOURCE_URL = "https://github.com/Eightblockchain/compactlab-ide";

/**
 * Toolchain the playground runs today. Keep in step with compactlab/lib/version.ts
 * and https://docs.midnight.network/relnotes/support-matrix.
 */
export const TOOLCHAIN = {
  compiler: "0.31.1",
  language: "0.23",
  ledger: "8",
  midnightJs: "4.1.1",
} as const;

export const LINKS = {
  compactDocs: "https://docs.midnight.network/compact",
  midnightDocs: "https://docs.midnight.network",
  supportMatrix: "https://docs.midnight.network/relnotes/support-matrix",
  oneAm: "https://1am.xyz",
  preprodFaucet: "https://faucet.preprod.midnight.network/",
  previewFaucet: "https://faucet.preview.midnight.network/",
  blockfrost: "https://blockfrost.io",
  midnightGithub: "https://github.com/midnightntwrk",
  midnightDiscord: "https://discord.com/invite/midnightnetwork",
} as const;
