import React from "react";
import { ImageCard } from "./../../components/card";
import "./home.scss";

const Cards = [
    {
        img: require("./../../images/reliability.jpg"),
        content: "Расчёт параметров надежности оборудования",
        url: "/reliability"
    },
    {
        img: require("./../../images/electricity.jpg"),
        content: "Расчёт параметров электрооборудования",
        url: "/electricity"
    }
]

const home = (props) => {
    const cards = Cards.map(card => 
        <ImageCard 
            key={card.content} 
            imgSrc={card.img} 
            content={card.content}
            url={card.url}
        />
    )
    return (
        <div id="cards">
            {cards}
        </div>
        
    )
}

export default home;