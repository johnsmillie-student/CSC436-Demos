
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../css/PostCreatorButton.css';

function PostCreatorButton({addPost}) {


  function savePost(e){
    e.preventDefault();
    //console.log(e);
   // console.log(e.target.formTitle.value);
   // console.log(e.target.formContent.value);
    const newPost = {
      "id": Date.now(),
      "topic": e.target.formTopic.value,
      "title": e.target.formTitle.value,
      "content": e.target.formContent.value
    }
  //  console.log(newPost);
    addPost(newPost);
    handleClose();
  } 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modalHeader = "Create New Post";
  return (
    <div className="PostCreatorButton">
      
      <Button variant="primary" onClick={handleShow}>
        {modalHeader}
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={savePost}>
          <Form.Group className="mb-3" controlId="formUser">
            <Form.Label>User</Form.Label>
            <Form.Control type="text" placeholder="Garfield" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTopic">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="Daily Grievance" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="I Hate Mondays" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContent">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Button variant="secondary" >
            Close
          </Button>{" "}
          <Button variant="primary" type='submit' >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
  
    </div>
  );
}

export default PostCreatorButton;
