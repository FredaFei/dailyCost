import * as React from 'react';
import classes, { createScopedClasses } from '../../utils/classnames';
import Date2, { IReadonlyDate } from '../../utils/date';
import { range } from '../../utils/collection';
import { ReactNode, useState } from 'react';

const componentName = 'DayPanel';
const sc = createScopedClasses(componentName);

function normalize(n: number, base: number): number {
  if (n < 0) {
    return normalize(n + base, base);
  } else {
    return n;
  }
}

type Panel = 'day' | 'month' | 'year'

interface Props extends StyledProps {
  value?: Date | string
  display: IReadonlyDate
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  extraFooter?: (() => ReactNode)
  onChange?: (date: Date) => void
  onChangePanel?: (panel: Panel) => void
  onChangeDisplay?: (date: Date2) => void
}

const DayPanel: React.FunctionComponent<Props> = props => {
  const [selectedValue] = useState(props.value || props.display.clone);
  const [display, setDisplay] = useState(props.display.clone);

  const onClickDay = (day: Date2) => {
    setDisplay(day);
    props.onChange!(day.toDate());
  };
  const onClickPrevYear = () => {
    setDisplay(display.clone.addYear(-1));
  };
  const onClickPrevMonth = () => {
    setDisplay(display.clone.addMonth(-1));
  };
  const onClickYear = () => {
    props.onChangePanel!('year');
  };
  const onClickMonth = () => {
    props.onChangePanel!('month');
  };
  const onClickNextMonth = () => {
    setDisplay(display.clone.addMonth(+1));
  };
  const onClickNextYear = () => {
    setDisplay(display.clone.addYear(+1));

  };
  const onClickToDay = () => {
    const today = new Date2(new Date());
    setDisplay(today);
    props.onChange!(today.toDate());
  };

  const renderBody = () => {
    return (
      <div className={classes(sc('main'), 'am-datePicker-main')}>
        {renderDays()}
      </div>
    );
  };

  const renderDays = () => {
    const firstDayThisMonth = display.clone.setDay(1);
    const n = firstDayThisMonth.dayOfWeek;
    const delta = normalize(n - props.firstDayOfWeek!, 7);
    const firstDayThisPanel = firstDayThisMonth.addDay(-delta);
    const days = range(0, 5).map(row => (
      <React.Fragment key={firstDayThisMonth.clone.addDay(row * 7).timestamp}>
        {range(0, 6).map(col => {
          const d = firstDayThisPanel.clone.addDay(row * 7 + col);
          const colClasses = {
            'currentMonth': d.month === display.month,
            'isToday': d.isSameDayAs(new Date2(new Date())),
            'selected': d.isSameDayAs(selectedValue as Date2),
            'isSame': d.day === (display as Date2).day
          };
          return (
            <div className={sc('day', colClasses)} onClick={() => onClickDay(d)} key={d.timestamp}>
              <div className={sc('cell')}>{d.day}</div>
            </div>
          );
        })}
      </React.Fragment>
    ));
    return days;
  };

  return <React.Fragment>
    {renderBody()}
  </React.Fragment>;
};
DayPanel.displayName = componentName;
DayPanel.defaultProps = {firstDayOfWeek: 1};

export default DayPanel;
