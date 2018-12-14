import { ICampaign, ICampaignOptions, ILocationData } from '../services/Models/Campaign.interface';

export interface ICampaignState {
  campaign: ICampaign
  options: ICampaignOptions
  isRequestButtonDisabled: boolean
  targetingPotential: any
  locationData: ILocationData
}

export interface IModalsState {
  openResetModal: boolean
  openFAQModal: boolean
}

export interface IRootState {
  campaign: ICampaignState
  modals: IModalsState
}
