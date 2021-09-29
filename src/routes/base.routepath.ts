export const basePath = process.env.NEXT_PUBLIC_HOST || 'https://mango-mushroom-0cd9e8110.azurestaticapps.net';

export interface RouteList {
  [key: string]: string | ((...args) => string);
}
