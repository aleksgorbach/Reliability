import React from "react";

const card = props => {
    let { imgSrc, content, onClick } = props;
    return (
        <div className="card" onClick={onClick}>
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
        </div>
    )
}

export default card;