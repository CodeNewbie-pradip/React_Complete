import React, { useState, useEffect } from 'react'
import './App.css'
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './ClockSlogan';
import CurrentTime from './components/CurrentTime';

function App() {
  return (
    <center>
      <ClockSlogan/>
      <ClockHeading/>
      <CurrentTime/>
    </center>
  );
}

export default App
