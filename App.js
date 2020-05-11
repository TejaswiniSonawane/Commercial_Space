import React from 'react';
import AppContainer from './src/config/routes';
import {DimensionProvider} from './src/hooks/DimensionProvider';
import {ThemeProvider} from './src/Provider/ThemeProvider';
import {Theme} from './src/constants';

const App = () => {
  return (
    <DimensionProvider>
      <ThemeProvider theme={Theme}>
        <AppContainer />
      </ThemeProvider>
    </DimensionProvider>
  );
};

export default App;
