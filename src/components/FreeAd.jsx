import React from 'react';
import styled, { css } from 'styled-components';
import MdClose from 'react-ionicons/lib/MdClose';
import { Link } from 'react-router-dom';
import AdImg from '../img/ad.jpg';

export const FreeAd = ({ click }) => {
    return (
        <Free>
            <FreeClose>
                <MdClose
                    className="closeAdd"
                    color="#fff"
                    fontSize="17px"
                    onClick={() => click()}
                />
            </FreeClose>
            <FreeTitle>First 14 days for $0.1</FreeTitle>
            <FreeATitleAfter>Subscribe for new users</FreeATitleAfter>
            <Link to="/">
                <FreeButton>Try!</FreeButton>
            </Link>
            <Freeimg src={AdImg} alt="" />
        </Free>
    );
};

const Free = styled.div`
    padding: 30px;
    width: 100%;
    max-width: 1200px;
    border-radius: 10px;
    background-color: #a69df5;
    height: 165px;
    position: relative;
    margin: 60px auto 0px auto;
`;

const FreeClose = styled.span`
    position: absolute;
    right: 15px;
    top: 15px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    justify-items: center;
    width: 25px;
    height: 25px;
    padding-top: 4px;
    cursor: pointer;
`;

const FreeTitle = styled.h2`
    font-size: 28px;
    font-family: Helvetica Neue;
    color: #fff;
`;

const FreeATitleAfter = styled.h3`
    font-size: 20px;
    font-family: HelveticaNeueCyr;
    color: rgba(255, 255, 255, 0.64);
    margin-top: 10px;
`;

const FreeButton = styled.button`
    color: #a69df5;
    border: 0px;
    border-radius: 6px;
    padding: 12px 30px;
    margin: 5px 5px;
    font-family: HelveticaNeueCyr;
    cursor: pointer;
    position: relative;
    background-color: #fff;
    margin: 20px 0px 0px 0px;
    display: block;
    subscribeitembutton: hover;
    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;

const Freeimg = styled.img`
    display: block;
    width: container;
    height: inherit;
    position: absolute;
    right: 15%;
    top: 0px;
`;
