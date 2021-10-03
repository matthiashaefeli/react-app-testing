import React from 'react';
import reactDom from 'react-dom';
import Root from 'Root';
import App from 'components/App';

reactDom.render(
  <Root>
    <App />
  </Root>
  , document.querySelector('#root')
);