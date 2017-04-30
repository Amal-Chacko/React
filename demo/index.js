import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './../src/index';
import './style.scss';

ReactDOM.render((
	<div>
		<h1 className='header-container'>React Component Preview</h1>
		<MyComponent />
	</div>
), document.getElementById('root'))
