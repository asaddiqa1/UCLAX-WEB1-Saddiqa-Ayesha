import { useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

import styled from "styled-components";

import sunSrc from "./images/sun.png";
import moonSrc from "./images/moon.png";

const SunAndMoon = () => {
    //JavaScript

    const [imgSrc, imgSrcUpdate] = useState(sunSrc);

    const changeToMoon = () => {
        console.log("MOON");
        imgSrcUpdate(moonSrc);
    };

    const changeToSun = () => {
        console.log("SUN");
        imgSrcUpdate(sunSrc);
    };

    //HTML
    return (
        <SunAndMoonStyled>
            <h2>Behind the Scenes</h2>
            <h4>
                Experience the Magic Behind the Scenes in Our BTS Video,
                Crafting Your Purrfect Visit!
            </h4>
            <ReactPlayer url="https://www.youtube.com/watch?v=X9YDT4QM29g" />
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

//Styles
const SunAndMoonStyled = styled.div`
    h4 {
        font-size: 20px;
        color: #a6649a;
    }
    .sunMoonImage {
        text-align: center;

        img {
            border: solid 20 px teal;
            margin: 30 px;
            padding: 20 px;
            background-color: #005252;
        }
    }
`;
