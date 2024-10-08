import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../css/ResponseCreatorButton.css";

function ResponseCreatorButton({addComment, postID}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const modalHeader = "Reply";

    function saveComment(e)  {
      e.preventDefault();
      console.log("IN save comment")
      const newComment = {
        "id": Date.now(),
        "user": e.target.userForm.value,
        "postID": postID,
        "content": e.target.contentForm.value
    };
    addComment(newComment);
    handleClose();
  }
    return (
        <span >
      
        <Button id="commentButton"  onClick={handleShow}>
          {modalHeader}
        </Button>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{modalHeader}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={saveComment}>
            <Form.Group className="mb-3" controlId="userForm">
              <Form.Label>User</Form.Label>
              <Form.Control type="text" placeholder="User Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contentForm">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder='Comment' />
            </Form.Group>
            <Button type='submit'>
              Reply
            </Button>{" "}
            <Button  onClick={handleClose}>
              Close
            </Button>
          </Form>
          </Modal.Body>
        </Modal>
        </span>
  
    );
}

export default ResponseCreatorButton;