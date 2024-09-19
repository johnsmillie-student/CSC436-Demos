import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostList from './PostList';
import NavBar from './NavBar';
function Main(){
  return (
    <div className="Main">
      <Container>
        <Row>
          <Col>
            <NavBar/>
          </Col>
        </Row>
      <Row>
          <Col class="header" ><h2>Posts</h2></Col>
        </Row>
        <Row>
          <Col><PostList/></Col>
        </Row>
      </Container>


    </div>
  );
}

export default Main;