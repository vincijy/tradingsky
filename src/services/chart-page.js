// 二次封装的axios
import request from './request'

export function getAddressAxios(which) {
    return request ({
        url: `/cross/addresses/${which}`,  // 传入which变换指标类型
        params: {
            a: 'BTC',
            i: '24h',
            c: 'USD',
            api_key: '6c0ea60d-6495-4efd-b8b5-5b8d8f55447c'
            // timestamp_format: 'humanized',
        }
    })
}

export function getPriceAxios() {
    return request ({
        url: '/cross/market/price_usd_close',  // 传入which变换指标类型
        params: {
            a: 'BTC',
            i: '24h',
            c: 'USD',
            api_key: '6c0ea60d-6495-4efd-b8b5-5b8d8f55447c'
            // timestamp_format: 'humanized',
        }
    })
}