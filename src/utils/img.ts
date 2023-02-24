
const prefix = '/api/v0/static/img_lsc/';

export const genImgUrl = function(imgName:string) {
  if (!imgName) {
    return imgName;
  }
  if (imgName.trim().startsWith('http') || imgName.trim().startsWith('www')) {
    return imgName;
  }
  return prefix + imgName;
};
