import { IRootState } from '../IStore';

export const ModalsSelectors = {
  getOpenResetModal: (state: IRootState) => state.modals.openResetModal,
  getOpenFAQModal: (state: IRootState) => state.modals.openFAQModal
}
