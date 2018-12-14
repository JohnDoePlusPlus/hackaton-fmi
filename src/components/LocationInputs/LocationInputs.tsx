import * as React from 'react';
import { connect } from 'react-redux';

import { CampaignSelectors } from '../../redux/Campaign/Campaign.selectors';
import { ICampaignOptions, ILocationData } from '../../services/Models/Campaign.interface';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import * as css from './LocationInputs.scss';

interface Props {
  options?: ICampaignOptions
  locationData?: ILocationData
}

interface State {
  countries: string[]
}

class LocationInputs extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      countries: ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'],
    };
  }

  renderInput = (e, index: number) => {
    const { options, locationData } = this.props
    const { countries } = this.state

    return (
      <AutoCompleteInput
        key={index}
        value={locationData[options.location][index]}
        suggestions={countries}
        inputIndex={index}
        locationType={options.location}
      />)
  }

  render() {
    const { options, locationData } = this.props

    return options.location ? (
      <div className={css.inputs}>
        {locationData[options.location].map(this.renderInput)}
      </div>
    ) : null
  }
}

const mapStateToProps = (state) => ({
  options: CampaignSelectors.getOptions(state),
  locationData: CampaignSelectors.getLocationData(state)
})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect(mapStateToProps, null, mergeProps)(LocationInputs)
