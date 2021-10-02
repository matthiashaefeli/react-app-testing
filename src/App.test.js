// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hi there!/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);

  expect(div.innerHTML).toContain('Hi there!');

  ReactDom.unmountComponentAtNode(div)
})
