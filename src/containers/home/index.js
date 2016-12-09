import React from "react";
import Card from "./../../components/card";
import "./home.scss";

const Cards = [
    {
        img: require("./../../images/reliability.jpg"),
        content: "Расчёт параметров надежности оборудования!",
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
        <Card 
            key={card.content} 
            imgSrc={card.img} 
            content={card.content}
            onClick={() => props.router.push(card.url)}
        />
    )
    return (
        <div id="cards">
            {cards}
        </div>
        
    )
}

export default home;