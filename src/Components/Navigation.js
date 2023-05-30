import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import AddBlog from './AddBlog';
import { Button } from 'react-bootstrap';


const Navigation = () => {
  const token=localStorage.getItem("token")
  const navigate=useNavigate()
  const handleLogout=()=>{
   localStorage.removeItem("token")
   navigate("/login")
  }
  return (
    <div>
    {!token ? <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/" >Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      </Nav>
    </Container>
  </Navbar>: <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/" >Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
        <Button variant="warning" onClick={handleLogout} >
            LogOut
        </Button>
        <AddBlog/>
      </Nav>
    </Container>
  </Navbar>}
  </div>
  )
}

export default Navigation