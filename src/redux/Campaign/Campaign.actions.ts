import { ICampaign, IHandleOptionsData, ILocationActionData } from '../../services/Models/Campaign.interface';
import { ActionTypes } from '../common';

export function updateCampaign(payload: ICampaign) {
  return {
    type: ActionTypes.UPDATE_CAMPAIGN,
    payload
  }
}

export function handleOptions(payload: IHandleOptionsData) {
  return {
    type: ActionTypes.HANDLE_OPTIONS,
    payload
  }
}

export function updateTargetingPotential(payload: any) {
  return {
    type: ActionTypes.UPDATE_TARGETING_POTENTIAL,
    payload
  }
}

export function addInput(payload: ILocationActionData) {
  return {
    type: ActionTypes.ADD_INPUT,
    payload
  }
}

export function removeInput(payload: ILocationActionData) {
  return {
    type: ActionTypes.REMOVE_INPUT,
    payload
  }
}

export function saveLocation(payload: ILocationActionData) {
  return {
    type: ActionTypes.SAVE_LOCATION,
    payload
  }
}
