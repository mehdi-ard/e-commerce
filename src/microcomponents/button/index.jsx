import React from 'react';
import CoreButton from '@material-ui/core/Button';
import style from 'providers/style';

const styles = style(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

/**
 * @description Button
 * @see https://material-ui.com/api/button/
 */
function Button({ className, classes, ...props }) {
  return (
    <CoreButton className={[classes.button, className].join(' ')} {...props}>
      {props.children}
    </CoreButton>
  );
}

export default styles(Button);
