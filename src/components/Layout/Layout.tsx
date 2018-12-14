import { withRouter } from 'next/router';
import * as React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import * as css from './Layout.scss';

interface Props {
  router: {
    query: {
      step: string
    }
  }
}

class Layout extends React.Component<Props> {
  render() {
    const { children, router } = this.props
    return (
      <div className={css.layout}>
        <Header currentStep={router.query.step} />
        <main className={css.layout__main}>
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Layout)
