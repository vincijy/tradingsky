import styled from 'styled-components'
import btcLogo from '@/assets/img/btc_logo.png'

export const BoxWrapper = styled.div`
    margin-top: 14px;
    
    .bord-box{  // Card容器
        border-radius: 2px;
        height: 824px;

        .ant-card-head-title{  // 标题
            text-align: left;
            margin-left: -10px;

            img{
                width: 16px;
                margin-bottom: 2.5px;
            }

            span{
                font-size: 15.4px !important;
                margin-left: 5px;
            }
        }
    }

    .highcharts-tooltip-box{  // 提示框的透明效果
        opacity: 0.8;
    }

    .highcharts-legend-item{
        font-size: 100px !important;
    }
`