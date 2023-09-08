import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

/* Component ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled className="CourseWorkLayout">
            <Inset>
                <h1>More Info</h1>
                <nav className="sublinks">
                    <NavLink to="/course-work" end>
                        FAQs
                    </NavLink>
                    <NavLink to="/course-work/sun-and-moon">BTS</NavLink>
                </nav>

                <Outlet />
            </Inset>
        </CourseWorkLayoutStyled>
    );
};

export default CourseWorkLayout;

const CourseWorkLayoutStyled = styled.main``;
