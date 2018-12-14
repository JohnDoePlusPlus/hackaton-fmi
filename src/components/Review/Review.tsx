import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { Link } from '../../../routes';
import { ROUTES, SETTING_UP_OPTIONS_DATA } from '../../constants/constants';
import { STEPS_TEXTS } from '../../constants/texts';
import { CampaignSelectors } from '../../redux/Campaign/Campaign.selectors';
import { ICampaignOptions } from '../../services/Models/Campaign.interface';
import * as css from './Review.scss';

interface Props {
  options?: ICampaignOptions
}

class Review extends React.Component<Props> {
  renderOptionsPreview = (option: string, index: number) => {
    const { options } = this.props
    const stepTexts = STEPS_TEXTS[option]
    const chosenOption = SETTING_UP_OPTIONS_DATA[option].find(data => data.value === options[option])

    return (
      <div key={index} className={css.review__option}>
        svg
        <div>
          <div>
            {stepTexts.reviewStory}
          </div>
          <div>
            {stepTexts.name}:&nbsp;
            <Link route={ROUTES.settingUp} params={{ step: option, isReview: true }}>
              <a>{chosenOption.label}</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { options } = this.props

    return (
      <div className={css.review}>
        svg
        <span>{STEPS_TEXTS.review.reviewStory}</span>
        {Object.keys(options).map(this.renderOptionsPreview)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  campaign: CampaignSelectors.getCampaign(state),
  options: CampaignSelectors.getOptions(state),
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Review)
