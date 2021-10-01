const is = require('is_js');

export const isMobile = ():boolean => (is.android() && !is.tablet()) || is.iphone();

export const isPad = ():boolean => is.ipad() || is.tablet();

export const isProdEnv = process.env.NODE_ENV === 'production';
