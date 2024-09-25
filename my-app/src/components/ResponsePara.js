import "../css/ResponsePara.css";
import { Container } from "react-bootstrap";
import ResponseCreatorButton from "./ResponseCreatorButton";

function ResponsePara({comments}){
    const matchedComment = comments.map((para, index) => {
        return (

            <Container>
                <p>{para.content}</p>
                <ResponseCreatorButton/>
            </Container>
        );
       
    })
    return (
        matchedComment
    );
}

export default ResponsePara;