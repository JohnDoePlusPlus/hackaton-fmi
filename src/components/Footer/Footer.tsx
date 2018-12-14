import { withRouter } from 'next/router';
import * as React from 'react';

import Buttons from '../Buttons/Buttons';
import * as css from './Footer.scss';

interface Props {
  router: {
    query: {
      step: string
    }
  }
}

class Footer extends React.Component<Props> {
  render() {
    const { step } = this.props.router.query

    return (
      <footer className={css.footer}>
        <Buttons currentStep={step} />
      </footer>
    )
  }
}

export default withRouter(Footer)
