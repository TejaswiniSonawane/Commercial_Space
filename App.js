import React from 'react';
import AppContainer from './src/config/routes';
import {DimensionProvider} from './src/hooks/DimensionProvider';
import {ThemeProvider} from './src/Provider/ThemeProvider';
import {Theme} from './src/constants';
import {Provider as PaperProvider} from 'react-native-paper';
import axios from 'axios';
export const BASE_URL = 'https://www.singapore-commercialspace.com/Webservice/';
axios.defaults.baseURL =
  'https://www.singapore-commercialspace.com/Webservice/';

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
