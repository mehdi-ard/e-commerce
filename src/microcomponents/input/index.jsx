import React from 'react';
import CoreTextField from '@material-ui/core/TextField';
import style from 'providers/style';

const styles = style(theme => ({
  root: {
    '& p': {
      margin: 0,
      marginTop: theme.spacing(1)
    }
  }
}));
/**
 * @description Input
 * @see https://material-ui.com/api/input/
 */
function Input({ classes, className, ...props }) {
  return (
    <CoreTextField className={[classes.root, className].join(' ')} {...props} />
  );
}

export default styles(Input);
