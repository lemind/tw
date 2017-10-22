import React from 'react';
import { render } from 'react-dom';

const renderApp = () => (
  render(
    <div>
      Test
    </div>,
    document.getElementById('app')
  )
);

renderApp();
