import React from 'react'
import ReactDOM from 'react-dom'
import './Style/stylesheet.css'
import App from './Components/App'
import Main from './Components/Main'
import { BrowserRouter } from 'react-router-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
    
// );
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


