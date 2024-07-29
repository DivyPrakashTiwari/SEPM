import React from 'react';
import Cocomo from './components/Cocomo';
import './App.css';
const basic_cocomo = {
  Organic: {
    a1: 2.4,
    b1: 1.05,
    a2: 2.5,
    b2: 0.38,
  },
  Semidetached: {
    a1: 3.0,
    b1: 1.12,
    a2: 2.5,
    b2: 0.35,
  },
  Embedded: {
    a1: 3.6,
    b1: 1.2,
    a2: 2.5,
    b2: 0.32,
  },
};

function App() {
  return (
    <div className="App">
      <Cocomo basic_cocomo={basic_cocomo}/>
    </div>
  );
}

export default App;
