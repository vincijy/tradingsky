export function getUrlParams() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params;
}

export const findMenuByIndex = (menus:any, index:string) => {
  let menu__;
  let subMenu__;
  for (const menu of menus) {
    for (const subMenu of menu.subMenus) {
      if (subMenu.args.index === index) {
        menu__ = menu;
        subMenu__ = subMenu;
        break;
      }
    }
  }
  return {
    menu: menu__,
    subMenu: subMenu__,
  };
};
