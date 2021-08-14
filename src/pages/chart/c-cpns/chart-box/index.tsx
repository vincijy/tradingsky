// 第三方
import React, { memo, useEffect, MutableRefObject, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'  // redux的hook
import Highcharts from 'highcharts/highstock'  // HighChart图表
import HighchartsReact from 'highcharts-react-official'
import { Button, Card } from 'antd'

// 功能
import { getAddressAction } from '../../store/actionCreators'  // 发送Action

// 本地
import { BoxWrapper } from './style'
import btcLogo from '@/assets/img/btc_logo.png'

export default memo(function LSChartBox() {

    Highcharts.setOptions({  // 全局配置
        lang:{
            contextButtonTitle:"图表导出菜单",
            decimalPoint:".",  // 小数点
            downloadJPEG:"下载JPEG图片",
            downloadPDF:"下载PDF文件",
            downloadPNG:"下载PNG文件",
            downloadSVG:"下载SVG文件",
            drillUpText:"返回 {series.name}",
            loading:"加载中",
            months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
            noData:"没有数据",
            numericSymbols: [ "千" , "兆" , "G" , "T" , "P" , "E"],
            printChart:"打印图表",
            resetZoom:"恢复缩放",
            resetZoomTitle:"恢复图表",
            shortMonths: [ "1月" , "2月" , "3月" , "4月" , "5月" , "6月" , "7月" , "8月" , "9月" , "10月" , "11月" , "12月"],
            thousandsSep:",",  // 千分号
            weekdays: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六","星期天"]
        },
        tooltip: {
            // xDateFormat: '%Y-%m-%d',  // 时间格式化
			shared: true 
        }
    }) 

    // state/props
    const [dataApple, setDataApple] = useState([{"x":1220832000000, "y":22.56}, [1220918400000, 21.67], [1221004800000, 21.66], [1221091200000, 21.81], [1221177600000, 21.28], [1221436800000, 20.05], [1221523200000, 19.98], [1221609600000, 18.26], [1221696000000, 19.16], [1221782400000, 20.13], [1222041600000, 18.72], [1222128000000, 18.12], [1222214400000, 18.39], [1222300800000, 18.85], [1222387200000, 18.32], [1222646400000, 15.04], [1222732800000, 16.24], [1222819200000, 15.59], [1222905600000, 14.3], [1222992000000, 13.87], [1223251200000, 14.02], [1223337600000, 12.74], [1223424000000, 12.83], [1223510400000, 12.68], [1223596800000, 13.8], [1223856000000, 15.75], [1223942400000, 14.87], [1224028800000, 13.99], [1224115200000, 14.56], [1224201600000, 13.91], [1224460800000, 14.06], [1224547200000, 13.07], [1224633600000, 13.84], [1224720000000, 14.03], [1224806400000, 13.77], [1225065600000, 13.16], [1225152000000, 14.27], [1225238400000, 14.94], [1225324800000, 15.86], [1225411200000, 15.37], [1225670400000, 15.28], [1225756800000, 15.86], [1225843200000, 14.76], [1225929600000, 14.16], [1226016000000, 14.03], [1226275200000, 13.7], [1226361600000, 13.54], [1226448000000, 12.87], [1226534400000, 13.78], [1226620800000, 12.89], [1226880000000, 12.59], [1226966400000, 12.84], [1227052800000, 12.33], [1227139200000, 11.5], [1227225600000, 11.8], [1227484800000, 13.28], [1227571200000, 12.97], [1227657600000, 13.57], [1227830400000, 13.24], [1228089600000, 12.7], [1228176000000, 13.21], [1228262400000, 13.7], [1228348800000, 13.06], [1228435200000, 13.43], [1228694400000, 14.25], [1228780800000, 14.29], [1228867200000, 14.03], [1228953600000, 13.57], [1229040000000, 14.04], [1229299200000, 13.54]])
    const [dataBpple, setDataBpple] = useState([[1220832000000, 26], [1220918400000, 2], [1221004800000, 26], [1221091200000, 21], [1221177600000, 28], [1221436800000, 35], [1221523200000, 11], [1221609600000, 16], [1221696000000, 16], [1221782400000, 23], [1222041600000, 12], [1222128000000, 18], [1222214400000, 19], [1222300800000, 15], [1222387200000, 12], [1222646400000, 14], [1222732800000, 16], [1222819200000, 19], [1222905600000, 14], [1222992000000, 17], [1223251200000, 12], [1223337600000, 17], [1223424000000, 18], [1223510400000, 18], [1223596800000, 17], [1223856000000, 15], [1223942400000, 17], [1224028800000, 19], [1224115200000, 16], [1224201600000, 11], [1224460800000, 16], [1224547200000, 17], [1224633600000, 14], [1224720000000, 13], [1224806400000, 17], [1225065600000, 16], [1225152000000, 17], [1225238400000, 14], [1225324800000, 16], [1225411200000, 17], [1225670400000, 18], [1225756800000, 16], [1225843200000, 17], [1225929600000, 16], [1226016000000, 13], [1226275200000, 17], [1226361600000, 14], [1226448000000, 17], [1226534400000, 18], [1226620800000, 19], [1226880000000, 15], [1226966400000, 12], [1227052800000, 13], [1227139200000, 15], [1227225600000, 18], [1227484800000, 18], [1227571200000, 19], [1227657600000, 17], [1227830400000, 14], [1228089600000, 17], [1228176000000, 11], [1228262400000, 17], [1228348800000, 16], [1228435200000, 13], [1228694400000, 15], [1228780800000, 19], [1228867200000, 13], [1228953600000, 17], [1229040000000, 14], [1229299200000, 14]])
   

    // redux hook
    let { glassAddressDate } = useSelector(state => ({
        // TODO: fix type
        glassAddressDate: (state as any).getIn(["chartPage","glassAddressDate"])
    }),shallowEqual)

    const dispatch = useDispatch()

    // hook
    useEffect(() => {
        dispatch(getAddressAction('active_count'))

        setInterval(function() {  // 这里用一个计时器reflow，未来可以做一个div的监听，发现div大小改变就reflow
            for (var i = 0; i < Highcharts.charts.length; i++) {
                const chart = Highcharts.charts[i];
                chart && chart.reflow();
              }
        }, 100);
    }, [dispatch])

    // handle
    let arr = [];  // 数据转换
    for (let i = 0 ; i < glassAddressDate.length ; i++ ){
        arr.push([glassAddressDate[i].t, new Date(glassAddressDate[i].v).valueOf()]);
    }
    console.log(arr)

    const test = <div>
                    <img src={btcLogo} alt="比特币" /> 
                    {/* 这部分后面都用chain-data文件里的数据替换：logo、title */}
                    <span title="比特币地址：链上活跃地址量" >比特币地址：链上活跃地址量</span>
                 </div>


    // handle function

    // 配置HighCharts
    const partOptions = { 
        chart: {
            height: 700,  // 图表高度
        },

        credits:{
            enabled: false  // 不显示版权
        },

        rangeSelector: {
            selected: 2  // 默认展示的范围：1是一个季度
        },

        legend: {
            enabled: true,  // 显示图例
            verticalAlign: 'top',  // 图例位置
            align: 'left',
            margin: -5,  // 学习glassnode把图例放在靠下的位置
        },

        tooltip: {
            animation: false,  // 关闭动画效果（what）

            backgroundColor: '#fcfcfc',   // 背景颜色
            borderColor: 'rgb(247, 147, 26)',         // 边框颜色
            borderRadius: 3,             // 边框圆角
            borderWidth: 1,               // 边框宽度

            xDateFormat: '%Y-%m-%d',  // 时间格式化

            split: false,  // 两个数据的提示框合并
            shared: true,

            shadow: true,                 // 是否显示阴影
            style: {                      // 文字内容相关样式
                color: "black",
                fontSize: "12px",
            },

            // crosshairs: [true, true],  // 同时启用竖直及水平准星线

            crosshairs: [{            // 设置准星线样式
                width: 1,
                color: 'rgb(204, 204, 204)'
            }, {
                width: 1,
                color: "rgb(204, 204, 204)",
            }]
        },

        series: [{
            name: '活跃地址量',
            data: arr,
            color: 'rgb(247, 147, 26)',  // 线条颜色
          },
        //   {
        //     name: '价格',
        //     data: dataBpple,
        //     color: 'rgba(0,0,0,0.5)',  // 线条颜色
        // }
    ],
    }
    const [options, setOptions] = useState(partOptions)

    return (
        <BoxWrapper>
            <div id="container" >
                <Card title={test} className="bord-box" >
                    <HighchartsReact 
                        highcharts={Highcharts}
                        // TODO: 确认下为什么这么写
                        // highcharts={"bord-box",Highcharts}
                        constructorType={'stockChart'}
                        options={options}
                    />
                </Card>
            </div>
        </BoxWrapper>
    )
})
