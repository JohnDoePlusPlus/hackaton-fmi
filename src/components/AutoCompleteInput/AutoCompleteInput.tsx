import * as React from 'react'
import * as css from './AutoCompleteInput.scss'
import { ICONS } from '../../constants/constants';
import { connect, Dispatch } from 'react-redux';
import { ILocationActionData, IOption, ICampaignOptions, ILocationData } from '../../services/Models/Campaign.interface';
import { CampaignSelectors } from '../../redux/Campaign/Campaign.selectors';
import { addInput, removeInput, saveLocation } from '../../redux/Campaign/Campaign.actions';

interface Props {
  addInput?: (payload: ILocationActionData) => Dispatch<any>
  removeInput?: (payload: ILocationActionData) => Dispatch<any>
  saveLocation?: (payload: ILocationActionData) => Dispatch<any>
  suggestions: string[]
  inputIndex: number
  locationType: string
  value: string
}

interface State {
  searching: boolean
}

class AutoCompleteInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      searching: false
    }
  }

  // componentDidUpdate() {
  //   const { searching } = this.state

  //   if (searching) {
  //     suggestions && suggestions.length ? this.showPanel() : this.hidePanel()
  //   }

  //   this.setState({
  //     searching: false
  //   })

  //   if (this.inputEl) {
  //     this.updateInputField(this.props.value);
  //   }
  // }

  // filterCountrySingle = (event) => {
  //   setTimeout(() => {
  //     const results = this.state.countries.filter((country) => {
  //       return country.toLowerCase().startsWith(event.query.toLowerCase());
  //     });
  //     this.setState({ suggestions: results });
  //   }, 250);
  // }

  saveLocation = (event, index: number) => {
    const { saveLocation, locationType } = this.props

    saveLocation({
      locationType,
      index,
      locationName: event.target.value
    })
  }

  addInput = () => {
    const { addInput, locationType } = this.props

    addInput({ locationType })
  }

  removeInput = (index: number) => {
    const { removeInput, locationType } = this.props

    removeInput({
      locationType,
      index
    })
  }

  render() {
    const { inputIndex, value, locationType } = this.props

    return (
      <div className={css.container}>
        <img {...ICONS.add} />
        <input
          className={css.container__input}
          type="text"
          placeholder={`Enter a ${locationType} name`}
          value={value}
          onChange={event => this.saveLocation(event, inputIndex)}
        />
        <button className={css.container__button} type="button" onClick={() => this.removeInput(inputIndex)}>
          <img {...ICONS.close} />
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  addInput: (payload: ILocationActionData) => dispatch(addInput(payload)),
  saveLocation: (payload: ILocationActionData) => dispatch(saveLocation(payload)),
  removeInput: (payload: ILocationActionData) => dispatch(removeInput(payload))
})

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export default connect(null, mapDispatchToProps, mergeProps)(AutoCompleteInput)
