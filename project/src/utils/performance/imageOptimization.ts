import { ImageConfig } from './types';

export const DEFAULT_IMAGE_SIZES = [
  { width: 640, quality: 80 },
  { width: 750, quality: 80 },
  { width: 828, quality: 80 },
  { width: 1080, quality: 80 },
  { width: 1200, quality: 80 }
];

export const optimizeImage = (url: string, config: ImageConfig = { width: 828, quality: 80 }): string => {
  const { width, quality } = config;
  return `${url}?w=${width}&q=${quality}&auto=format`;
};

export const generateSrcSet = (url: string): string => {
  return DEFAULT_IMAGE_SIZES
    .map(size => `${optimizeImage(url, size)} ${size.width}w`)
    .join(', ');
};

export const getPlaceholderImage = (width: number, height: number): string => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`;
};