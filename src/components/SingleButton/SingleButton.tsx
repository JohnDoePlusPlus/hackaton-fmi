import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { Router } from '../../../routes';
import { EVENT_TYPE, ICONS, KEYS, ROUTES } from '../../constants/constants';
import { CampaignSelectors } from '../../redux/Campaign/Campaign.selectors';
import { getCampaignRequest } from '../../redux/Campaign/Campaign.thunks';
import { ICampaign } from '../../services/Models/Campaign.interface';
import * as css from './SingleButton.scss';

interface Props {
  getCampaign?: () => Dispatch<any>
  campaign?: ICampaign
  redirectToStep: string
  isRequestButtonDisabled?: boolean
}

class SingleButton extends React.Component<Props> {
  eventCallback = event => {
    if (event.key === KEYS.enter) {
      this.redirect()
    }
  }

  componentDidMount() {
    document.addEventListener(EVENT_TYPE.keyup, this.eventCallback, true)
  }

  componentWillUnmount() {
    document.removeEventListener(EVENT_TYPE.keyup, this.eventCallback, true)
  }

  redirect = () => {
    const { getCampaign, campaign, redirectToStep, isRequestButtonDisabled } = this.props

    if (isRequestButtonDisabled && !campaign) { return }

    !campaign ? getCampaign() : Router.pushRoute(ROUTES.settingUp, { step: redirectToStep })
  }

  render() {
    const { children } = this.props

    return (
      <button className={css.button} onClick={this.redirect}>
        <span className={css.button__text}>
          {children}
        </span>
        <img {...ICONS.arrowRight} />
      </button>
    )
  }
}

const mapStateToProps = (state) => ({
  campaign: CampaignSelectors.getCampaign(state),
  isRequestButtonDisabled: CampaignSelectors.getIsRequestButtonDisabled(state),
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getCampaign: () => dispatch(getCampaignRequest()),
})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SingleButton)
