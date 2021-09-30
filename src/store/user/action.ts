import { createAction } from 'redux-actions';
import * as A from './action_type'; // 常量
import * as D from './def';

export const toggleLogin = createAction<D.IPayloadToggleLogin>(A.TOGGLE_LOGIN);

export const updateUserInfo = createAction<D.IPayloadUpdateUserInfo>(A.UPDATE_USER_INFO);

export const updateUserCollection = createAction<D.IPayloadUpdateUserCollection>(A.UPDATE_USER_COLLECTION);
