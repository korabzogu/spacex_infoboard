import './App.css';
import AssetList from './AssetList';
import React from 'react';

import { ArwesThemeProvider, StylesBaseline } from '@arwes/core'
import { createTheme } from '@arwes/design';


function App() {
  const theme=createTheme()


  return (
    <ArwesThemeProvider theme={theme}>
      <StylesBaseline />
      <AssetList />
    </ArwesThemeProvider>

  )
}

export default App;
