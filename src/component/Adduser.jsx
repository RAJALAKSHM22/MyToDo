import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Adduser({user, setuser}) {
    let[Name,setName]=useState('')
    let[id,setid]=useState('')
    let[eMail,seteMail]=useState('')
    let[Mobile,setMobile]=useState('')
    let[Describe,setDescribe]=useState('')
let navigate =useNavigate()
    const handleAdd=()=>{

        let newArray=[...user]
        newArray.push({
            Name,
            id,
            eMail,
            Mobile,
            Describe
        })
        setuser(newArray)
        navigate('/Page')
    }

  return <>
        {
            <div id="content">
                <div className="container-fluid">
                    
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800"><i><b>ADD USER</b></i></h1>
                    </div>
                    <div className='row'>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="User Name" onChange={(e)=>
                                    setName(e.target.value)}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>id</Form.Label>
                                <Form.Control type="text" placeholder="User Id"onChange={(e)=>
                                    setid(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>e-Mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>
                                    seteMail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mobile No.</Form.Label>
                                <Form.Control type="number" placeholder="contect No." onChange={(e)=>
                                    setMobile(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="comment" onChange={(e)=>
                                    setDescribe(e.target.value)}/>
                            </Form.Group>

                        <Button variant="primary" onClick={()=>handleAdd}>
                            Add
                        </Button>
                        </Form>

                    </div>
                    
                </div>
            </div>
        }   
  </>
}

export default Adduser