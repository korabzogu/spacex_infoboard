import logo from './logo.svg';
import './App.css';
import AssetList from './AssetList';
import React, { useEffect } from 'react';
import { getAllPayloads } from './redux/ducks/payloads'
import { getAllStarlink } from './redux/ducks/starlink'
import { useDispatch, useSelector} from 'react-redux'

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
  /*
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
    <div className="ListView">
      <ul> List of Payloads 
        {payloads && payloads.map((payload) => {
          return <li> {payload.name} </li>
        })}
      </ul>
    </div>

    <div className="ListView">
      <ul> List of Starlinks
        {starlink && starlink.map((e) => {
          return <li> {e.spaceTrack.OBJECT_NAME} </li>
        })}
      </ul>
    </div>
    

    </Arwes>
    </ThemeProvider>
  );
  */
}

export default App;
