import * as React from 'react';

import * as css from '../static/index.scss';
import {Course} from '../src/components/Course/Course';
import Layout from '../src/components/Layout/Layout';


export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Course />
      </Layout>
    )
  }
}
