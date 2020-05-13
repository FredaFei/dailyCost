import * as React from 'react';

interface ContextType {
  state: any
  dispatch: React.Dispatch<any>
}

const initState = { state: null, dispatch: () => null }
export default React.createContext<ContextType>(initState);
