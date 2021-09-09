import { SubMenuItem, MenuItem } from '@/config/def';
export interface PayloadChangeMenu {
    currentMenu:{
        menu:Omit<MenuItem, 'subMenus'>;
        subMenu:SubMenuItem;
    };
};

export interface PayloadsetLoginPanelVisible {
    loginPanelVisible:boolean;
}

export interface Iui {
    currentMenu:{
      menu:Omit<MenuItem, 'subMenus'>;
      subMenu:SubMenuItem;
    };
    loginPanelVisible:boolean;
}
