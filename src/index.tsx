import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from './app'

import 'styles/common.scss'

declare global {
  interface StyledProps {
    className?: string
    style?: React.CSSProperties
  }
}

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>, document.getElementById('root'))
