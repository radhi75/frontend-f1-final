import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Delete_Blog } from '../redux/Action/BlogAction';
import { Modal } from 'react-bootstrap';
import EditBlog from './EditBlog';
const BlogCard = ({el}) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token=localStorage.getItem("token")
    return (
    <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.image} />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
       {el.subject}
      </Card.Text>
      {token && (
<div>
<Button variant="danger" onClick={handleShow}>
        delete
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
       Are you sure you want to delete this blog
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(Delete_Blog(el._id))}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <EditBlog el={el}/>
</div>
      )}
      
    </Card.Body>
  </Card>
  </div>
  )
}

export default BlogCard