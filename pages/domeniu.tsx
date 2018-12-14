import * as React from 'react';

import * as css from '../static/index.scss';
import Domeniu from '../src/components/Domeniu/Domeniu'
import Layout from '../src/components/Layout/Layout';


export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Domeniu />
      </Layout>
    )
  }
}
