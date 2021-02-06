import React from 'react';

export const Tabs = ({ activeSize, handleSoloFilmSet }) => {
    return (
        <div className="tabsList">
            <span
                className={activeSize === 2 ? 'activeSize' : ''}
                onClick={() => handleSoloFilmSet(false, 2)}>
                4
            </span>
            <span
                className={activeSize === 4 ? 'activeSize' : ''}
                onClick={() => handleSoloFilmSet(true, 4)}>
                2
            </span>
        </div>
    );
};
