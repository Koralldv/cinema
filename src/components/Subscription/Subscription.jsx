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
                <div className="row">
                    {subscribe.map((item, index) => {
                        {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                    <SubscriptionItem
                                        item={item}
                                        index={index}
                                        key={`${item}_${index}`}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
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
