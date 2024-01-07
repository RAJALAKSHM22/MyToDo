import React from 'react'
import Title from './component/Title'
import Sidebar from './component/sidebar'
import Dashboard from './component/dashboard'

function App() {
  return <>
    <div id="wrapper">
    {/* <Title/> */}

    <Sidebar/>
    <Dashboard/>

    </div>

   

  </>
}

export default App