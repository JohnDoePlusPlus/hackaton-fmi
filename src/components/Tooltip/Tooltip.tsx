import * as React from 'react'
import * as css from './Tooltip.scss'

interface Props {
    parentCss: string
}

export class Tooltip extends React.Component<Props> {
    render() {
        const { parentCss } = this.props
        return (
            <span className={css.tooltip + ' ' + parentCss}>
                Tooltip text
            </span >
        )
    }
}
