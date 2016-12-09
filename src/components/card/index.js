import React from "react";
import {Link} from "react-router";

import "./card.scss"

export const ImageCard = props => {
    let { imgSrc, content, url } = props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imgSrc} alt="" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    {content}
                </div>
            </div>
            <footer>
                <Link to={url} >
                    <p className="subtitle link">Перейти</p>
                </Link>
            </footer>
        </div>
    )
}

export const TextCard = props => {
    let { title, content, url } = props;
    return (
        <div className="card is-fullwidth">
            <header className="card-header">
                <p className="card-header-title">
                    {title}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {content}
                    <hr/>
                </div>
            </div>
            <footer>
                <Link to={url} >
                    <p className="subtitle link">Перейти</p>
                </Link>
            </footer>
        </div>
    )
}