import * as moment from 'moment'
import { SingleDatePicker, OrientationShape, AnchorDirectionShape } from 'react-dates'
import * as React from 'react'

interface Props {
    // REQUIRED props
    date: moment.Moment | null,
    onDateChange: (date: moment.Moment | null) => void,

    // !! We remove these two from the list of required props, because we handle them in this wrapper class.
    // focused: boolean,
    // onFocusChange: (arg: { focused: boolean | null }) => void,

    id: string,

    // input related props
    placeholder?: string,
    disabled?: boolean,
    required?: boolean,
    readOnly?: boolean,
    screenReaderInputMessage?: string,
    showClearDate?: boolean,
    customCloseIcon?: string | JSX.Element,
    showDefaultInputIcon?: boolean,
    customInputIcon?: string | JSX.Element,

    // calendar presentation and interaction related props
    orientation?: OrientationShape,
    anchorDirection?: AnchorDirectionShape,
    horizontalMargin?: number,
    withPortal?: boolean,
    withFullScreenPortal?: boolean,
    initialVisibleMonth?: () => moment.Moment,
    numberOfMonths?: number,
    keepOpenOnDateSelect?: boolean,
    reopenPickerOnClearDates?: boolean,
    renderCalendarInfo?: () => (string | JSX.Element),
    hideKeyboardShortcutsPanel?: boolean,
    isRTL?: boolean,

    // navigation related props
    navPrev?: string | JSX.Element,
    navNext?: string | JSX.Element,
    onPrevMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
    onNextMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
    onClose?: (final: { startDate: moment.Moment, endDate: moment.Moment }) => void,

    // day presentation and interaction related props
    renderDay?: (day: moment.Moment) => (string | JSX.Element),
    enableOutsideDays?: boolean,
    isDayBlocked?: (day: any) => boolean,
    isOutsideRange?: (day: any) => boolean,
    isDayHighlighted?: (day: any) => boolean,

    // internationalization props
    displayFormat?: (string | (() => string)),
    monthFormat?: string,
    phrases?: {
        closeDatePicker: string,
        clearDate: string,
        jumpToPrevMonth: string,
        jumpToNextMonth: string,
        keyboardShortcuts: string,
        showKeyboardShortcutsPanel: string,
        hideKeyboardShortcutsPanel: string,
        openThisPanel: string,
        enterKey: string,
        leftArrowRightArrow: string,
        upArrowDownArrow: string,
        pageUpPageDown: string,
        homeEnd: string,
        escape: string,
        questionMark: string,
        selectFocusedDate: string,
        moveFocusByOneDay: string,
        moveFocusByOneWeek: string,
        moveFocusByOneMonth: string,
        moveFocustoStartAndEndOfWeek: string,
        returnFocusToInput: string,
        keyboardNavigationInstructions: string,

        chooseAvailableDate: (date: string) => string,
        dateIsUnavailable: (date: string) => string,
    },
}

interface State {
    isFocused: boolean
}

export default class SingleDatePickerFocusContainer extends React.Component<Props, State> {}
