const is = require('is_js');
export const isMobile = ():boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return (is.android() && !is.tablet()) || is.iphone();
};

export const isPad = ():boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return is.ipad() || is.tablet();
};

export const isProdEnv = false;