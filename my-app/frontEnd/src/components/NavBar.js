import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import PostCreatorButton from './PostCreatorButton';
import "../css/NavBar.css";
import { Link } from 'react-bootstrap-icons';

function NavBar({addPost}) {

  return (
    <Navbar collapseOnSelect expand="lg" id="myNav">
      <Container> 
        <Nav.Link>iReadIt</Nav.Link> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <PostCreatorButton addPost={addPost}/>
            
     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;