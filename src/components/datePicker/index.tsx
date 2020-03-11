import * as React from 'react';
import classes, { createScopedClasses } from '../../utils/classnames';
import './index.scss';
import Date2 from '../../utils/date';
import DayPanel from './dayPanel';
import MonthPanel from './monthPanel';
import YearPanel from './yearPanel';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props extends IStyledProps {
  value?: Date | string
  visible?: boolean
  onClick?: () => void
  onChange?: (date: Date | string) => void
}

type Panel = 'day' | 'month' | 'year'
const componentName = 'DatePicker';
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`);

const DatePicker: React.FunctionComponent<Props> = props => {
  const {className, onChange, ...rest} = props;
  const [display, setDisplay] = useState();
  const [displayPanel, setDisplayPanel] = useState<Panel>('day');
  const [open, _setOpen] = useState<boolean>(false);
  const [formattedValue, setFormattedValue] = useState('');
  const refDiv = useRef<HTMLDivElement>(null);

  const isDatepickerRef = useRef(false);
  useEffect(() => {
    console.log(props.visible);
    const date2Value = 'value' in props ? new Date2(props.value).clone : new Date2(new Date()).clone;
    setDisplay(date2Value);
    setFormattedValue('value' in props ? date2Value.toDateString() : '');
    setOpen('visible' in props ? props.visible as boolean : false);

  }, []);

  const onChange = (date: Date) => {
    onChangeDisplay(new Date2(date));
    setFormattedValue(new Date2(date).toDateString());
    props.onChange && props.onChange(date);
    close();
  };
  const onChangeDisplay = (display: Date2) => {
    setDisplay(display);
  };
  const onClick = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  const setOpen = (open: boolean) => {
    // if (!props.visible) {return;}
    _setOpen(open);
  };
  const onChangePanel = (displayPanel: Panel) => {
    setDisplayPanel(displayPanel);
  };
  const renderDatePicker = () => {
    return <div className={sc('body')} ref={refDiv}>
      {displayPanel === 'day' ?
        <DayPanel value={props.value}
                  display={display}
                  onChange={onChange}
                  onChangePanel={onChangePanel}
                  onChangeDisplay={onChangeDisplay}/> : displayPanel === 'month' ?
          <MonthPanel display={display}
                      onChangePanel={onChangePanel}
                      onChangeDisplay={onChangeDisplay}/> : <YearPanel display={display}
                                                                       onChangePanel={onChangePanel}
                                                                       onChangeDisplay={onChangeDisplay}/>}
    </div>;
  };

  return open &&
    ReactDOM.createPortal(<div className={classes(sc('content'), className)} {...rest}>
        <div className={sc('mask')}></div>
        <div className={sc('')}>{renderDatePicker()}</div>
      </div>,
      document.body
    );
};
DatePicker.displayName = componentName;
DatePicker.defaultProps = {
  visible: false
};
export default DatePicker;
