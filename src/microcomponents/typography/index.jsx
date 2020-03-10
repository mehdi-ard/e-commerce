import React from 'react';
import CoreTypography from '@material-ui/core/Typography';

/**
 * @description typography
 * @see https://material-ui.com/api/typography/
 */

function Typography({ children, ...props }) {
  return <CoreTypography {...props}>{children}</CoreTypography>;
}

export default Typography;
