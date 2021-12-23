import btcLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';
export const assetList = [
  {
    key: 'main_stream',
    value: '主流币',
    children: [
      {
        key: 'btc',
        imgSrc: btcLogo,
        displayValue: '比特币',
      },
      {
        key: 'eth',
        imgSrc: ethLogo,
        displayValue: '以太坊',
      },
    ],
  },
  {
    key: 'stable_coin',
    value: '稳定币',
    children: [
      {
        key: 'usdt',
        imgSrc: btcLogo,
        displayValue: 'usdt',
      },
      {
        key: 'busd',
        imgSrc: ethLogo,
        displayValue: 'busd',
      },
    ],
  },
];
