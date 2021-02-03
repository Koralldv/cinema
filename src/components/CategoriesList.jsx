import React from 'react';

export const CategoriesList = ({ categoriesList, soloFilmSet }) => {
    const [categories, setCatagories] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(2);

    const handleSoloFilmSet = (i, size) => {
        soloFilmSet(i);
        setActiveSize(size);
    };

    return (
        <div className="categoriesBlock">
            <ul className="categList">
                {categoriesList.map((item, index) => {
                    return (
                        <li
                            className={
                                index === categories ? 'categItem categItem-Active' : 'categItem'
                            }
                            key={`${item}_${index}`}
                            onClick={() => setCatagories(index)}>
                            {item}
                        </li>
                    );
                })}
            </ul>
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
        </div>
    );
};
