import React from "react";
import Card from "./../../components/card";
import "./home.scss";

const Cards = [
    {
        img: require("./../../images/electricity.jpg"),
        content: "Расчёт параметров электрооборудования"
    },
    {
        img: require("./../../images/reliability.jpg"),
        content: "Расчёт параметров надежности оборудования"
    }
]

const home = () => {
    const cards = Cards.map(card => <Card key={card.content} imgSrc={card.img} content={card.content}/>)
    return (
        <div id="cards">
            {cards}
        </div>
        
    )
}

export default home;