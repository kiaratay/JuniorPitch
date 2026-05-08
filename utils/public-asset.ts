/** Root-relative paths (`/`) for `/public` assets when NEXT_PUBLIC_BASE_PATH is set (e.g. GitHub Pages project site). */
export function publicAsset(src: string): string {
  if (!src.startsWith("/")) throw new Error("publicAsset expects a root-relative path");
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");
  return `${base}${src}`;
}
