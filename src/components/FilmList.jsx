import React from 'react';

export const FilmList = ({ filmList, solo }) => {
    // const [soloFilm, soloFilmSet] = React.useState(false);
    return (
        <div className="row filmList">
            {filmList.map((item, index) => {
                return (
                    <div className="filmItem col-3" style={solo} key={`${item}_${index}`}>
                        <div className="filmItemInner">
                            <img src={item.img} alt="" />
                            <div className="filmItemInfo">
                                <span>{item.title}</span>
                                <ul>
                                    {item.categories.map((item, index) => {
                                        return <li>{item}</li>;
                                    })}
                                </ul>
                                <span className="rating">{item.rating}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
