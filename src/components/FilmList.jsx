import React, { useState } from 'react';

import MdPlay from 'react-ionicons/lib/MdPlay';
import MdClose from 'react-ionicons/lib/MdClose';

export const FilmList = ({ filmList, solo }) => {
    const [info, setInfo] = useState(null);

    const clickInfo = (index) => {
        setInfo(index);
    };

    return (
        <div className="row filmList">
            {filmList.map((item, index) => {
                return (
                    <div className="filmItem col-3" style={solo} key={`${item}_${index}`}>
                        <div
                            className="filmItemInner"
                            style={
                                info === index
                                    ? {
                                          backgroundImage: `url('${item.img}')`,
                                      }
                                    : { backgroundImage: 'none' }
                            }>
                            {info === index ? <div className="filmItemInner___bg"></div> : ''}
                            {info !== index ? (
                                <div className="filmItemTop filmItemTopHover">
                                    <img src={item.img} alt="" />
                                    <div className="mask">
                                        <div className="play">
                                            <MdPlay color="#ffffff" />
                                        </div>
                                        <span className="watch">Watch Now</span>
                                        <button
                                            className="btn btn-bor"
                                            onClick={() => clickInfo(index)}>
                                            View Info
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                            {info !== index ? (
                                <div className="filmItemInfo">
                                    <span className="span">{item.title}</span>
                                    <ul className="listCat">
                                        {item.categories.map((item, index) => {
                                            return <li key={`${item}_${index}`}>{item}</li>;
                                        })}
                                    </ul>
                                    <span className="rating">{item.rating}</span>
                                </div>
                            ) : (
                                ''
                            )}
                            {info === index ? (
                                <div className="info">
                                    <div className="info__off" onClick={() => clickInfo()}>
                                        <MdClose color="#ffffff" />
                                    </div>
                                    <div
                                        className={
                                            info === index ? 'filmItemInfo__active' : 'filmItemInfo'
                                        }>
                                        <span className={info === index ? 'span__active' : 'span'}>
                                            {item.title}
                                        </span>
                                        <ul className="listCat">
                                            {item.categories.map((item, index) => {
                                                return <li key={`${item}_${index}`}>{item}</li>;
                                            })}
                                        </ul>
                                        <span className="rating">{item.rating}</span>
                                    </div>
                                    <p className="info__about">{item.description}</p>
                                    <button className="btn btn-col">Wath now</button>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
