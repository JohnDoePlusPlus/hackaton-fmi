import { withRouter } from 'next/router';
import * as React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import * as css from './Layout.scss';

interface Props {
}

export default class Layout extends React.Component<Props> {
  render() {
    const { children } = this.props
    return (
      <div className={css.layout}>
        <Header />
        <main className={css.layout__main}>
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}
