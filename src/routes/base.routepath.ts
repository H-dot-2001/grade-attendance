export const basePath = process.env.NEXT_PUBLIC_HOST || '';

export interface RouteList {
  [key: string]: string | ((...args) => string);
}
