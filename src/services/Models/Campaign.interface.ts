export interface ICampaign {
  _id: string
}

export interface ICampaignPatchBody {
  [campaignDetailsField: string]: any
  time_per_step: {
    [campaignDetailsField: string]: any
  }
}

export interface IRadioBody extends IOption {
  svg: {
    src: string
    alt: string
  }
}

export interface IOption {
  label: string
  value: string
}

export interface IHandleOptionsData {
  currentStep: string
  value: string
}

export interface ICampaignOptions {
  cluster?: string
  location?: string
}

interface ILocation {
  cities: [string],
  countries: [string],
  regions: [string],
}

export interface ITargetingPotentialData {
  age?: string
  cluster?: string
  goal: string
  interests?: string
  location?: ILocation
  participants?: string
  political_party_affiliation?: string
  sub_cluster?: string
}

export interface ILocationData {
  city: string[]
  state: string[]
}

export interface ILocationActionData {
  index?: number
  locationName?: string
  locationType: string
}
