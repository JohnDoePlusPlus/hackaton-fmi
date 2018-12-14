import { Router } from '../../../routes';
import * as React from 'react';

export default class Redirect extends React.Component {
  render() {
    Router.replace('/')
    return null
  }
}
