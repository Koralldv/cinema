import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer container-fluid">
                <div className="row">
                    <ul className="footerMenu col">
                        <li className="footerMenu__item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="footerMenu__item">
                            <Link to="/subscribe">Subscribe</Link>
                        </li>
                        <li className="footerMenu__item">
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                    <div className="Finfo col">
                        <span className="info__logo">Movie</span>
                        <p className="info__rights">
                            Copyright © 2021 <span>MOVIE</span>. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col">
                        <ul className="social">
                            <a
                                href="https://www.youtube.com/watch?v=RPgmGtCQCzU"
                                className="social_item">
                                <FaFacebookF size="25px" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=RPgmGtCQCzU"
                                className="social_item">
                                <FaTwitter size="25px" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=RPgmGtCQCzU"
                                className="social_item">
                                <FaPinterestP size="25px" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=RPgmGtCQCzU"
                                className="social_item">
                                <AiFillInstagram size="25px" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=RPgmGtCQCzU"
                                className="social_item">
                                <FaYoutube size="25px" />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
