import React from "react";
import CoreBadge from "@material-ui/core/Badge";
import style from "providers/style";

const styles = style(theme => ({
  margin: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(3)
  }
}));

/**
 * @description Badge
 * @see https://material-ui.com/api/badge/
 */

function Badge({ classes, children, ...props }) {
  return (
    <CoreBadge className={classes.margin} {...props}>
      {children}
    </CoreBadge>
  );
}

export default styles(Badge);
