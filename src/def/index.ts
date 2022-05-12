export enum StorageKey {
  sharerUserId = 'sharerUserId',
  sharerCode = 'sharerCode',
  sharerCodeInputVisible = 'sharerCodeInputVisible'
};

export enum orderStatusType {
  notPaid = '0',
  paidButNotUpgrade = '1',
  paidAndUpgrade = '2',
  profitReturned = '3',
}
export const orderStatusTypeList = [
  {
    'title': '未支付',
    'code': orderStatusType.notPaid,
  },
  {
    'title': '已支付, 未成功开通',
    'code': orderStatusType.paidButNotUpgrade,
  },
  {
    'title': '已支付, 已开通',
    'code': orderStatusType.paidAndUpgrade,
  },
  {
    'title': '已支付, 已开通, 推荐方已结算',
    'code': orderStatusType.profitReturned,
  },
];
