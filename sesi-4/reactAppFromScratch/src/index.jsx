import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// get div with root id on index.html file
const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(<App/>)

