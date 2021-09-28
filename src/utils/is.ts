const is = require('is_js');

export const isMobile = ():boolean => is.android() || is.ios();

export const isProdEnv = process.env.NODE_ENV === 'production';
