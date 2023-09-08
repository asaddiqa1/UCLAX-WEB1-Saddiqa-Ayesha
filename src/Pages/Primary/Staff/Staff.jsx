import styled from "styled-components";

/* Component ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
import StaffList from "./StaffList";

const Staff = () => {
    return (
        <StaffStyled className="Staff">
            <Inset>
                <h1>Our Pawfessionals</h1>
                <StaffList />
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div``;
