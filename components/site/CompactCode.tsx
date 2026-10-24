import type { ReactNode } from "react";

/** Same colours as the playground's Monaco theme (compactlab/components/editor/compact-language.ts). */
const COLOR = {
  keyword: "#F07A70",
  type: "#E5B567",
  builtin: "#7DC4E4",
  string: "#A3D49B",
  number: "#E8A07A",
  comment: "#5B5B66",
  ledger: "#C4B5FD",
  text: "#DCDCE0",
  punct: "#8A8A94",
} as const;

const KEYWORDS = new Set([
  "pragma", "language_version", "import", "export", "ledger", "circuit", "witness", "constructor",
  "return", "assert", "const", "enum", "struct", "if", "else", "for", "of", "sealed", "pure", "as",
]);
const TYPES = new Set([
  "Counter", "Bytes", "Uint", "Field", "Boolean", "Maybe", "Opaque", "Vector", "Map", "Set",
  "Either", "ZswapCoinPublicKey", "CompactStandardLibrary",
]);
const BUILTINS = new Set(["disclose", "persistentHash", "transientHash", "pad", "some", "none", "default"]);

const TOKEN = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)*\b)|([A-Za-z_]\w*)|(\s+)|([^\sA-Za-z_\d"]+)/gm;

function highlightLine(line: string, ledgerNames: Set<string>): ReactNode[] {
  const out: ReactNode[] = [];
  let m: RegExpExecArray | null;
  let i = 0;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(line)) !== null) {
    const [text, comment, str, num, word, space] = m;
    let color: string = COLOR.punct;
    if (comment) color = COLOR.comment;
    else if (str) color = COLOR.string;
    else if (num) color = COLOR.number;
    else if (space) {
      out.push(text);
      continue;
    } else if (word) {
      color = KEYWORDS.has(word)
        ? COLOR.keyword
        : TYPES.has(word)
          ? COLOR.type
          : BUILTINS.has(word)
            ? COLOR.builtin
            : ledgerNames.has(word)
              ? COLOR.ledger
              : COLOR.text;
    }
    out.push(
      <span key={i++} style={{ color }} className={comment ? "italic" : undefined}>
        {text}
      </span>,
    );
  }
  return out;
}

/** Static, read-only Compact source with line numbers. */
export function CompactCode({
  code,
  ledger = [],
  className,
}: {
  code: string;
  /** Ledger field names, coloured like the playground does. */
  ledger?: string[];
  className?: string;
}) {
  const names = new Set(ledger);
  const lines = code.replace(/\n$/, "").split("\n");
  return (
    <pre className={`overflow-x-auto font-mono text-[12.5px] leading-[1.7] ${className ?? ""}`}>
      <code>
        {lines.map((line, n) => (
          <span key={n} className="flex">
            <span aria-hidden className="w-8 shrink-0 pr-4 text-right text-[#3f3f46] select-none">
              {n + 1}
            </span>
            <span className="whitespace-pre">{line ? highlightLine(line, names) : " "}</span>
          </span>
        ))}
      </code>
    </pre>
  );
}
