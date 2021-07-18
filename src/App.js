import logo from './logo.svg';
import './App.css';
import ListElement from './ListElement';
import React, { useEffect } from 'react';
import { getAllPayloads } from './redux/ducks/payloads'
import { useDispatch, useSelector} from 'react-redux'

import { ThemeProvider, createTheme, Arwes } from 'arwes'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPayloads())
  }, [dispatch]);


  const payloads = useSelector((state) => state.payload.payloads);
  
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
    <div className="ListView">
      <ul> List of SpaceX Assets 
        {payloads && payloads.map((payload) => {
          return <li> {payload.name} </li>
        })}
      </ul>
    </div>
    </Arwes>
    </ThemeProvider>
  );
}

export default App;
