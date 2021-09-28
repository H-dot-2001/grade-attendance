export const basePath = process.env.NEXT_PUBLIC_HOST || 'https://polite-tree-0a0c19210.azurestaticapps.net';

export interface RouteList {
  [key: string]: string | ((...args) => string);
}
