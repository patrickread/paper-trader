import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var style = {
  position: 'relative',
  overflow: 'hidden'
}

ReactDOM.render(
    <div>
    <App
      style={style} />
  </div>,
  document.getElementById('app')
)
