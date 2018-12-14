import { ENV } from './env';

export const URL_API = getApiUrl()

function getApiUrl() {
  switch (ENV) {
    case 'production':
    // return ''
    case 'staging':
      return 'http://ck-targeting-staging-api.mvpf.in'
    default:
      return 'http://localhost:3333/'
  }
}
