
import { ArrowUp,ArrowDown } from 'react-bootstrap-icons';
import "../css/TopicPage.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ResponsePara from "../components/ResponsePara";
import { Container,Button } from "react-bootstrap";
import posts from "../data/posts.json";
import comments from "../data/comments.json";
import ResponseCreatorButton from "../components/ResponseCreatorButton";

function TopicPage(){
    return (
    <Container>
    <h3>Topic Title</h3>
    <br></br>
      {posts.map((post, index) => (
        <div>
          <Card style={{ width: '85rem' }}>
             <Card.Body>
               <Card.Title>{post.title}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">OP: {post.id}</Card.Subtitle>
               <Card.Text>
                 {post.content}
               </Card.Text>

               <Button><ArrowUp></ArrowUp></Button>
               {' '} {post.rating}{' '}
               <Button><ArrowDown></ArrowDown></Button>{' '}
               <ResponseCreatorButton/>
               
               <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Comments</Accordion.Header>
                      <Accordion.Body>
                      <ResponsePara comments={comments.filter(comment => comment.postID === post.id)  }> 
                      </ResponsePara>
                      </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               
             </Card.Body>
         
          </Card>
       
          
  
      <br></br>
      </div>
      ))}
    

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