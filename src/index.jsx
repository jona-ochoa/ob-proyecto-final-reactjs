import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// import {Provider} from 'react-redux'

ReactDom.render(
  <React.StrictMode>
  <App />
	</React.StrictMode>,
	document.getElementById('root'),
);
