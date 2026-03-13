/// <reference types="vite/client" />
// Helper to resolve asset paths with the Vite base path
const BASE_PATH = import.meta.env.BASE_URL || '/';

export function assetPath(path: string): string {
  // If it's already an absolute URL (http/https/data), return as-is
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  
  // Remove leading slash from the path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Combine base path with the clean path
  return `${BASE_PATH}${cleanPath}`;
}
