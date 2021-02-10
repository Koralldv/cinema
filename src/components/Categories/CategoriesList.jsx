import React from 'react';

import { Tabs } from './Tabs';
import { ListItems } from './ListItems';

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
    });

    return (
        <div className="categoriesBlock">
            <ul className="categList" ref={sortRef}>
                <ListItems
                    categoriesList={categoriesList}
                    categories={categories}
                    setCatagories={setCatagories}
                    arrow={arrow}
                    handlesetArrow={handlesetArrow}
                />
            </ul>
            <Tabs activeSize={activeSize} handleSoloFilmSet={handleSoloFilmSet} />
        </div>
    );
};
