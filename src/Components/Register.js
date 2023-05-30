import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../redux/Action/UserAction";
const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const handleRegister = () => {
    dispatch(register({ email, pass, name, phone, address }));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2%",
      }}
    >
      <Card style={{ width: "20rem", padding: "2%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
            onChange={(e)=>setPass(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" 
              onChange={(e)=>setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="Number" placeholder="Phone"
            onChange={(e)=>setPhone(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" 
              onChange={(e)=>setAddress(e.target.value)}
            />
          </Form.Group>
        
          <Button variant="primary" onClick={handleRegister}>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
