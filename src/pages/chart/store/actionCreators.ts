import * as actionTypes from './constant'  // 常量
import { getAddressAxios, getPriceAxios } from '@/services/chart-page'  // 网络请求
// TODO: fix type
const changeAddress = (res:any) => ({    // 把拿到的数据传给reducer
    type: actionTypes.CHANGEW_GLASS_ADDRESS,
    glassAddressDate: res
})

export const getAddressAction = (which:any) => {  // 拿到数据
    return (dispatch:any) => {
        getAddressAxios(which).then(res => {  // which是传入的具体指标参数
            dispatch(changeAddress(res))
        })
    }
}

const changePrice = (res:any) => ({    // 把拿到的数据传给reducer
    type: actionTypes.CHANGEW_GLASS_PRICE,
    glassAddressDate: res
})

export const getPriceAction = () => {  // 拿到数据
    return (dispatch:any) => {
        getPriceAxios().then(res => {  // which是传入的具体指标参数
            dispatch(changePrice(res))
        })
    }
}
