import { isDevMode, devUrl, proUrl } from './env'
console.log(process.env ,devUrl);

/**
 * @description: Base Url
 */
export const APIURL = isDevMode() ? devUrl : proUrl;

/**
 * @description: prefix
 */
export const PREFIX = '/api';