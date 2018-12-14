import { IRootState } from '../IStore';

export const CampaignSelectors = {
  getCampaign: (state: IRootState) => state.campaign.campaign,
  getOptions: (state: IRootState) => state.campaign.options,
  getLocationData: (state: IRootState) => state.campaign.locationData,
  getTargetingPotential: (state: IRootState) => state.campaign.targetingPotential,
  getIsRequestButtonDisabled: (state: IRootState) => state.campaign.isRequestButtonDisabled
}
