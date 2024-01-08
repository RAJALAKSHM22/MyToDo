import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Page({user,setuser}) {
    let handledelet = (i)=>{
        let newArray=[...user]
        newArray.splice(i,1)
        setuser(newArray)
      }
  return <>
  {
    <div className="row">

    <div className="container-fluid">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Id</th>
            <th>eMail</th>
            <th>Mobile</th>
            <th>Describe</th>                      
          </tr>
        </thead>
        <tbody>
          {
            user.map((e,i)=>{
              return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.Name}</td>
                <td>{e.Id}</td>
                <td>{e.eMail}</td>
                <td>{e.Mobile}</td>
                <td>{e.Describe}</td>
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
  }
  
  </>
}

export default Page





// let handelAdd=()=>{
    
// }
