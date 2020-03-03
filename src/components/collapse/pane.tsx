import * as React from 'react'
import classes from '../../utils/classnames'
import './index.scss'

export interface IProps extends IStyledProps {
  header: React.ReactNode
  name: string | number
  active?: boolean
  visibleIcon?: boolean
  disabled?: boolean
}
const componentName = 'Pane'
class Pane extends React.Component<IProps> {
  static displayName = componentName;
  static defaultProps = {
    visibleIcon: true,
    disabled: false,
    active: false
  }
  renderPane = () => {
    const { className, style, children } = this.props
    const styles = Object.assign({}, { ...style })
    const wrapperClasses = classes(['content-inner', className])
    return (
      <div className={wrapperClasses} style={styles}>
        {children}
      </div>
    )
  }
  render() {
    return this.renderPane()
  }
}
export default Pane
