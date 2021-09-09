import { AuthenticationClient } from 'authing-js-sdk'; // 登录SDK
import store from '@/store';
import { authingConfig } from '@/config';

function getAuthConfig() {
  return {
    ...authingConfig,
    token: store.getState().user.userInfo.token || '',
  };
}

export function getAuthingClient():AuthenticationClient {
  const c = getAuthConfig();
  let client = new AuthenticationClient(c);
  if (c.token !== store.getState().user.userInfo.token) {
    client = new AuthenticationClient(c);
  }
  return client;
}

