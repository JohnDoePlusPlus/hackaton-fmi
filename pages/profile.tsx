import * as React from 'react';

import {Profile} from '../src/components/Profile/Profile';

import Layout from '../src/components/Layout/Layout';


export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Profile />
      </Layout>
    )
  }
}
