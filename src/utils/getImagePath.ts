export function getImagePath(url: string) {
  return new URL(url, import.meta.url).href;
}
