import React from 'react';
import styled, { css } from 'styled-components';

import { SubscriptionItem } from './SubscriptionItem';
import { Title, AfterTitle } from '../About/AboutHeader';

export const Subscription = ({ subscribe }) => {
    return (
        <>
            <Title>Select subscription</Title>
            <AfterTitle>
                Thousands of films and TV series for the price of one for a whole month: world
                blockbusters, Russian movie hits, cult TV series, animation from Disney and
                educational animated series in Full HD.
            </AfterTitle>
            <Subscribe>
                {subscribe.map((item, index) => {
                    {
                        return (
                            <SubscriptionItem item={item} index={index} key={`${item}_${index}`} />
                        );
                    }
                })}
            </Subscribe>
        </>
    );
};

const Subscribe = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    padding: 20px 0px 100px 0px;
`;
