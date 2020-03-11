import * as React from 'react';
import classes, { createScopedClasses } from '../../utils/classnames';
import './importSvgs';
import './index.scss';

interface Props extends IStyledProps {
  name: string
  rotate?: number
  spin?: boolean
  hasBackground?: boolean
  onClick?: () => void
}

const componentName = 'Icon';
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`);

const Icon: React.FunctionComponent<Props> = props => {
  const {name, style, rotate, spin, className, hasBackground, onClick, ...rest} = props;
  const wrapClasses = classes(sc('', {'spin': spin || name === 'loading'}), className);
  const styles = Object.assign(
    {},
    style,
    rotate && {
      transform: `rotate(${rotate}deg)`,
      transition: `transform .2s ease`
    }
  );
  const renderIcon = () => <svg className={wrapClasses} style={styles} onClick={onClick} {...rest}>
    <use xlinkHref={`#${name}`}/>
  </svg>;
  const renderBackground = () => {
    return <div className={sc('background')}>
      {renderIcon()}
    </div>;
  };
  return (
    hasBackground! ? renderBackground() : renderIcon()
  );
};
Icon.displayName = componentName;
Icon.defaultProps = {
  hasBackground: false
};
export default Icon;
