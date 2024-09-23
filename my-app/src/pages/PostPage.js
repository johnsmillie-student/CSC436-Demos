
import { Col, Container, Row } from "react-bootstrap";
import "../css/PostPage.css";
import ResponsePara from "../components/ResponsePara";
import PostCard from "../components/PostCard";

function PostPage(){

    return(
    <Container>
        <Row>
            <Col>
                <PostCard/>
            </Col>
        </Row>
        <Row>
            <Col><ResponsePara/></Col>
        </Row>


    </Container>
    );
}

export default PostPage;