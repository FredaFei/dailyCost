import * as React from 'react'
import classes, { createScopedClasses } from '../../utils/classnames'
import './index.scss'

const componentName = 'Checkbox'
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`)
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean
}
const Index: React.FunctionComponent<IProps> = props => {
  const {
    indeterminate,
    disabled,
    checked,
    children,
    className,
    ...rest
  } = props
  return (
    <label className={classes(sc('wrapper', { disabled, checked }), className)}>
      <span className={sc('signUp.tsx.tsx', { indeterminate })}>
        <input
          type="checkbox"
          className={sc('')}
          checked={checked}
          {...rest}
        />
      </span>
      <span className={sc('label')}>{children}</span>
    </label>
  )
}
Index.displayName = componentName
export default Index
