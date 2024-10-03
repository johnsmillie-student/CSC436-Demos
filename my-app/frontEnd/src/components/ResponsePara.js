import "../css/ResponsePara.css";
import { Container } from "react-bootstrap";
import ResponseCreatorButton from "./ResponseCreatorButton";

function ResponsePara({comments}){
    const matchedComment = comments.map((comment, index) => {
        return (

            <Container>
                <p>{comment.user}</p>
                <p>{comment.content}</p>
                {/*<ResponseCreatorButton/>*/}
                <hr></hr>
            </Container>
        );
       
    })
    return (
        matchedComment
    );
}

export default ResponsePara;