import * as React from 'react';

import { STEPS_TEXTS } from '../../constants/texts';
import * as css from './Title.scss';

interface Props {
  currentStep: string
}

export class Title extends React.Component<Props> {
  render() {
    const { currentStep } = this.props
    return (
      <h1 className={css.header}>{STEPS_TEXTS[currentStep] && STEPS_TEXTS[currentStep].title}</h1>
    )
  }
}
