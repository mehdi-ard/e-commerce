import React from 'react';
import CoreIconButton from '@material-ui/core/IconButton';

function IconButton({ children, ...props }) {
  return <CoreIconButton {...props}>{children}</CoreIconButton>;
}

export default IconButton;
