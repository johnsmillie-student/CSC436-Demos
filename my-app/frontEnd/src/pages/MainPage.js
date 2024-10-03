/* eslint-disable react/jsx-no-comment-textnodes */

import  "../css/MainPage.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

//import NavBar from '../components/NavBar';
//import PostPage from '../pages/PostPage';

function MainPage(){
  return (
    <div className="MainPages">
      <Container>
        <Row>
          
        </Row>
        
        <Row>
          <Col sm={3}>
           <h3>List of Topics</h3>
           <div>
            <ul>
              dynamic data list here<br></br>
              
              <Link to="/topic-page">Example Topic</Link>
              {/*users.map((user) => (
                <li key={user.id}>
                  <Link to={user.id}>{user.name}</Link>
                </li>
              ))*/}
            </ul>
          </div>
          </Col>
          <Col sm={9}>
          <h3>Recent Posts</h3>
          <div>
            <ul>
              dynamic data list here
              {}
            </ul>
          </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default MainPage;