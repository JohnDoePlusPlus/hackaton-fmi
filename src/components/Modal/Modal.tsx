import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Dispatch } from 'react-redux';

import { Router } from '../../../routes';
import { EVENT_TYPE, FAQ_DATA, KEYS, ROUTES, STEPS } from '../../constants/constants';
import { RESET_WARNING } from '../../constants/texts';
import { CampaignSelectors } from '../../redux/Campaign/Campaign.selectors';
import { resetCampaign } from '../../redux/Campaign/Campaign.thunks';
import { closeModal } from '../../redux/Modals/Modals.action';
import { ModalsSelectors } from '../../redux/Modals/Modals.selectors';
import { ICampaign } from '../../services/Models/Campaign.interface';
import { QA } from '../../services/Models/Faq.interface';
import * as css from './Modal.scss';

interface Props {
  closeModal?: () => Dispatch<any>
  resetCampaign?: (id: string) => Dispatch<any>
  campaign?: ICampaign
  isFAQModalOpened?: boolean
  isResetModalOpened?: boolean
}

class Modal extends React.Component<Props> {
  closeModal = () => {
    const { closeModal } = this.props

    document.removeEventListener(EVENT_TYPE.keyup, this.eventCallback, true)
    closeModal()
  }

  eventCallback = event => {
    if (event.key === KEYS.escape) {
      this.closeModal()
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { isFAQModalOpened, isResetModalOpened } = this.props

    if (prevProps.isFAQModalOpened !== isFAQModalOpened || prevProps.isResetModalOpened !== isResetModalOpened) {
      document.addEventListener(EVENT_TYPE.keyup, this.eventCallback, true)
    }
  }

  renderQuestion = (qa: QA, index: number) => {
    return (
      <div key={index}>
        <h3>{qa.question}</h3>
        <p>{qa.answer}</p>
      </div>
    )
  }

  renderFAQModal = () => {
    return (
      <div className={css.modal__faqContainer}>
        <header>
          <button onClick={this.closeModal}>Back</button>
          <h2>Frequently Asked Questions</h2>
        </header>
        {FAQ_DATA.map(this.renderQuestion)}
      </div>
    )
  }

  resetCampaign = () => {
    const { resetCampaign, campaign, closeModal } = this.props

    resetCampaign(campaign._id)
    Router.pushRoute(ROUTES.settingUp, { step: STEPS.goal })
    closeModal()
  }

  renderResetModal = () => {
    const { closeModal } = this.props

    return (
      <div className={css.modal__resetContainer}>
        <p>{RESET_WARNING}</p>
        <p>
          <button onClick={closeModal}>Close</button>
          <button onClick={this.resetCampaign}>Reset</button>
        </p>
      </div>
    )
  }

  render() {
    const { isFAQModalOpened, isResetModalOpened } = this.props

    return isFAQModalOpened || isResetModalOpened ? ReactDOM.createPortal(
      <div className={css.modal}>
        <div className={css.modal__backgroundOverlay} onClick={this.closeModal} />
        {isFAQModalOpened ? this.renderFAQModal() : this.renderResetModal()}
      </div >,
      document.body
    ) : null
  }
}

const mapStateToProps = (state) => ({
  campaign: CampaignSelectors.getCampaign(state),
  isFAQModalOpened: ModalsSelectors.getOpenFAQModal(state),
  isResetModalOpened: ModalsSelectors.getOpenResetModal(state)
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  closeModal: () => dispatch(closeModal()),
  resetCampaign: (id: string) => dispatch(resetCampaign(id))
})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Modal)
