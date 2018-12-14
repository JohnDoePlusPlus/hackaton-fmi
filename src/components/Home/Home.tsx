import * as React from 'react';
import * as css from './Home.scss';

import Upper from './Upper';
import Down from './Down';
import Layout from '../Layout/Layout';

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div className={css.home} >
          <Upper />
          <Down />
        </div>
      </Layout>
    )
  }
}
