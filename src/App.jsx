import React from 'react'
import { useState } from 'react'
import Sidebar from './component/sidebar'
import Dashboard from './component/dashboard'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function App() {

  let[user, setuser]=useState([
    {
      Name:"Raju",
      DoB:"12/03/99",
      eMail:"raju@gmail.com",
      Mobile:"9847372546",
      id:"@01"
    },
    {
      Name:"Ragavi",
      DoB:"15/11/95",
      eMail:"ragav@gmail.com",
      Mobile:"7374936003",
      id:"@02"
    },
    {
      Name:"Kim",
      DoB:"11/08/97",
      eMail:"kim@gmail.com",
      Mobile:"7322136003",
      id:"@03"
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
  let handledelet = (i)=>{
    let newArray=[...user]
    newArray.splice(i,1)
    setuser(newArray)
  }
  return <>
    <div id="wrapper">
    <Sidebar/>

    <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
      <div id="content">
        <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800"><i><b>Dashboard</b></i></h1>
            </div>
              {/* Page Slot */}
            <div className="row"> 
              {
                slots.map((e,i)=>{
                  return <Dashboard slots={e} key={i} />
                })
              }
            </div>
              {/* User List */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800"><i>User List</i></h1>
            </div>  
              {/* User Table  */}
            <div className="row">

              <div className="container-fluid">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>DoB</th>
                      <th>id</th>
                      <th>eMail</th>
                      <th>Mobile</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      user.map((e,i)=>{
                        return <tr key={i}>
                          <td>{i+1}</td>
                          <td>{e.Name}</td>
                          <td>{e.DoB}</td>
                          <td>{e.id}</td>
                          <td>{e.eMail}</td>
                          <td>{e.Mobile}</td>
                          <td>
                            <Button variant="light"> EDIT </Button>
                            &nbsp;
                            &nbsp; 
                            <Button variant="danger" onClick={()=>{
                              handledelet(i)
                            }}> DELET </Button>

                          </td>

                        </tr>
                      })
                    }
                  </tbody>
                </Table> 
                </div>

            </div>  
        </div> 
      </div>
    </div>  
   
    

    </div>

   

  </>
}

export default App