import styled from "styled-components";

const Essay = ({ question, children }) => {
    return (
        <EssayStyled className="Essay">
            <h3>{question}</h3>
            <div className="answer">{children}</div>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div`
    margin: 20px 0px;
    border: solid 2px #a6649a;

    h3 {
        background-color: #8e5283;
        padding: 10px 20px;
        color: #fff5e1;
        font-size: 20px;
        margin: 0px;
    }

    .answer {
        background-color: #fff5e1;
        padding: 20px;
    }
`;
