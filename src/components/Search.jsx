import React from 'react';

import MdClose from 'react-ionicons/lib/MdClose';

export const Search = ({ search, setSearch }) => {
    const enterSerch = () => {
        document.querySelector('input').addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                console.log(32);
            }
        });
    };
    return (
        <div>
            <div className="searchBlock">
                <div className="searchInner">
                    <MdClose
                        className="close"
                        fontSize="35px"
                        color="#a69df5"
                        onClick={(search) => setSearch(search)}
                    />
                    <input type="text" className="searchInp" placeholder="search" />
                </div>
            </div>
        </div>
    );
};
