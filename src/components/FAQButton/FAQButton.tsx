import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { ICONS, MODALS } from '../../constants/constants';
import { openModal } from '../../redux/Modals/Modals.action';
import * as css from './FAQButton.scss';

interface Props {
  openFAQModal?: () => Dispatch<any>
}

class FAQButton extends React.Component<Props> {
  renderRoundButton = () => {
    const { openFAQModal } = this.props

    return (
      <button className={css.roundButton} onClick={openFAQModal}>
        <div className={css.roundButton__line} />
        <div className={css.roundButton__line} />
        <div className={css.roundButton__line} />
      </button>
    )
  }

  renderTextButton = () => {
    const { children, openFAQModal } = this.props

    return (
      <button className={css.button} onClick={openFAQModal}>
        {children}
        <img {...ICONS.learnMore} />
      </button>
    )
  }

  render() {
    const { children } = this.props

    return children ? this.renderTextButton() : this.renderRoundButton()
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  openFAQModal: () => dispatch(openModal(MODALS.FAQ))
})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect(null, mapDispatchToProps, mergeProps)(FAQButton)
