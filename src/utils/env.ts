/**
 * @description: 开发模式
 */
export const devMode = 'development';

/**
 * @description: 生产模式
 */
export const proMode = 'production';

export const getEnv = (): string => process.env.MODE;

/**
 * @description: 判断是否开发模式
 */
export const isDevMode = (): boolean => process.env.NODE_ENV === 'development';


/**
 * @description: 判断是否生产模式
 */
export const isProMode = (): boolean => process.env.NODE_ENV === 'production';

/**
 * @description: 开发模式baseurl
 */
export const devUrl: string = process.env.VUE_APP_DEV_BASEURL;

/**
 * @description: 生产模式baseurl
 */
export const proUrl: string = process.env.VUE_APP_PRO_BASEURL;