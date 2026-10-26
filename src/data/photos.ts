// Credits and alt text for every photograph on the site.
// photos.json is generated from the Wikimedia Commons file pages each image was
// taken from (author, licence, source URL), so attribution stays next to the data.
import data from './photos.json';

export interface PhotoInfo {
  /** describes what the photograph actually shows */
  alt: string;
  /** file name on Wikimedia Commons */
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  /** the Commons page the photo was taken from */
  source: string;
}

export const photos = data as Record<string, PhotoInfo>;

const blank: PhotoInfo = { alt: '', title: '', author: '', license: '', licenseUrl: '', source: '' };

export function photo(src: string): PhotoInfo {
  return photos[src] ?? blank;
}

export function photoAlt(src: string, fallback = ''): string {
  return photos[src]?.alt || fallback;
}
