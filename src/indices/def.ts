export interface SubMenuItem {
    /**
     * 显示的标题
     */
    name:string;

    /**
     * 菜单唯一标识
     */
    key:string;

    /**
     * 是否可见
     */
    visible:boolean;

    /**
     * 是否需要登录才能显示图表
     * 取值true: 当用户登录, 显示图表
     * 取值false: 当用户未登录, 不显示图表, 显示登录入口
     */
    loginRequired:boolean;

    /**
     * 是否是付费用户才能显示图标,
     * 取值true: 当用户为VIP, 显示图表
     * 取值false: 当用户不为VIP, 不显示图表, 显示成为VIP的入口
     */
    vipRequired:boolean;

    /**
     * 传入参数
     */
     args:{
        asset:string;
        index:string;
     };

     /**
      * 指标介绍
      */
      introduce:{
        text:string;
        isURL:boolean;
        weiboURL:string;
      };

     /**
      * 资产类别
      */
      assetList:string;

     /**
      * 目录页指标介绍
      */
      catalogText:string;

      /**
       * toolbox 栏目配置, 缺省情况下默认全部enabale
       */
      toolbox?:{
        /**
         * 均线栏目是否开启
         */
        sma:{
          enabled:boolean;
        };

        /**
         * 批注栏目是否开启
         */
        annotation:{
          enabled:boolean;
        };
      };

      /**
       * 个性化图表配置, TODO: fix type
       * 缺省情况下图表沿用默认配置
       */
      chart?:any;

      /**
       * 批注的相关配置
       */
      annotation?:IAnnotationConfig;
}

export interface MenuItem {
    /**
     * 显示的标题
     */
    name:string;
    /**
     * 图标
     */
    icon:any;
    /**
     * 菜单唯一标识
     */
    key:string;

    /**
     * 是否可见
     */
    visible:boolean;

    /**
     * 二级菜单
     */
    subMenus:SubMenuItem[];
  }

export interface Idate {
    year:number; month:number; day:number; hour?:number; minute?:number; second?:number;
}

export interface IPoint {
  date:Idate;
  color:'green' | 'red';
}

export interface IAnnotationConfig {
    /**
     * 画圈标注
     */
    circle?:{
        pricePoints:IPoint[];
        IndicePoints:IPoint[];
    };

    /**
     * 画区域标注
     */
    area?:{
      // TODO
    };

    /**
     * 画线性标注
     */
    line?:{
      // TODO
    };
  }
