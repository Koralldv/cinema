import React from 'react';

import { Navbar, Header, CategoriesList, FilmList } from '../components/';

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

const categoriesList = [
    'Trending',
    'Top Rated',
    'New Arrivals',
    'Trailers',
    'Coming Soon',
    'Gerge',
];

const filmList = [
    {
        id: 123,
        title: 'AssAssin’s Creed',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Now you see me 2',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'The Legend of Ta...',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
    {
        id: 123,
        title: 'Title',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        rating: 4.2,
        categories: ['Adventure', 'Drama', 'Family'],
        description:
            'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found. ',
    },
];

const solo = {
    flex: '0 0 100%',
    maxWidth: '100%',
};

const all = {};

export const Home = () => {
    const [soloFilm, soloFilmSet] = React.useState(false);
    return (
        <React.Fragment>
            <Header announc={announc}></Header>
            <div className="categoriesList container">
                <CategoriesList categoriesList={categoriesList} soloFilmSet={soloFilmSet} />
                <FilmList filmList={filmList} solo={soloFilm === true ? solo : all} />
            </div>
        </React.Fragment>
    );
};
