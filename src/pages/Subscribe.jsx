import React from 'react';

import { Bg, Layout } from './About';
import { Subscription } from '../components/Subscription/Subscription';

export const Subscribe = ({ subscribe }) => {
    return (
        <>
            <Bg>
                <Layout>
                    <Subscription subscribe={subscribe} />
                </Layout>
            </Bg>
        </>
    );
};
