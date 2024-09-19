
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './PostCreator.css';

function PostCreator() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modalHeader = "Create New Post";
  return (
    <div className="PostCreator">
      
      <Button variant="primary" onClick={handleShow}>
        {modalHeader}
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="userForm.ControlInput1">
            <Form.Label>User</Form.Label>
            <Form.Control type="text" placeholder="Garfield" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="topicForm.ControlInput2">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="I Hate Mondays" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contentForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
    </div>
  );
}

export default PostCreator;
