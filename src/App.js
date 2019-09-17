import React from 'react';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' exact component={ View1 } />
      <Route path='/example' exact component={ View2 } />
      <Route path='/Link3' exact component={ View3 } />
    </Router>
  );
}

export default App;
