import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { login } from '../redux/Action/UserAction';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const navigate=useNavigate()
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"2%"}}>
    <Card style={{ width: '20rem',padding:"2%"}}>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  
           onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
         onChange={(e) => setPass(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={()=>dispatch(login({email,pass},navigate))}>
        Submit
      </Button>
    </Form>
    </Card>
    </div>
  )
}

export default Login