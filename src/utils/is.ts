const is = require('is_js');

export const isMobile = ():boolean => is.android() || is.ios();
