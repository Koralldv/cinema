import React from 'react';

import SwiperCore, { Pagination, Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import MdStar from 'react-ionicons/lib/MdStar';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import { Navbar } from './Navbar';

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

function Header({ announc }) {
    return (
        <div>
            <Navbar />
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                direction="vertical"
                className="swiper"
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}>
                {announc.map((item, index) => {
                    return (
                        <SwiperSlide key={`${item}_${index}`}>
                            <div
                                className="header"
                                style={{
                                    backgroundImage: `url('${item.img}')`,
                                }}>
                                <div className="headerInner">
                                    <div className="infoFilm">
                                        <h2>{item.title}</h2>
                                        <ul className="typeFilm">
                                            {item.categories.map((itemCat, index) => (
                                                <li key={`${item}_${index}`}>{itemCat}</li>
                                            ))}
                                            <span className="longFilm">{item.timing}</span>
                                        </ul>
                                        <MdStar
                                            className="headerStar"
                                            color="#a69df5"
                                            fontSize="36px"
                                        />
                                        <MdStar
                                            className="headerStar"
                                            color="#a69df5"
                                            fontSize="36px"
                                        />
                                        <MdStar
                                            className="headerStar"
                                            color="#a69df5"
                                            fontSize="36px"
                                        />
                                        <MdStar
                                            className="headerStar"
                                            color="#a69df5"
                                            fontSize="36px"
                                        />
                                        <MdStar
                                            className="headerStar"
                                            color="#a69df5"
                                            fontSize="36px"
                                        />
                                        <span className="rateFilm">{item.stars}</span>
                                    </div>
                                    <div className="navBut">
                                        <button className="btn btn-col">Whatch Now</button>
                                        <button className="btn btn-bor">View Info</button>
                                        <button className="btn btn-emp">+ Favorites</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Header;
