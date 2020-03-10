import { withStyles } from "@material-ui/core/styles";

export default styles => component =>
  withStyles(styles, { withTheme: false })(component);
