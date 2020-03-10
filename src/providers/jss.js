import React from 'react';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import jssPluginCompose from 'jss-plugin-compose';

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginCompose()]
});

function Jss(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

export default Jss;
