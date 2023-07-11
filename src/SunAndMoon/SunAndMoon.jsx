import { useState } from "react";

import styled from "styled-components";

import sunSrc from "./images/sun.png";
import moonSrc from "./images/moon.png";

const SunAndMoon = () => {


    //JavaScript

    const [imgSrc, imgSrcUpdate] = useState(sunSrc);

    const changeToMoon = () => {
        console.log("MOON");
        imgSrcUpdate(moonSrc);
    }


    const changeToSun = () => {
        console.log("SUN");
        imgSrcUpdate(sunSrc);
    }

    //HTML
    return (
        <SunAndMoonStyled>

            <h2>Sun And Moon</h2>
            <img src={imgSrc} onMouseEnter={changeToMoon} onMouseLeave={changeToSun} />

        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

//Styles
const SunAndMoonStyled = styled.div`

    text-align: center;

    h2 {
        font-size: 50px;
        color: teal;
    
    };

img {
    border: solid 20 px teal;
    margin: 30 px; 
    padding: 20 px;
    background-color: #005252;

    }
` ;
