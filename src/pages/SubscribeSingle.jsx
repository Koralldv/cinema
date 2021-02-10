import React from 'react';
import styled from 'styled-components';

import { Subscription } from '../components/Subscription/Subscription';
import { SubSelect } from '../components/';

export const SubscribeSingle = ({ subscribe }) => {
    return (
        <>
            <Bgheader black>
                <Layout>
                    <SubSelect />
                </Layout>
            </Bgheader>
            <Bg>
                <Layout>
                    <Subscription subscribe={subscribe} />
                </Layout>
            </Bg>
        </>
    );
};

export const Bgheader = styled.div`
    background-color: #f5f6f6;
    border-top: 90px solid #2e184a;
    background-image: url('https://static.okko.tv/images/v2/13075893?width=1440&quality=80&mediaType=webp');
    background-size: cover;
    padding: 90px 0px;
`;

export const Bg = styled.div`
    background-color: #f5f6f6;
`;

export const Layout = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
`;
