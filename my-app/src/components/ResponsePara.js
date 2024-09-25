import "../css/ResponsePara.css";


function ResponsePara({comments}){
    const matchedComment = comments.map((para, index) => {
        return (
            <div>
                <p>{para.content}</p>
            </div>
        );
       
    })
    return (
        matchedComment
    );
}

export default ResponsePara;