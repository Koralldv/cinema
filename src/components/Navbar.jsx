import React, { useState } from 'react';
import MdSearch from 'react-ionicons/lib/MdSearch';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = () => {
    const [search, setSearch] = useState(false);

    const [activeNav, setActiveNav] = React.useState(0);

    let high = React.useRef(null);
    const handleScroll = () => {
        high = window.scrollY;
        if (high > 100) {
            setActiveNav(!activeNav);
        } else if (high < 100) {
            setActiveNav(activeNav);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">
            {search === true ? (
                <Search setSearch={(search) => setSearch(!search)} search={search} />
            ) : (
                ''
            )}

            <div className={`${activeNav ? 'row navbar navbarFixed' : 'row navbar'}`}>
                <Link to="/" className="brand">
                    Movie
                </Link>
                <div className="navBut">
                    <button className="btn btn-search" onClick={() => setSearch(true)}>
                        <MdSearch className="btn-search-icon" color="#fff" />
                        Search
                    </button>
                    <button className="btn btn-emp">Sing in</button>
                    <button className="btn btn-col">Sing Up</button>
                </div>
            </div>
        </div>
    );
};
