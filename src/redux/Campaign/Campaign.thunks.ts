import { Router } from '../../../routes';
import { ROUTES, STEPS } from '../../constants/constants';
import { ApiService } from '../../services/Api';
import { ICampaignPatchBody, ITargetingPotentialData } from '../../services/Models/Campaign.interface';
import { ActionTypes } from '../common';
import { initializeGa } from '../log';
import { updateCampaign, updateTargetingPotential } from './Campaign.actions';

export function getCampaignRequest() {
  return async (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_CAMPAIGN_REQUEST, payload: true })
    try {
      const { success, resource } = await ApiService.getInstance().request({
        url: 'campaigns',
        method: 'POST'
      })

      if (success) {
        dispatch(initializeGa(resource._id))
        dispatch(updateCampaign(resource))
        Router.pushRoute(ROUTES.settingUp, { step: STEPS.goal })
      }
    } catch (error) {
      dispatch(initializeGa())
      console.error(error)
    }
  }
}

export function updateCampaignRequest(id: string, data: ICampaignPatchBody) {
  return async (dispatch, getState) => {
    dispatch({ type: ActionTypes.UPDATE_CAMPAIGN_REQUEST, payload: data })
    try {
      const response = await ApiService.getInstance().request({
        url: `campaigns/${id}`,
        method: 'PATCH',
        data
      })
      if (response.success) {
        dispatch(updateCampaign(response.resource))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export function resetCampaign(id: string) {
  return async (dispatch, getState) => {
    dispatch({ type: ActionTypes.RESET_CAMPAIGN_REQUEST })
    try {
      const response = await ApiService.getInstance().request({
        url: `campaigns/${id}/reset`,
        method: 'POST',
      })
      if (response.success) {
        dispatch(updateCampaign(response.resource))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export function getTargetingPotential(data: ITargetingPotentialData) {
  return async (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_TARGETING_POTENTIAL_REQUEST })
    try {
      const response = await ApiService.getInstance().request({
        url: `facebook/business/reachestimate`,
        method: 'POST',
        data
      })
      if (response.success) {
        dispatch(updateTargetingPotential(response.resource))
      }
    } catch (error) {
      console.error(error)
    }
  }
}
