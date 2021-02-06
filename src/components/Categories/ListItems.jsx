import React from 'react';

import { AiFillCaretDown } from 'react-icons/ai';

export const ListItems = ({ categoriesList, categories, setCatagories, arrow, handlesetArrow }) => {
    return (
        <>
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
                                                key={`${itemList}_${index}`}>
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
        </>
    );
};
