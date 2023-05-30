import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Post_Blog } from '../redux/Action/BlogAction';



const AddBlog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispacth=useDispatch()
    const[image,setImage]=useState("")
    const[title,setTiltle]=useState("")
    const[subject,setSubject]=useState("")
    const handleAdd=()=>{
        dispacth(Post_Blog({image,title,subject}),handleClose())
    }
  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
        Add Blog
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create your own blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image" onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e)=>setTiltle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)} />
      </Form.Group>
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 
    </div>
  )
}

export default AddBlog