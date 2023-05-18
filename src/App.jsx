import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css'
import { Layout } from './website/layout'
import { HomePage } from './website/webPage/homePage'


function App() {

  return (
    <React.Fragment>
      <div className="noise"></div>
        <Routes>
           <Route element={<Layout/>}>
              <Route path="/" element={<HomePage/>}/>
           </Route>
        </Routes>

    </React.Fragment>
  )
}

export default App
