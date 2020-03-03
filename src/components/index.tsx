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
export {default as Checkbox} from './checkbox/index'
export {default as ClickOutside} from './clickOutside/index'
export {default as Collapse} from './collapse/collapse'
export {default as Pane} from './collapse/pane'
export {default as Dialog} from './dialog/index'
export {default as Input} from './input/index'
export {default as Radio} from './radio/index'
export {default as Tabs} from './tabs/tabs'
export {default as TabPane} from './tabs/tabPane'
export {default as Popover} from './popover/index'
export {default as message} from './message/index'
export {default as Cell} from './cell/index'
export {default as Footer} from './footer/index'
export {default as Header} from './header/index'
