import { Reducer } from 'redux';

import { ActionTypes } from '../common';
import { ICampaignState } from '../IStore';
import { ILocationActionData, IHandleOptionsData } from '../../services/Models/Campaign.interface';

const defaultState = {
  campaign: null,
  options: {},
  isRequestButtonDisabled: false,
  targetingPotential: null,
  locationData: {
    city: [''],
    state: ['']
  }
} as ICampaignState

const reducer: Reducer<ICampaignState> = (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.RESET_CAMPAIGN_REQUEST:
      return {
        ...state,
        options: {}
      }
    case ActionTypes.UPDATE_CAMPAIGN:
      return {
        ...state,
        campaign: payload
      }
    case ActionTypes.UPDATE_TARGETING_POTENTIAL:
      return {
        ...state,
        targetingPotential: payload
      }
    case ActionTypes.GET_CAMPAIGN_REQUEST:
      return {
        ...state,
        isRequestButtonDisabled: payload
      }
    case ActionTypes.SAVE_LOCATION:
      return saveLocation(state, payload)
    case ActionTypes.ADD_INPUT:
      return addInput(state, payload)
    case ActionTypes.REMOVE_INPUT:
      return removeInput(state, payload)
    case ActionTypes.HANDLE_OPTIONS:
      return handleOptions(state, payload)
    default:
      return state
  }
}
export default reducer

const saveLocation = (state: ICampaignState, payload: ILocationActionData) => {
  const { locationName, index, locationType } = payload
  const newArray = state.locationData[locationType]
  newArray[index] = locationName
  return {
    ...state,
    locationData: {
      ...state.locationData,
      [locationType]: newArray
    }
  }
}

const addInput = (state: ICampaignState, payload: ILocationActionData) => {
  const { locationType } = payload
  return {
    ...state,
    locationData: {
      ...state.locationData,
      [locationType]: [...state.locationData[locationType], '']
    }
  }
}

const removeInput = (state: ICampaignState, payload: ILocationActionData) => {
  const { index, locationType } = payload
  const newArray = state.locationData[locationType]

  if (newArray.length !== 1) {
    newArray.splice(index, 1)
  } else {
    newArray[0] = ''
  }
  return {
    ...state,
    locationData: {
      ...state.locationData,
      [locationType]: newArray
    }
  }
}

const handleOptions = (state: ICampaignState, payload: IHandleOptionsData) => {
  const { currentStep, value } = payload
  return {
    ...state,
    options: {
      ...state.options,
      [currentStep]: value
    }
  }
}
