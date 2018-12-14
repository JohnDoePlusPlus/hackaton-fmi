import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

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
        header
      </header>
    )
  }
}

export default connect(null, null, null)(Header)
