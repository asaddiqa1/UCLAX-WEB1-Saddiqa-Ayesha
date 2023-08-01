import styled from "styled-components";

const Accolade = ({ accolade }) => {
    return <AccoladeStyled className="Accolade">{accolade}</AccoladeStyled>;
};

export default Accolade;

const AccoladeStyled = styled.li`
    padding-left: 20px;
    list-style-type: disc;
`;
