

import "../css/TopicPage.css";
import Accordion from 'react-bootstrap/Accordion';
//import PostCard from "../components/PostCard";
import ResponsePara from "../components/ResponsePara";
import { Container } from "react-bootstrap";
import posts from "../data/posts.json";
import comments from "../data/comments.json";
function TopicPage(){
    return (
    <Container>
    <h3>Topic Title</h3>
    <Accordion>
      {posts.map((post, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
        <Accordion.Header >{post.title}</Accordion.Header>
        <Accordion.Body>
          {post.content}
          <ResponsePara comments={comments.filter(comment => comment.postID === post.id)  }> 
          </ResponsePara>
        </Accordion.Body>
      </Accordion.Item>
      ))}
    </Accordion>

    </Container>
    );
}

export default TopicPage;




/*<Accordion.Item eventKey="0">
        <Accordion.Header><PostCard/></Accordion.Header>
        <Accordion.Body>
          List Of Responses
          <ResponsePara/>
        </Accordion.Body>
      </Accordion.Item> */