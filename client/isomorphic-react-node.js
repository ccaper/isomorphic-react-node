import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import HelloWorld from './components/HelloWorld';
import NotFound from './components/NotFound';

const Root = () => (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={HelloWorld} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
);

render(<Root />, document.querySelector('#main'));
