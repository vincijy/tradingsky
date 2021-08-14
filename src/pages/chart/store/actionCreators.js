import * as actionTypes from './constant.js'  // 常量
import { getAddressAxios, getPriceAxios } from '@/services/chart-page.js'  // 网络请求

const changeAddress = (res) => ({    // 把拿到的数据传给reducer
    type: actionTypes.CHANGEW_GLASS_ADDRESS,
    glassAddressDate: res
})

export const getAddressAction = (which) => {  // 拿到数据
    return dispatch => {
        getAddressAxios(which).then(res => {  // which是传入的具体指标参数
            dispatch(changeAddress(res))
        })
    }
}

const changePrice = (res) => ({    // 把拿到的数据传给reducer
    type: actionTypes.CHANGEW_GLASS_PRICE,
    glassAddressDate: res
})

export const getPriceAction = () => {  // 拿到数据
    return dispatch => {
        getPriceAxios().then(res => {  // which是传入的具体指标参数
            dispatch(changePrice(res))
        })
    }
}
