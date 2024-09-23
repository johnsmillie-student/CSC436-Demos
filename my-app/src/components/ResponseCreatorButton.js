import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function ResponseCreatorButton(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const modalHeader = "Reply";
    return (
        <div className="ResponseCreatorButton">
      
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
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contentForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder='Comment' />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Reply
          </Button>
        </Modal.Footer>
      </Modal>
  
    </div>
    );
}

export default ResponseCreatorButton;