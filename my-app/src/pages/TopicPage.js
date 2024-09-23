

import "../css/TopicPage.css";
import Accordion from 'react-bootstrap/Accordion';
import PostCard from "../components/PostCard";
import ResponsePara from "../components/ResponsePara";
import { Container } from "react-bootstrap";

function TopicPage(){
    return (
    <Container>
    <h3>Topic Title</h3>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><PostCard/></Accordion.Header>
        <Accordion.Body>
          List Of Responses
          <ResponsePara/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </Container>
    );
}

export default TopicPage;