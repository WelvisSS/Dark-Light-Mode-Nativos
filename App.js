import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import themes from './src/themes';

import Home from './src/Home'

export default function App(){
  // dark, light, null
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.background} />
      <Home/>
    </ThemeProvider>
  );

};