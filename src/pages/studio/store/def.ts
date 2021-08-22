import { SubMenuItem } from '@/config/def';
export interface PayloadChangeMenu {
    /**
     * 菜单
     */
     selectedSubMenu:SubMenuItem;
};

export interface PayloadsetLoginPanelVisible {
    loginPanelVisible:boolean;
}