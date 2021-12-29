import React from 'react';
import { StatusBar, useColorScheme, Switch } from 'react-native';

import { ThemeProvider } from 'styled-components';

import themes from './src/themes';

import Home from './src/Home'

export default function App(){
  // dark, light, null
  const deviceTheme = useColorScheme();
  const [dark, setDark] = React.useState(deviceTheme == 'light'? false : true);

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.background} />
      <Home/>
      <Switch 
        onValueChange={() => setDark(!dark)}
        value={dark}
      />
    </ThemeProvider>
  );

};