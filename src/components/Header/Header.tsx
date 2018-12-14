import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { ICONS, MODALS } from '../../constants/constants';
import { openModal } from '../../redux/Modals/Modals.action';
import FAQButton from '../FAQButton/FAQButton';
import { HeaderButton } from '../HeaderButton/HeaderButton';
import Modal from '../Modal/Modal';
import * as css from './Header.scss';

interface Props {
  openResetModal?: () => Dispatch<any>
  isWelcomePage?: boolean
  currentStep?: string
}

class Header extends React.Component<Props> {
  render() {
    const { isWelcomePage, openResetModal, currentStep } = this.props

    return (
      <header className={css.header}>
        <img className={css.header__logo} {...ICONS.logo} />
        <h5 className={css.header__text}>Cosmonauts & Kings</h5>
        <div className={css.header__buttons}>
          {isWelcomePage ? <FAQButton /> :
            <HeaderButton onClick={openResetModal}>RESET</HeaderButton>
          }
        </div>
        <Modal />
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  openResetModal: () => dispatch(openModal(MODALS.reset))
})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect(null, mapDispatchToProps, mergeProps)(Header)
