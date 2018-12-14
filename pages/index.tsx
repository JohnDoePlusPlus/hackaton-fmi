import * as React from 'react';

import Header from '../src/components/Header/Header';
import * as css from '../static/index.scss';
import Home from '../src/components/Home/Home'


export default class Index extends React.Component {
  render() {
    return (
      <div className={css.welcomePage}>
        <Home />
      </div>
    )
  }
}
