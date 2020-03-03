import * as React from "react";
import classes, {createScopedClasses} from '@/utils/classnames'

const sc = createScopedClasses('404')

const NotFound = () => {
  return (
    <div className={classes(sc(''))}>
      404 not found
    </div>
  );
}
export default NotFound
