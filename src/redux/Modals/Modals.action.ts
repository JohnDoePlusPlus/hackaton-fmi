import { ActionTypes } from '../common';

export function openModal(payload: string) {
  return {
    type: ActionTypes.OPEN_MODAL,
    payload
  }
}

export function closeModal() {
  return {
    type: ActionTypes.CLOSE_MODAL
  }
}
