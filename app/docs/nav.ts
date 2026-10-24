/** Docs sections, in page order. Each id is a heading anchor in content.tsx. */
export const DOCS_NAV: Array<{ title: string; items: Array<{ label: string; id: string }> }> = [
  {
    title: "Getting started",
    items: [
      { label: "Introduction", id: "introduction" },
      { label: "Quick start", id: "quick-start" },
    ],
  },
  {
    title: "The playground",
    items: [
      { label: "Editor and projects", id: "editor" },
      { label: "Compile", id: "compile" },
      { label: "Deploy and call", id: "contract-panel" },
      { label: "Privacy view", id: "privacy-view" },
      { label: "Templates", id: "templates" },
    ],
  },
  {
    title: "Wallet and networks",
    items: [
      { label: "1AM wallet", id: "wallet" },
      { label: "Networks and fees", id: "networks" },
      { label: "Reading ledger state", id: "reading-state" },
    ],
  },
  {
    title: "Writing Compact",
    items: [
      { label: "Contract structure", id: "contract-structure" },
      { label: "Witnesses and disclose()", id: "witnesses" },
      { label: "Built-in types", id: "types" },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "Limits", id: "limits" },
      { label: "FAQ", id: "faq" },
    ],
  },
];
