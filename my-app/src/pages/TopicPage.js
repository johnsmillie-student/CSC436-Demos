
import { ArrowUp,ArrowDown } from 'react-bootstrap-icons';
import "../css/TopicPage.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ResponsePara from "../components/ResponsePara";
import { Container,Button,Badge } from "react-bootstrap";
import postsD from "../data/posts.json";
import comments from "../data/comments.json";
import ResponseCreatorButton from "../components/ResponseCreatorButton";
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

function TopicPage({topic}){
  //const posts = pool.filter(post => post === topic);
  
  /*
  const updateRating = (id,n) => {
    setPosts(posts.map(post =>
      post.id === id ? {...post, rating: post.rating + n } : n
    ));
  }


  const [comments, setComments] = useState(commentsD); */
  const [posts, setPosts] = useState(postsD);
  const addPost = (newPost) => {
    console.log(newPost);
    setPosts([...posts, newPost]);
  };


  useEffect(() => {
    console.log(posts)
    console.log("Use Effect Triggered");
  }, [posts]); 
/*
  useEffect(() => {
    console.log(comments)
  }, [comments]);
*/










    return (
      
    <Container>
      <NavBar addPost={addPost}/>
    <h3>Topic</h3>
    <br></br>
      {posts.map((post, index) => (
        <div>
          
          <Card style={{ width: '100%' }}>
             <Card.Body>
               <Card.Title>{post.title}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">OP: {post.id}</Card.Subtitle>
               <Card.Text>
                 {post.content}
               </Card.Text>

               <Button ><ArrowUp></ArrowUp></Button>
               {' '} {post.rating}{' '}
               <Button><ArrowDown></ArrowDown></Button>{' '}
               <ResponseCreatorButton/>
             
               <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header ><span className="badgeMargin" >Comments</span>
                    <Badge bg="info">{comments.filter(comment => comment.postID === post.id).length}</Badge>    </Accordion.Header>
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