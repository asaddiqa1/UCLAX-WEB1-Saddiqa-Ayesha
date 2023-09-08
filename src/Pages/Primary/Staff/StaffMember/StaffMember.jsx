import styled from "styled-components";

/* Components ---------------------------*/
import StaffBio from "./StaffBio";

const StaffMember = ({ member }) => {
    return (
        <StaffMemberStyled className="StaffMember">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <StaffBio member={member} />
        </StaffMemberStyled>
    );
};

export default StaffMember;

const StaffMemberStyled = styled.div`
    background-color: #e9d8e6;

    img {
        width: 100%;
        display: block;
    }

    h3 {
        font-size: 20px;
        color: #fff5e1;
        background-color: #a6649a;
        margin: 0px;
        padding: 5px 10px;
    }

    .member {
        color: #75436b;
    }
`;
