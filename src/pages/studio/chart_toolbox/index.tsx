// 第三方
import React, { memo, useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { getChart } from '@/components/chart';
import { ToolBoxWrapper } from './style';
export default memo(function LSChartToolbox() {
  const SMA_DAY_LIST = [0, 7, 14, 30, 50, 90];
  const [seletedDay, setSeletedDay] = useState(SMA_DAY_LIST[0]);
  const selectDay = (day:number) => {
    setSeletedDay(day);
  };

  const menuList = () => {
    const dayList = SMA_DAY_LIST;
    return (
      <Menu>
        {
          dayList.map((day:number) => (
            <Menu.Item
              onClick={ () => selectDay(day) }
              key={ `day-${day}` }
            >
              { day }天
            </Menu.Item>
          ))
        }
      </Menu>
    );
  };

  // 批注是否可见
  const [annoVisible, setAnnoVisible] = useState(false);
  const toggleAnnoVisible = (e:React.MouseEvent) => {
    e.preventDefault();
    setAnnoVisible(!annoVisible);
  };

  const [width, setWidth] = useState(100);

  setTimeout(() => {
    const el = document.querySelector('.site-layout-background');
    if (!el) {
      return;
    }
    const { width: w } = el.getBoundingClientRect();
    setWidth(w);
  }, 0);


  const exportMenuList = () => {
    const menus = ['png', 'jpg', 'pdf'];
    return (
      <Menu>
        {
          menus.map((f:string) => (
            <Menu.Item
              key={ `${f}` }
              onClick={ exportChart }
            >
              { f }
            </Menu.Item>
          ))
        }
      </Menu>
    );
  };
  const exportChart = () => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    // TODO 进行宽度适配
    c.exportChart({}, {});
  };

  return (
    <ToolBoxWrapper style={{ width: `${width}px` }}>
      <div className='content'>
        <ul>
          <li>
            <div
              className='ant-dropdown-link toolbox-cell'
              onClick={ (e) => toggleAnnoVisible(e) }>
              <div className='toolbox-cell-text-up'>{ annoVisible ? '显示' : '隐藏'}</div>
              <div className='toolbox-cell-text-down'>
                批注
                {
                  annoVisible ?
                    <EyeOutlined className='toolbox-btn-icon'/> :
                    <EyeInvisibleOutlined className='toolbox-btn-icon'/>

                }
              </div>
            </div>
          </li>
          <li>
            <Dropdown
              overlay={menuList()}
              placement='bottomRight'>
              <div
                className='ant-dropdown-link toolbox-cell'
                onClick={(e) => e.preventDefault()}>
                <div className='toolbox-cell-text-up'>{seletedDay}天</div>
                <div className='toolbox-cell-text-down'>均线
                  <DownOutlined className='toolbox-btn-icon'/>
                </div>
              </div>
            </Dropdown>
          </li>
          {
            getChart() &&
            <li>
              <Dropdown
                overlay={exportMenuList()}
                placement='bottomRight'>
                <div
                  className='ant-dropdown-link toolbox-cell'
                  onClick={(e) => e.preventDefault()}>
                  <div className='toolbox-cell-text-up'>png</div>
                  <div className='toolbox-cell-text-down'>导出
                    <DownOutlined className='toolbox-btn-icon'/>
                  </div>
                </div>
              </Dropdown>
            </li>
          }

        </ul>
      </div>
    </ToolBoxWrapper>
  );
});
