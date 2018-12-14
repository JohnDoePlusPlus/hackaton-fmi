import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { SETTING_UP_OPTIONS_DATA, STEPS } from '../../constants/constants';
import { handleOptions } from '../../redux/Campaign/Campaign.actions';
import { CampaignSelectors } from '../../redux/Campaign/Campaign.selectors';
import { ICampaignOptions, IHandleOptionsData, IRadioBody } from '../../services/Models/Campaign.interface';
import LocationInputs from '../LocationInputs/LocationInputs';
import * as css from './Radios.scss';

interface Props {
  handleOptions?: (payload: IHandleOptionsData) => Dispatch<any>
  currentStep: string
  options?: ICampaignOptions
}

class Radios extends React.Component<Props> {
  saveRadioOption = (value: string) => {
    const { currentStep, handleOptions } = this.props

    handleOptions({ currentStep, value })
  }

  renderRadio = (radioData: IRadioBody, index: number) => {
    const { options, currentStep } = this.props
    return (
      <label
        key={index}
        className={css.radiosContainer__checkMarks__label}
      >
        <img className={css.radiosContainer__checkMarks__label__svg} {...radioData.svg} width={30} height={30} />
        <input
          className={css.radiosContainer__checkMarks__label__input}
          type="radio"
          name="radio"
          checked={options[currentStep] === radioData.value}
          onChange={() => this.saveRadioOption(radioData.value)}
        />
        <span className={css.radiosContainer__checkMarks__label__checkMark}></span>
        <span>{radioData.label}</span>
      </label>
    )
  }

  render() {
    const { currentStep } = this.props

    return (
      <form className={css.radiosContainer}>
        {SETTING_UP_OPTIONS_DATA[currentStep].map(this.renderRadio)}
        {currentStep === STEPS.location ? <LocationInputs /> : null}
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  options: CampaignSelectors.getOptions(state)
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleOptions: (payload: IHandleOptionsData) => dispatch(handleOptions(payload))
})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Radios)
