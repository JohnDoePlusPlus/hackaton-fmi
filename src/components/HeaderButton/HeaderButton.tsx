import * as React from 'react';
import { Dispatch } from 'react-redux';

import { ICONS } from '../../constants/constants';
import * as css from './HeaderButton.scss';

interface Props {
  onClick: () => Dispatch<any>
}

export class HeaderButton extends React.Component<Props> {
  render() {
    const { children, onClick } = this.props

    return (
      <button className={css.button} onClick={onClick}>
        <img {...ICONS.reset} />
        <span className={css.button__text}>
          {children}
        </span>
      </button>
    )
  }
}
