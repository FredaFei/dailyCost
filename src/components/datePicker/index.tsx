import * as React from 'react'
import ReactDOM from 'react-dom'
import classes, { createScopedClasses } from 'utils/classnames'
import DayPanel from './dayPanel';
import MonthPanel from './monthPanel';
import YearPanel from './yearPanel';
import Date2, { IReadonlyDate } from 'utils/date';

import './index.scss'
import { ReactNode, useEffect, useRef, useState } from 'react';

const componentName = 'DatePicker'
const sc = createScopedClasses('component-datePicker')

interface Props extends StyledProps {
  visible: boolean
  value?: Date | string
  disabled?: Boolean
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  onChange?: (date: Date | string) => void
  extraFooter?: (() => ReactNode)
}

type Panel = 'day' | 'month' | 'year'

const DatePicker: React.FunctionComponent<Props> = props => {
  const [display, setDisplay] = useState<IReadonlyDate>(new Date2(new Date()).clone)
  const [displayPanel, setDisplayPanel] = useState<Panel>('day')
  const refDiv = useRef<HTMLDivElement>(null)

  const isDatepickerRef = useRef(false)
  useEffect(() => {
    const date2Value = 'value' in props ? new Date2(props.value).clone : new Date2(new Date()).clone
    setDisplay(date2Value as IReadonlyDate)
    return bindEvents()
  }, [])
  const bindEvents = () => {
    isDatepickerRef.current = true
    document.addEventListener('selectstart', onSelect)
    return () => {
      document.removeEventListener('selectstart', onSelect)
    }
  }
  const onSelect = (e: Event) => {
    if (isDatepickerRef.current) {e.preventDefault()}
  }
  const onChange = (date: Date) => {
    onChangeDisplay(new Date2(date))
    props.onChange && props.onChange(date)
  }
  const onChangeDisplay = (display: Date2) => {
    setDisplay(display)
  }
  const onChangePanel = (displayPanel: Panel) => {
    setDisplayPanel(displayPanel)
  }
  const renderDatePicker = () => {
    return (
      <div className={sc('body')} ref={refDiv}>
        {displayPanel === 'day' ?
          <DayPanel value={props.value}
                    display={display}
                    firstDayOfWeek={props.firstDayOfWeek}
                    onChange={onChange}
                    onChangePanel={onChangePanel}
                    extraFooter={props.extraFooter}
                    onChangeDisplay={onChangeDisplay}/> : displayPanel === 'month' ?
            <MonthPanel display={display}
                        onChangePanel={onChangePanel}
                        onChangeDisplay={onChangeDisplay}/> : <YearPanel display={display}
                                                                         onChangePanel={onChangePanel}
                                                                         onChangeDisplay={onChangeDisplay}/>}
      </div>
    )
  }

  return props.visible ?
    ReactDOM.createPortal(
      <div className={classes(sc('wrapper', { disabled: props.disabled }), props.className)} style={props.style}>
        <div className={sc('mask')}></div>
        {renderDatePicker()}
      </div>,
      document.body
    ) : null
}

DatePicker.displayName = componentName
DatePicker.defaultProps = {
  firstDayOfWeek: 1,
  disabled: false,
}

export default DatePicker
