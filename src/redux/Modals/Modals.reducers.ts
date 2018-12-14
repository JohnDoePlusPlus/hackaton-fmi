import { Reducer } from 'redux';

import { ActionTypes } from '../common';
import { IModalsState } from '../IStore';
import { MODALS, OPEN_MODAL, CLOSE_MODAL } from '../../constants/constants';

const defaultState = {
  openResetModal: false,
  openFAQModal: false
} as IModalsState

const reducer: Reducer<IModalsState> = (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        ...(payload === MODALS.reset ? {
          openResetModal: OPEN_MODAL
        } : {
            openFAQModal: OPEN_MODAL
          })
      }
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        openFAQModal: CLOSE_MODAL,
        openResetModal: CLOSE_MODAL
      }
    default:
      return state
  }
}

export default reducer
