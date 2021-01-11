import React from 'react';

export const CategoriesList = ({ categoriesList, soloFilmSet }) => {
    const [categories, setCatagories] = React.useState(0);
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
                <span onClick={() => soloFilmSet(false)}>4</span>
                <span onClick={() => soloFilmSet(true)}>2</span>
            </div>
        </div>
    );
};
