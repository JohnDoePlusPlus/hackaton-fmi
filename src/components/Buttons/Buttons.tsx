import * as React from 'react';
import { withRouter } from 'next/router';
import { connect, Dispatch } from 'react-redux';

import { Router } from '../../../routes';
import { DASHED_OPTIONS, EVENT_TYPE, ICONS, KEYS, NONE, ROUTES, STEPS, STEPS_ORDER } from '../../constants/constants';
import { CampaignSelectors } from '../../redux/Campaign/Campaign.selectors';
import { getCampaignRequest, updateCampaignRequest } from '../../redux/Campaign/Campaign.thunks';
import { ICampaign, ICampaignOptions, ICampaignPatchBody } from '../../services/Models/Campaign.interface';
import * as css from './Buttons.scss';
import { BUTTONS_TEXT } from '../../constants/texts';

interface Props {
  updateCampaign?: (id: string, data: ICampaignPatchBody) => Dispatch<any>
  campaign?: ICampaign
  currentStep: string
  options?: ICampaignOptions
  router?: {
    query: {
      step: string
      isReview: boolean
    }
  }
}

interface State {
  startTime: number
}

class Buttons extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      startTime: Date.now(),
    }
  }

  eventCallback = event => {
    if (event.key === KEYS.enter && !this.isButtonDisabled()) {
      this.redirect()
    }
  }

  componentDidMount() {
    document.addEventListener(EVENT_TYPE.keyup, this.eventCallback, true)
  }

  componentWillUnmount() {
    document.removeEventListener(EVENT_TYPE.keyup, this.eventCallback, true)
  }

  componentDidUpdate(prevProps: Props) {
    const { currentStep } = this.props
    if (prevProps.currentStep !== currentStep) {
      this.setState({
        startTime: Date.now()
      })
    }
  }

  patch = () => {
    const { updateCampaign, campaign, currentStep, options } = this.props
    const dashedOption = DASHED_OPTIONS[currentStep]
    const option = dashedOption ? dashedOption : currentStep
    const passedSeconds = Math.round((Date.now() - this.state.startTime) / 1000)

    const data = {
      [option]: options[currentStep],
      time_per_step: {
        [option]: passedSeconds
      }
    }
    updateCampaign(campaign._id, data)
  }

  getNextStepName = () => {
    const { currentStep, options } = this.props
    const nextStepIndex = STEPS_ORDER.indexOf(currentStep) + 1

    return options.cluster && currentStep === STEPS.cluster ? STEPS.subCluster : STEPS_ORDER[nextStepIndex]
  }

  redirect = () => {
    const { currentStep } = this.props

    if (!this.isSkipButton()) {
      this.patch()
    }

    const { pushRoute, query } = Router

    pushRoute(ROUTES.settingUp, {
      step: currentStep === STEPS.subCluster || query.isReview ? STEPS.review : this.getNextStepName()
    })
  }

  isButtonDisabled = () => {
    const { options, currentStep } = this.props

    return !options[currentStep] && currentStep !== STEPS.cluster
  }

  goToPreviousRoute = event => {
    (event.target as any).blur();
    Router.back()
  }

  isSkipButton = () => {
    const { currentStep, options } = this.props

    return currentStep === STEPS.cluster && !options.cluster
  }

  getButtonText = () => {
    const { isReview } = this.props.router.query
    if (isReview) {
      return BUTTONS_TEXT.review
    }
    if (this.isSkipButton()) {
      return BUTTONS_TEXT.skip
    }
    return BUTTONS_TEXT.next
  }

  render() {
    const { currentStep, router } = this.props
    const { isReview } = router.query

    return (
      <div className={css.buttons}>
        {isReview || currentStep === STEPS.goal ? null :
          <button className={css.buttons__previousButton} onClick={this.goToPreviousRoute}>
            <img {...ICONS.previous} /> Previous
          </button>}
        <button className={css.buttons__nextButton} onClick={this.redirect} disabled={this.isButtonDisabled()}>
          <span className={css.buttons__nextButton__text}>
            {this.getButtonText()}
          </span>
          <img {...ICONS.nextButton} />
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  campaign: CampaignSelectors.getCampaign(state),
  options: CampaignSelectors.getOptions(state)
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  updateCampaign: (id: string, data: ICampaignPatchBody) => dispatch(updateCampaignRequest(id, data))
})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect<any, any, Props, any>(mapStateToProps, mapDispatchToProps, mergeProps)(withRouter(Buttons))
