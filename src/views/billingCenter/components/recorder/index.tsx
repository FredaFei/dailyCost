import * as React from 'react';
import { createScopedClasses } from '@/utils/classnames';
import DatePicker from '@/components/datePicker';
import Calculate from '@/components/calculate';

import './index.scss';
import { useState } from 'react';
import Note from './note';

const componentName = 'recorder';
const sc = createScopedClasses(componentName);


interface RecorderProps {
  visible: boolean
  item?: {}
  onClose: () => void
}

const Recorder: React.FunctionComponent<RecorderProps> = props => {
  const [note, setNote] = useState('')
  const [date, setDate] = useState(new Date())
  const [visibleDatePicker, setVisibleDatePicker] = useState(false)

  const onChangeInput = (value: string) => {
    setNote(value)
  }
  const openDatePicker = () => {
    setVisibleDatePicker(true)
  }
  const onClose = () => {
    setVisibleDatePicker(false)
  }
  const onChangeDate = (value: Date | string) => {
    console.log(new Date(value).toLocaleDateString());
    setDate(new Date(value))
    onClose()
  }
  const onAddRecord = () => {
    //  ajax
    props.onClose()
  }
  return props.visible ? <div className={sc('calculate-date-content')}>
    <Note note={note} open={openDatePicker} onChange={onChangeInput} date={date}/>
    <Calculate onAdd={onAddRecord}/>
    <DatePicker value={date} onChange={onChangeDate} style={{ zIndex: 999 }} visible={visibleDatePicker}/>
  </div> : null;
};

export default Recorder;
