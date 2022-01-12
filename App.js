import React from 'react';
import { StatusBar, useColorScheme, Switch } from 'react-native';

import { ThemeProvider } from 'styled-components';

import themes from './src/themes';

import Home from './src/Home'

import { Container } from './src/Home/styles'

export default function App() {
  // dark, light, null
  const deviceTheme = useColorScheme();
  const [initialTheme, setInitialTheme] = React.useState(deviceTheme == 'light' ? false : true);

  const theme = initialTheme ? themes.dark : themes.light

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.background} />
      <Container>
        <Home initialTheme={initialTheme} />
        <Switch
          onValueChange={() => setInitialTheme(!initialTheme)}
          value={initialTheme}
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
        />
      </Container>
    </ThemeProvider>
  );

};