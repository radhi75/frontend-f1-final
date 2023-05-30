import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {delete_user, edit_user, get_current} from "../redux/Action/UserAction"
import { Button, Form, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(get_current())
  }, [dispatch])
  const user=useSelector(state=>state.userReducer.user)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispacth=useDispatch()
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const handleEdit=()=>{
    dispacth(edit_user(user._id,{email,name,phone,address}),handleClose())
  }
  const navigate=useNavigate()
  const handleDelete=()=>{
    dispacth(delete_user(user._id,navigate))
  }
  return (
    <div>
    {user.email}
    
    <Button variant="warning" onClick={handleShow}>
       Edit Profile
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
             value={email}
              type="email"
              placeholder="Enter email"
              onChange={(e) =>setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" 
              onChange={(e)=>setName(e.target.value)}
              value={name}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="Number" placeholder="Phone"
            onChange={(e)=>setPhone(e.target.value)}
            value={phone} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" 
              onChange={(e)=>setAddress(e.target.value)}
              value={address}
            />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="danger" onClick={handleDelete}>
       delete Profile
    </Button>
    </div>
  )
}

export default Profile