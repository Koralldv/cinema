import React, { useState } from 'react';

import { FilmsInfo } from './FilmsInfo';

import MdPlay from 'react-ionicons/lib/MdPlay';

export const FilmsList = ({ item_filmList, index, solo }) => {
    console.log(item_filmList);
    const [info, setInfo] = useState(null);

    const clickInfo = (index) => {
        setInfo(index);
    };
    return (
        <>
            <div
                className="filmItem col-xl-3 col-md-4 col-md-6 col-sm-12 col-xs-12"
                style={solo}
                key={`${item_filmList}_${index}`}>
                <div
                    className="filmItemInner"
                    style={
                        info === index
                            ? {
                                  backgroundImage: `url('${item_filmList.img}')`,
                              }
                            : { backgroundImage: 'none' }
                    }>
                    {info === index ? <div className="filmItemInner___bg"></div> : ''}
                    {info !== index ? (
                        <div className="filmItemTop filmItemTopHover">
                            <img src={item_filmList.img} alt="" />
                            <div className="mask">
                                <div className="play">
                                    <MdPlay color="#ffffff" />
                                </div>
                                <span className="watch">Watch Now</span>
                                <button className="btn btn-bor" onClick={() => clickInfo(index)}>
                                    View Info
                                </button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                    {info !== index ? (
                        <div className="filmItemInfo">
                            <span className="span">{item_filmList.title}</span>
                            <ul className="listCat">
                                {item_filmList.categories.map((item, index) => {
                                    return <li key={`${item}_${index}`}>{item}</li>;
                                })}
                            </ul>
                            <span className="rating">{item_filmList.rating}</span>
                        </div>
                    ) : (
                        ''
                    )}
                    <FilmsInfo
                        item_filmList={item_filmList}
                        info={info}
                        clickInfo={clickInfo}
                        index={index}
                    />
                </div>
            </div>
        </>
    );
};
