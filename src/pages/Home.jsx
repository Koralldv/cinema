import React from 'react';

import { Header, CategoriesList, Films, Subscription, FreeAd } from '../components/';

const announc = [
    {
        id: 1488,
        title: 'The Jungle Book',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        categories: ['Adventure', 'Drama', 'Family', 'Fantasy'],
        timing: '1h 46m',
        stars: '4.8',
        about:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
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
        title: 'Скуби Дуби Ду',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        categories: ['Adventure', 'Drama', 'Family', 'Fantasy'],
        timing: '1h 20m',
        stars: '3.9',
    },
];

const categoriesList = [
    { title: 'Trending', list: '' },
    { title: 'Top Rated', list: '' },
    { title: 'New Arrivals', list: '' },
    { title: 'Trailers', list: '' },
    { title: 'Coming Soon', list: '' },
    {
        title: 'Gerge',
        list: [
            'None',
            'Animation',
            'Biographical',
            'Thriller',
            'Western',
            'War',
            'Detective',
            'For adults',
            'Documentary',
            'Drama',
            'Show',
            'History',
            'Comedy',
            'Melodrama',
            'Mystic',
            'Musical',
            'Noir',
            'Adventure',
            'Reality show',
            'Family',
        ],
    },
    {
        title: 'Year',
        list: [
            'None',
            '2021',
            '2020',
            '2019',
            '2018',
            '2017',
            '2016',
            '2015',
            '2014',
            '2013',
            '2012',
            '2011',
            '2010',
            '2009',
            '2008',
            '2007',
            '2006',
            '2005',
            '2004',
            '2003',
            '2002',
        ],
    },
];

const filmList = [
    {
        id: 123,
        title: 'AssAssin’s Creed',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Now you see me 2',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'The Legend of Ta...',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers.',
    },
];

const subscribe = [
    {
        id: 1,
        title: 'LITE',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        description: 'There are growing dangers here are growing dangers.',
        sale: 'First 7 days free',
        price: 10,
    },
    {
        id: 2,
        title: 'OPTIUS',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        description: 'There are growing dangers here are growing dangers.',
        sale: 'First 7 days free',
        price: 15,
    },
    {
        id: 3,
        title: 'PREMIUM',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        description: 'There are growing dangers here are growing dangers.',
        sale: 'First 7 days free',
        price: 13,
    },
];

const solo = {
    flex: '0 0 100%',
    maxWidth: '50%',
};

const all = {};

export const Home = () => {
    const [soloFilm, soloFilmSet] = React.useState(false);
    const [addOff, addOffSet] = React.useState(true);

    const handleAddOffSet = () => {
        addOffSet(!addOff);
    };

    return (
        <React.Fragment>
            <Header announc={announc}></Header>
            <div className="bg">
                <div className="categoriesList container">
                    <CategoriesList categoriesList={categoriesList} soloFilmSet={soloFilmSet} />
                    <Films filmList={filmList} solo={soloFilm === true ? solo : all} />
                    {addOff === true ? <FreeAd click={() => handleAddOffSet()} /> : ''}
                    <Subscription subscribe={subscribe} />
                </div>
            </div>
        </React.Fragment>
    );
};
