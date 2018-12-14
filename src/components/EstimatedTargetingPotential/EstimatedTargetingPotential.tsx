import * as React from 'react';

import { ICONS } from '../../constants/constants';
import { TARGETING_POTENTIAL_TEXT } from '../../constants/texts';
import * as css from './EstimatedTargetingPotential.scss';

interface Props { }

export class EstimatedTargetingPotential extends React.Component<Props> {
  render() {
    return (
      <p className={css.targetingPotential}>
        {TARGETING_POTENTIAL_TEXT}<br />
        <span>1.250.400 - 1.820.100(not working yet!)</span>
        <img {...ICONS.targetingPeople} />
      </p>
    )
  }
}
