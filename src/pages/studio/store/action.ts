import { createAction } from 'redux-actions';
import * as A from './action_type';
import * as D from './def';

export const changeMenu = createAction<D.PayloadChangeMenu>(A.changeMenu);
