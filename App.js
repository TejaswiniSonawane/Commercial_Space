import React from 'react';
import AppContainer from './src/config/routes';
import {DimensionProvider} from './src/hooks/DimensionProvider';
import {ThemeProvider} from './src/Provider/ThemeProvider';
import {Theme} from './src/constants';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <DimensionProvider>
        <ThemeProvider theme={Theme}>
          <AppContainer />
        </ThemeProvider>
      </DimensionProvider>
    </PaperProvider>
  );
};

export default App;
