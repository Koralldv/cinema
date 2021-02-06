import React from 'react';

import { FilmsList } from './FilmsList';
import { FilmsInfo } from './FilmsInfo';
import MdPlay from 'react-ionicons/lib/MdPlay';

export const Films = ({ filmList, solo }) => {
    return (
        <div className="row filmList">
            {filmList.map((item_filmList, index) => {
                return (
                    <FilmsList
                        item_filmList={item_filmList}
                        index={index}
                        solo={solo}
                        key={`${item_filmList}_${index}`}
                    />
                );
            })}
        </div>
    );
};
