import * as React from 'react';
import { createScopedClasses } from '@/utils/classnames';

import './index.scss';
import { Fragment } from 'react';
import Icon from '@/components/icon';
import Input from '@/components/input';

const componentName = 'recorder';
const sc = createScopedClasses(componentName);

interface NoteProps {
  note: string
  date: Date
  open: () => void
  onChange: (value: string) => void
}

const Note: React.FunctionComponent<NoteProps> = props => {
  const onChangeInput = (e: React.FormEvent) => {
    props.onChange((e.target as HTMLInputElement).value)
  }
  const current = new Date(props.date).toLocaleDateString()
  const isToday = () => {
    const today = new Date().toLocaleDateString()
    return current === today
  }
  return <div className={sc('calculate-date-top')}>
    <div className="left">
      <label><Icon name="right"/>备注</label>
      <Input value={props.note} placeholder="点击写备注..." onChange={onChangeInput}/>
    </div>
    <div className="right" onClick={props.open}>
      {isToday() ? <Fragment><Icon name="right"/><label>今天</label></Fragment> : current}
    </div>
  </div>
}

export default Note;
