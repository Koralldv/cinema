import React from 'react';
import { AboutHeader, AboutBrands } from '../components/About';

import styled from 'styled-components';

export const About = () => {
    return (
        <Bg>
            <Layout className="layout">
                <AboutHeader />
                <AboutBrands />
            </Layout>
        </Bg>
    );
};

export const Bg = styled.div`
    background-color: #f5f6f6;
    border-top: 90px solid #070707;
`;

export const Layout = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
`;
