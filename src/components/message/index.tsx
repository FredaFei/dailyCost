import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PropTypes from 'prop-types'
import classes, {createScopedClasses} from '../../utils/classnames'
import {Icon} from '../index'
import './index.scss'

const componentName = 'Message'
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`)

interface IProp extends IStyledProps {
  content: React.ReactNode | string
  duration?: number | undefined
  mode?: string
  onClose?: () => any
}

interface IState {
  visible: boolean
}

class Message extends React.Component<IProp, IState> {
  static displayName = componentName
  static defaultProps = {
    duration: 3
  }
  static propTypes = {
    duration: PropTypes.number,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    mode: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'loading']),
    onClose: PropTypes.func
  }

  constructor(props: IProp) {
    super(props)
    this.state = {
      visible: true
    }
  }

  _timer: any

  componentDidMount() {
    const {duration} = this.props
    if (duration) {
      this._timer = setTimeout(() => {
        this.onCloseClick()
      }, duration * 1000)
    }
  }

  componentWillUnmount() {
    const {_timer} = this
    if (_timer) {
      window.clearTimeout(_timer)
    }
  }

  onCloseClick = () => {
    const {onClose} = this.props
    this.setState(state => ({visible: false}))
    onClose && onClose()
  }

  render() {
    const {visible} = this.state
    const {content, className, style, duration, mode} = this.props
    return (
      visible &&
      ReactDOM.createPortal(
        <div className={classes(sc('wrapper'), className)} style={style}>
          {mode && (
            <span className={sc('icon-type', `${mode}`)}>
              <Icon name={mode}/>
            </span>
          )}
          {content}
          {duration === 0 && (
            <span className={sc('close')} onClick={this.onCloseClick}>
              <Icon name="close"/>
            </span>
          )}
        </div>,
        document.body
      )
    )
  }
}

const message = {
  open(params: IProp) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const {onClose} = params
    const close = () => {
      onClose && onClose()
      ReactDOM.unmountComponentAtNode(div)
      div.remove()
      return true
    }
    const messageInstance = React.createElement(Message, {
      ...params,
      onClose: close
    })
    ReactDOM.render(messageInstance, div)
  }
}
const modeArr = ['info', 'success', 'warning', 'error', 'loading']
modeArr.forEach(mode => {
  message[mode] = (
    content: React.ReactNode | string,
    duration?: number | (() => any),
    onClose?: () => any,
    ...rest: any
  ) => {
    if (typeof duration === 'function') {
      onClose = duration
      duration = undefined
    }
    return message.open({content, duration, mode, onClose, ...rest})
  }
})
export default message
