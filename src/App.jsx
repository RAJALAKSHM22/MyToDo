import React from 'react'
import { useState } from 'react'

import Page from './component/Page'

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
  
  
  return <>
    
        <div id="wrapper">
        
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
          <div id="content">
            <div className="container-fluid">
              <Adduser/>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800"><i><b>Dashboard</b></i></h1>
                </div>
                  
                  {/* User List */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800"><i>User List</i></h1>
                </div>  
                  {/* User Table  */}
                  <Page user={user} setuser={setuser}/>
                
            </div> 
          </div>
        </div>         

        </div>
    
   

  </>
}

export default App