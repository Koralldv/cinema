import React from 'react';
import styled, { css } from 'styled-components';

const subSelect = [
    {
        index: 0,
        title: 'Lite',
        infos: [
            {
                duration: 1,
                months: 'month',
                benefit: 'See without limits',
                about: '25,000 films and TV series for 199 ₽',
            },
            {
                duration: 6,
                months: 'months',
                benefit: 'Benefit 11%',
                about: '25,000 films and TV series for 340 ₽',
            },
            {
                duration: 12,
                months: 'months',
                benefit: 'Benefit 29%',
                about: '25,000 films and TV series for 600 ₽',
            },
        ],
    },
];

export const SubSelect = () => {
    const [select, setselect] = React.useState(0);

    const selectHandle = (index) => setselect(index);

    return (
        <>
            {subSelect.map((item, index) => {
                return (
                    <React.Fragment key={`${item}_${index}`}>
                        <Title>Subscription «{item.title}»</Title>
                        <AfterTitle>Select subscription period:</AfterTitle>
                        <Sub>
                            {item.infos.map((item, index) => {
                                return (
                                    <Subselect
                                        key={`${item}_${index}`}
                                        onClick={() => selectHandle(index)}
                                        isSelect={select === index ? 'select' : ''}>
                                        <SubSelectMonths>{item.duration}</SubSelectMonths>
                                        <SubSelectDay>{item.months}</SubSelectDay>
                                    </Subselect>
                                );
                            })}
                        </Sub>
                        {item.infos.map((item, index) => {
                            return (
                                <React.Fragment key={`${item}_${index}`}>
                                    {select === index ? (
                                        <SubInfo key={`${item}_${index}`}>
                                            <SubInfoTitle>{item.benefit}</SubInfoTitle>
                                            <SubInfoAfterTitle>{item.about}</SubInfoAfterTitle>
                                            <SubinfoButton>Subscribe</SubinfoButton>
                                            <SubinfoSpan>
                                                You can cancel your subscription at any time
                                            </SubinfoSpan>
                                        </SubInfo>
                                    ) : (
                                        ''
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </>
    );
};

const Title = styled.h2`
    color: #ffffff;
    font-family: Helvetica Neue;
    font-weight: 400;
    font-size: 30px;
    margin-top: 40px;
`;

const AfterTitle = styled.span`
    color: rgba(255, 255, 255, 0.7);
    font-family: HelveticaNeueCyr;
    font-weight: 400;
    font-size: 17px;
    margin: 10px 0px 20px 0px;
    display: block;
`;

const Sub = styled.div`
    width: 50%;
    // background: #2e184a;
    display: flex;
    justify-content: space-between;
    justify-items: center;
`;

const Subselect = styled.div`
    background: transparent;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    width: 32%;
    cursor: pointer;
    position: relative;
    ${(props) =>
        props.isSelect &&
        css`
            background: #2e184a;
            color: #fff;
            border: 1px solid #2e184a;
            &:after {
                width: 101.4%;
                background-color: #2e184a;
                border: 1px solid #2e184a;
                height: 27px;
                position: absolute;
                bottom: -20px;
                left: -1px;
                content: '';
            }
        `}
`;

const SubSelectMonths = styled.span`
    margin: 20px auto 10px auto;
    display: block;
    width: 100px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    font-family: HelveticaNeueCyr;
`;

const SubSelectDay = styled.span`
    margin: 0px auto 20px auto;
    display: block;
    width: 100px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    font-family: HelveticaNeueCyr;
`;

const SubInfo = styled.span`
    background: #2e184a;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
    margin-top: 10px;
    padding: 30px;
    border-radius: 10px;
`;

const SubInfoTitle = styled.h2`
    color: #ffffff;
    font-family: HelveticaNeueCyr;
    font-weight: 500;
    font-size: 20px;
`;

const SubInfoAfterTitle = styled.h3`
    color: #ffffff;
    font-family: HelveticaNeueCyr;
    font-weight: 300;
    font-size: 17px;
    margin-top: 10px;
`;

const SubinfoButton = styled.button`
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
    margin: 20px auto 20px 0px;
    display: block;
    subscribeitembutton: hover;
     &:hover {
    transform: scale(1.1);
    transition: transform .3s;  
`;

const SubinfoSpan = styled.h3`
    color: rgba(255, 255, 255, 0.5);
    font-family: HelveticaNeueCyr;
    font-weight: 300;
    font-size: 17px;
    margin-top: 20px;
`;
