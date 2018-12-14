import { ICampaign } from '../../services/Models/Campaign.interface';
import { ActionTypes } from '../common';

export function updateCampaign(payload: ICampaign) {
  return {
    type: ActionTypes.UPDATE_CAMPAIGN,
    payload
  }
}
