import * as React from 'react'
import {Shift} from '../../schemas'

interface Props {
    className?: string
    shifts: Shift[]
}

interface State {
    shifts: Shift[]
    currentlyEditingShiftId: number
}

export default class ShiftList extends React.Component<Props, State> {}
