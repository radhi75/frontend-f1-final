import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Edit_Blog } from '../redux/Action/BlogAction';


const EditBlog = ({el}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispacth=useDispatch()
    const[image,setImage]=useState(el.image)
    const[title,setTiltle]=useState(el.title)
    const[subject,setSubject]=useState(el.subject)
    const handleEdit=()=>{
        dispacth(Edit_Blog(el._id,{image,title,subject}),handleClose())
    }
  return (
    <div>
    <Button variant="warning" onClick={handleShow}>
       Edit Blog
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image" onChange={(e)=>setImage(e.target.value)} value={image}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e)=>setTiltle(e.target.value)} value={title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)} value={subject} />
      </Form.Group>
  
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
 
    </div>
  )
}

export default EditBlog