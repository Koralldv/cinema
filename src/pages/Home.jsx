import React from 'react';

import { Navbar, Header } from '../components/';

const announc = [
    {
        id: 1488,
        title: 'The Jungle Book',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        categories: ['Adventure', 'Drama', 'Family', 'Fantasy'],
        timing: '1h 46m',
        stars: '4.8',
    },
    {
        id: 228,
        title: 'Survivor',
        img: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg',
        categories: ['Adventure', 'Drama', 'Family', 'Fantasy'],
        timing: '2h 5m',
        stars: '5.0',
    },
    {
        id: 1489,
        title: 'Slumdog Millionaire',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        categories: ['Adventure', 'Drama', 'Family', 'Fantasy'],
        timing: '1h 20m',
        stars: '3.9',
    },
    {
        id: 4234,
        title: 'Hueta',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        categories: ['Adventure', 'Drama', 'Family', 'Fantasy'],
        timing: '1h 20m',
        stars: '3.9',
    },
];

export const Home = () => {
    return (
        <React.Fragment>
            <Header announc={announc}></Header>
        </React.Fragment>
    );
};
