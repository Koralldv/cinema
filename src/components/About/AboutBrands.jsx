import React from 'react';

import styled from 'styled-components';
import WB from '../../img/wb.png';

const brands = [WB, WB, WB, WB, WB, WB, WB, WB, WB];

export const AboutBrands = () => {
    return (
        <Brands>
            {brands.map((item, index) => (
                <li key={`${item}_${index}`}>
                    <BrandsImg src={item} />
                </li>
            ))}
        </Brands>
    );
};

const Brands = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    padding: 50px 0px 100px 0px;
`;

const BrandsImg = styled.img`
    width: 100px;
`;
