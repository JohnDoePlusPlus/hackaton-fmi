import { combineReducers } from 'redux';

import campaign from './Campaign/Campaign.reducers';
import modals from './Modals/Modals.reducers';
import { IRootState } from './IStore';

export const reducer = combineReducers<IRootState>({
  campaign,
  modals
})
