export const INITIALIZED_GA = 'INITIALIZED_GA'
export const SKIP_GA = 'SKIP_GA'
export const FAQ_DATA = [
  {
    question: 'How does my audience work?',
    answer: 'asdasdadasd'
  },
  {
    question: 'How does my audience work?',
    answer: 'asdasdadasd'
  },
  {
    question: 'How to reach your target audience on Facebook?',
    answer: 'To reach yuor target group on Facebook you need a Facebook page'
  },
  {
    question: 'How does my audience work?',
    answer: 'asdasdadasd'
  },
  {
    question: 'How does my audience work?',
    answer: 'asdasdadasd'
  },
  {
    question: 'How does my audience work?',
    answer: 'asdasdadasd'
  },
  {
    question: 'How does my audience work?',
    answer: 'asdasdadasd'
  },
]
export const ICONS = {
  arrowRight: { src: '../../static/icons/icn-arrow-right.svg', alt: 'Arrow right', width: '24' },
  previous: { src: '../../static/icons/icn-previous.svg', alt: 'Previous', width: '23' },
  learnMore: { src: '../../static/icons/icn-learn-more.svg', alt: 'Learn more' },
  facebook: { src: '../../static/icons/icn-facebook.svg', alt: 'Facebook', height: '18' },
  linkedin: { src: '../../static/icons/icn-linkedin.svg', alt: 'Linkedin', height: '18' },
  twitter: { src: '../../static/icons/icn-twitter.svg', alt: 'Twitter', height: '18' },
  instagram: { src: '../../static/icons/icn-instagram.svg', alt: 'Instagram', height: '18' },
  logo: { src: '/static/images/logo.png', alt: 'C&K Logo', width: '39', height: '31' },
  nextButton: { src: '../../static/icons/icn-next-button.svg', alt: 'Next button' },
  reset: { src: '../../static/icons/icn-reset.svg', alt: 'Reset' },
  targetingPeople: { src: '../../static/icons/icn-targeting-people.svg', alt: 'Targeting People' },
  add: { src: '../../static/icons/checkbox/icn-add.svg', alt: 'Add', width: '21', height: '21' },
  ageEverybody: { src: '../../static/icons/checkbox/icn-age_everybody.svg', alt: 'Age everybody' },
  ageMedium: { src: '../../static/icons/checkbox/icn-age_medium.svg', alt: 'Age medium' },
  ageYoung: { src: '../../static/icons/checkbox/icn-age_young.svg', alt: 'Age young' },
  agricultures: { src: '../../static/icons/checkbox/icn-agricultures.svg', alt: 'Agricultures' },
  attention: { src: '../../static/icons/checkbox/icn-attention.svg', alt: 'Attention' },
  banks: { src: '../../static/icons/checkbox/icn-banks.svg', alt: 'Banks' },
  beer: { src: '../../static/icons/checkbox/icn-beer.svg', alt: 'Beer' },
  cars: { src: '../../static/icons/checkbox/icn-cars.svg', alt: 'Cars' },
  check: { src: '../../static/icons/checkbox/icn-check.svg', alt: 'Check' },
  cities: { src: '../../static/icons/checkbox/icn-cities.svg', alt: 'Cities' },
  citiesLine: { src: '../../static/icons/checkbox/icn-cities_line.svg', alt: 'Cities line' },
  close: { src: '../../static/icons/checkbox/icn-close.svg', alt: 'Close', width: '21', height: '21' },
  convince: { src: '../../static/icons/checkbox/icn-convince.svg', alt: 'Convince' },
  digital: { src: '../../static/icons/checkbox/icn-digital.svg', alt: 'Digital' },
  economy: { src: '../../static/icons/checkbox/icn-economy.svg', alt: 'Economy' },
  education: { src: '../../static/icons/checkbox/icn-education.svg', alt: 'Education' },
  environment: { src: '../../static/icons/checkbox/icn-environment.svg', alt: 'Environment' },
  generalPublic: { src: '../../static/icons/checkbox/icn-general_public.svg', alt: 'General public' },
  mobilize: { src: '../../static/icons/checkbox/icn-mobilize.svg', alt: 'Mobilize' },
  politicalActors: { src: '../../static/icons/checkbox/icn-political_actors.svg', alt: 'Political actors' },
  social: { src: '../../static/icons/checkbox/icn-social.svg', alt: 'Social' },
  states: { src: '../../static/icons/checkbox/icn-states.svg', alt: 'states' },
}
export const SETTING_UP_OPTIONS_DATA = {
  goal: [
    {
      label: 'Brand awareness',
      value: 'brand_awareness',
      svg: ICONS.nextButton,
    },
    {
      label: 'Engagement',
      value: 'engagement',
      svg: ICONS.nextButton,
    },
    {
      label: 'Reach',
      value: 'reach',
      svg: ICONS.nextButton,
    }
  ],
  cluster: [
    {
      label: 'Agriculture',
      value: 'economy',
      svg: ICONS.economy,
    },
    {
      label: 'Banks, Commercial',
      value: 'banks_commercial',
      svg: ICONS.banks,
    },
    {
      label: 'Beer, Wine and Liquor',
      value: 'beer_wine_liquore',
      svg: ICONS.beer,
    },
    {
      label: 'Car Manufacturers',
      value: 'car_manufacturers',
      svg: ICONS.cars,
    },
    {
      label: 'Education',
      value: 'education',
      svg: ICONS.education,
    }
  ],
  'sub-cluster': [
    {
      label: 'Business journalists',
      value: 'business_journalists',
      svg: ICONS.nextButton,
    },
    {
      label: 'banks_commercial_sub_cluster_1',
      value: 'banks_commercial_sub_cluster_1',
      svg: ICONS.nextButton,
    }
  ],
  participants: [
    {
      label: 'People interested in topics',
      value: 'people_interested_in_topics',
      svg: ICONS.mobilize,
    },
    {
      label: 'Political actors',
      value: 'political_actors',
      svg: ICONS.politicalActors,
    },
    {
      label: 'General public',
      value: 'general_public',
      svg: ICONS.generalPublic,
    },
  ],
  interests: [
    {
      label: 'Political',
      value: 'political',
      svg: ICONS.politicalActors,
    },
    {
      label: 'Social',
      value: 'social',
      svg: ICONS.social,
    },
    {
      label: 'Environment',
      value: 'environment',
      svg: ICONS.environment,
    },
    {
      label: 'Economy',
      value: 'economy',
      svg: ICONS.economy,
    },
    {
      label: 'Digital',
      value: 'digital',
      svg: ICONS.digital,
    }
  ],
  age: [
    {
      label: 'Young',
      value: 'young',
      svg: ICONS.ageYoung,
    },
    {
      label: 'Adult',
      value: 'adult',
      svg: ICONS.ageMedium,
    },
    {
      label: 'Everybody',
      value: 'everybody',
      svg: ICONS.ageEverybody,
    },
  ],
  'political-party-affiliation': [
    {
      label: 'Christian Democratic Union',
      value: 'christian_democratic_union',
      svg: '',
    },
    {
      label: 'Social Democratic Party of Germany',
      value: 'social_democratic_party_of_germany',
      svg: '',
    },
    {
      label: 'Free Political Party',
      value: 'free_political_party',
      svg: '',
    },
    {
      label: 'The Left',
      value: 'the_left',
      svg: '',
    },
    {
      label: 'Alternative For Germany',
      value: 'alternative_for_germany',
      svg: '',
    },
    {
      label: 'Green Party',
      value: 'green_party',
      svg: '',
    },
    {
      label: 'Christian Social Union in Bavaria',
      value: 'christian_social_union_in_bavaria',
      svg: '',
    }
  ],
  location: [
    {
      label: 'I want to target cities',
      value: 'city',
      svg: ICONS.cities,
    },
    {
      label: 'I want to target entire states',
      value: 'state',
      svg: ICONS.states,
    },
  ],
  timePerStep: {
    age: 'age',
    cluster: 'cluster',
    goal: 'goal',
    interests: 'interests',
    location: 'location',
    participants: 'participants',
    politicalPartyAffiliation: 'political_party_affiliation',
    subCluster: 'sub_cluster',
    user: 'user'
  }
}
export const STEPS = {
  welcome: 'welcome',
  goal: 'goal',
  cluster: 'cluster',
  subCluster: 'sub-cluster',
  participants: 'participants',
  interests: 'interests',
  age: 'age',
  politicalPartyAffiliation: 'political-party-affiliation',
  location: 'location',
  review: 'review'
}
export const STEPS_ORDER = [
  'welcome',
  'goal',
  'cluster',
  'participants',
  'interests',
  'age',
  'political-party-affiliation',
  'location',
  'review'
]
export const OPEN_MODAL = true
export const CLOSE_MODAL = false
export const NONE = 'none'
export const DASHED_OPTIONS = {
  'sub-cluster': 'sub_cluster',
  'political-party-affiliation': 'political_party_affiliation'
}
export const KEYS = {
  enter: 'Enter',
  escape: 'Escape'
}
export const EVENT_TYPE = {
  keyup: 'keyup'
}
export const ROUTES = {
  settingUp: 'setting-up'
}
export const MODALS = {
  reset: 'reset',
  FAQ: 'FAQ'
}
