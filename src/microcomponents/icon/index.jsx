import React from 'react';
import style from 'providers/style';
import CoreIcon from '@material-ui/core/Icon';
import './assests/font-icon.css';

const styles = style(theme => ({
  icon: {
    // margin: theme.spacing(2)
  }
}));

/**
 * @description icon
 * @see https://material-ui.com/api/icon/
 */
function Icon({ className, classes, ...props }) {
  return (
    <CoreIcon className={[classes.icon, className].join(' ')} {...props}>
      {props.children}
    </CoreIcon>
  );
}

export default styles(Icon);
