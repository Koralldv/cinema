import React, { useState } from 'react';
import MdSearch from 'react-ionicons/lib/MdSearch';
import { Search } from './Search';

export const Navbar = () => {
    const [search, setSearch] = useState(false);
    return (
        <div className="container">
            {search === true ? (
                <Search setSearch={(search) => setSearch(!search)} search={search} />
            ) : (
                ''
            )}

            <div className="row navbar">
                <a href="" className="brand">
                    Movie
                </a>
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
