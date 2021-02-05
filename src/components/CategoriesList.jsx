import React from 'react';

import { AiFillCaretDown } from 'react-icons/ai';

export const CategoriesList = ({ categoriesList, soloFilmSet }) => {
    const sortRef = React.useRef();

    const [categories, setCatagories] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(2);
    const [arrow, setArrow] = React.useState({ index: 0, isShow: false });

    const handleSoloFilmSet = (i, size) => {
        soloFilmSet(i);
        setActiveSize(size);
    };

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setArrow({ index: 0, isShow: false });
        }
    };

    const handlesetArrow = (index, isShow) => {
        setArrow({ index: index, isShow: !isShow });
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div className="categoriesBlock">
            <ul className="categList" ref={sortRef}>
                {categoriesList.map((item, index) => {
                    return item.list ? (
                        <li
                            className="categItemGroup"
                            key={`${item.title}_${index}`}
                            onClick={() => setCatagories(index)}
                            onClick={() => handlesetArrow(index, arrow.isShow)}>
                            <AiFillCaretDown
                                className={
                                    index === arrow.index && arrow.isShow
                                        ? 'arrowCat__rotate'
                                        : 'arrowCat'
                                }
                                color="#a69df5"
                            />

                            <ul className="select">
                                <span
                                    className={
                                        index === categories
                                            ? 'categItem categItem-Active'
                                            : 'categItem'
                                    }>
                                    {item.title}
                                </span>
                                {index === arrow.index && arrow.isShow ? (
                                    <div className="selectThumb">
                                        {item.list.map((itemList, index) => {
                                            return (
                                                <li
                                                    className="thumb__item"
                                                    key={`${itemList}_${index}`}
                                                    // onClick={() => ()}
                                                >
                                                    {itemList}
                                                </li>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    ''
                                )}
                            </ul>
                        </li>
                    ) : (
                        <li
                            className={
                                index === categories ? 'categItem categItem-Active' : 'categItem'
                            }
                            key={`${item.title}_${index}`}
                            onClick={() => setCatagories(index)}>
                            {item.title}
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
