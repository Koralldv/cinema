import React from 'react';
import styled, { css } from 'styled-components';

export const AboutHeader = () => {
    return (
        <About>
            <Title>About us</Title>
            <AfterTitle>
                MOVIE is one of the largest legal online cinemas in Russia, we have been
                successfully operating since 2011.
            </AfterTitle>
            <Text>
                Our catalog contains 60,000 films, cartoons and serials. From the moment the launch
                of the service was visited by over 20 million users. The monthly audience is 2.8
                million people.
            </Text>
            <Text>
                MOVIE is available on most smart TVs (Samsung, Sony, LG, Philips, Panasonic and
                other popular models), on game consoles (PlayStation 3 and PlayStation 4) and mobile
                devices (Android and iOS). Download movies and TV shows on mobile devices and watch
                anywhere in the world, even without the Internet.
            </Text>
        </About>
    );
};

const About = styled.div`
    padding: 30px 0px;
    width: 100%;
    max-width: 850px;
`;

export const Title = styled.h2`
    font-size: 40px;
    line-height: 50px;
    font-family: Helvetica Neue;
    margin-bottom: 2px;
    padding-top: 100px;
    color: #12051e;
    ${(props) =>
        props.white &&
        css`
            color: #ffffff;
        `}
`;

export const AfterTitle = styled.h3`
    font-size: 20px;
    line-height: 31px;
    font-family: Helvetica Neue;
    margin-bottom: 20px;
    ${(props) =>
        props.white &&
        css`
            color: #ffffff;
        `}
`;

const Text = styled.p`
    font-size: 20px;
    line-height: 31px;
    font-family: HelveticaNeueCyr;
    margin-bottom: 20px;
`;
