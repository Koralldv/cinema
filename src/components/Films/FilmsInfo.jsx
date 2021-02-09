import React from 'react';

import MdClose from 'react-ionicons/lib/MdClose';

export const FilmsInfo = ({ item_filmList, info, clickInfo, index }) => {
    return (
        <>
            {info === index ? (
                <div className="info">
                    <div className="info__off" onClick={() => clickInfo()}>
                        <MdClose color="#ffffff" />
                    </div>
                    <div className={info === index ? 'filmItemInfo__active' : 'filmItemInfo'}>
                        <span className={info === index ? 'span__active' : 'span'}>
                            {item_filmList.title}
                        </span>
                        <ul className="listCat">
                            {item_filmList.categories.map((item, index) => {
                                return <li key={`${item}_${index}`}>{item}</li>;
                            })}
                        </ul>
                        <span className="rating">{item_filmList.rating}</span>
                    </div>
                    <p className="info__about">{item_filmList.description}</p>
                    <button className="btn btn-col btn__pos">Wath now</button>
                </div>
            ) : (
                ''
            )}
        </>
    );
};
