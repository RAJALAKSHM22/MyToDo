import React from 'react'
import { useState } from 'react'

import Sidebar from './component/sidebar'
import Dashboard from './component/dashboard'
import Page from './component/Page'


import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Adduser from './component/Adduser'
function App() {

  let[user, setuser]=useState([
    {
      Name:"Raju",
      Id:"@001",
      eMail:"raju@gmail.com",
      Mobile:"9847372546",
      Describe:"In this course, participants will become proficient in methodologies were use. "
    },
    {
      Name:"Ragavi",
      Id:"@002",
      eMail:"ragav@gmail.com",
      Mobile:"7374936003",
      Describe:"We will examine and practice strategies found in typical employment opportunities of the digital era"
    },
    {
      Name:"Kim",
      Id:"@003",
      eMail:"kim@gmail.com",
      Mobile:"7322136003",
      Describe:"“In this course, I’ll learn key techic and application of it. "
    }
    
  ])
  let slots=[
    { isProgress: false,
      title:"Earnings (Monthly)",
      price:"40,000",
      color:"primary",
      icon:"fas fa-calendar fa-2x text-gray-300"
    },
    {isProgress:false ,
      title:"Earnings (Annual)",
      price:"215,000",
      color:"success",
      icon:"fas fa-dollar-sign fa-2x text-gray-300"
   },
    {isProgress:true ,
      title:"Tasks",
      price:"50",
      color:"info",
      icon:"fas fa-clipboard-list fa-2x text-gray-300"
  },
  {isProgress: false,
    title:" Pending Requests",
    price:"18",
    color:"warning",
    icon:"fas fa-comments fa-2x text-gray-300"
  }
    
  ]
  
  return <>

    <BrowserRouter>
        <div id="wrapper">
        {/* <Sidebar/> */}

        {/* <Routes> */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
          <div id="content">
            <div className="container-fluid">
              <Adduser/>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800"><i><b>Dashboard</b></i></h1>
                </div>
                  {/* Page Slot */}
                {/* <div className="row"> 
                  {
                    slots.map((e,i)=>{
                      return <Dashboard slots={e} key={i} />
                    })
                  }
                </div> */}
                  {/* User List */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800"><i>User List</i></h1>
                </div>  
                  {/* User Table  */}
                  <Page user={user} setuser={setuser}/>
                
            </div> 
          </div>
        </div>  
        {/* </Routes> */}
        

        </div>
    </BrowserRouter>
   

  </>
}

export default App