import React from "react";

const card = props => {
    let { imgSrc, content } = props;
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
        </div>
    )
}

export default card;