import style from './providers/style';
import './assets/fonts/font.css';

const styles = theme => ({
  '@global': {
    body: {
      fontFamily: theme.typography.fontFamily
    }
  },
  app: {
    // display: 'flex',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      fontFamily: theme.typography.fontFamily
    }
  },
  toolbarGap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: `0 ${theme.spacing(1)}`,
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    maxWidth: '1280px',
    margin: '0 auto',
    marginTop: theme.spacing(3),
    fontFamily: theme.typography.fontFamily
  }
});

export default style(styles);
