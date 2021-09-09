import React from 'react';
// import styled from 'styled-components';
//component

import Header from './components/Header';
import Home from './components/Home';

//Styles
import {GlobalStyle} from './GlobalStyle';


// const Room= styled.div'
//   position: relative;
//   height: 500px;
//   width: 500px;
//   border: 10px solid-black;

// ';
function App() {

  return (
    // (Room)
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
      <h1>Hey Use this</h1>
    </div>
  );
}

export default App;
