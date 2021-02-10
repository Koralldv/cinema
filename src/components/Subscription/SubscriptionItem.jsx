import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Sub from '../../img/sub1.png';

export const SubscriptionItem = ({ item, index }) => {
    return (
        <SubscribeItem key={`${item}_${index}`}>
            <Link className="linkSub" to={`/subscribe/${item.title}`}>
                <SubscribeItemInfo>
                    <SubscribeItemImg src={Sub}></SubscribeItemImg>
                    <SubscribeItemTitle>{item.title}</SubscribeItemTitle>
                    <SubscribeItemText>{item.description}</SubscribeItemText>
                    {item.sale ? <SubscribeItemSale>{item.sale}</SubscribeItemSale> : ''}
                    <SubscribeItemPrice>{`$${item.price}/month`}</SubscribeItemPrice>
                    <SubscribeItemButton>Subscribe</SubscribeItemButton>
                </SubscribeItemInfo>
            </Link>
        </SubscribeItem>
    );
};

const SubscribeItem = styled.div`
    height: 600px;
    border-radius: 8px;
    margin-bottom: 30px;
    // background: linear-gradient(-26deg, #12051e, red);
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0px 10px 40px 0px rgb(0 0 0 / 4%);
    &:hover {
    transform: translate(0%, -1%);
    transition: transform .5s; 
`;

const SubscribeItemInfo = styled.div`
    display: block;
    width: 100%;
}
`;

const SubscribeItemImg = styled.img`
    display: block;
    width: 100%;
    margin-bottom: 15px;
}
`;

const SubscribeItemTitle = styled.h2`
    text-align: center;
    font-size: 45px;
    font-family: 'Helvetica Neue';
    color: #242b2d;
    text-transform: uppercase;
    padding: 15px 0px 0px 0px;
`;

const SubscribeItemText = styled.p`
    text-align: center;
    font-size: 17px;
    line-height: 24px;
    font-family: 'HelveticaNeueCyr';
    font-weight: 300;
    margin-top: 20px;
    color: #242b2d;
    padding: 10px 20px;
}
`;

const SubscribeItemSale = styled.p`
    text-align: center;
    font-size: 18px;
    font-family: 'HelveticaNeueCyr';
    font-weight: 500;
    color: #ffffff;
    background-color: #e40454;
    border-radius: 3px;
    width: 60%;
    margin: 20px auto;
    padding: 5px 10px;
    text-transform: uppercase;
}
`;

const SubscribeItemPrice = styled.span`
    text-align: center;
    font-size: 20px;
    font-family: 'Helvetica Neue';
    margin-top: 20px;
    color: #a69df5;
    margin: 60px auto 20px auto;
    widtht: 100px;
    display: block;
}
`;

const SubscribeItemButton = styled.button`
    color: #fff;
    border: 0px;
    border-radius: 6px;
    padding: 12px 30px;
    background-color: transparent;
    font-size: 20px;
    font-family: HelveticaNeueCyr;
    cursor: pointer;
    position: relative;
    background-color: #a69df5;
    margin: 20px auto 20px auto;
    display: block;
    subscribeitembutton: hover;
     &:hover {
    transform: scale(1.1);
    transition: transform .3s;  
  }
}
`;
