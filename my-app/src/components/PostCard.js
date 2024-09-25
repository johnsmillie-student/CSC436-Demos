
import Card from 'react-bootstrap/Card';
import ResponseCreatorButton from './ResponseCreatorButton';


function PostCard(){
  return (
   
    <Card style={{ width: '95%' }}>
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <ResponseCreatorButton/>
        </Card.Body>
    </Card>
  );
}


export default PostCard;