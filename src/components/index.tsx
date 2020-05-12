import * as React from 'react'
import '../styles/reset.scss'

declare global {
    interface IStyledProps {
        className?: string
        style?: React.CSSProperties
    }
    type ClassValue =
        | string
        | string[]
        | { [k: string]: any }
        | undefined
        | null
        | false
}

export {default as Button} from './button/button'
export {default as ButtonGroup} from './button/buttonGroup'
export {default as Icon} from './icon/index'
export {default as ClickOutside} from './clickOutside/index'
export {default as Dialog} from './dialog/index'
export {default as Input} from './input/index'
export {default as Radio} from './radio/index'
export {default as Popover} from './popover/index'
export {default as DatePicker} from './datePicker/index'
export {default as message} from './message/index'
export {default as Footer} from './footer/index'
export {default as Header} from './header/index'
