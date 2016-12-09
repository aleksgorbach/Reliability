import React from "react";

import { TextCard } from "./../../components/card";

const Cards = [
    {
        title: "Безотказность",
        content: "Блаблабла",
        url: "/reliability"
    },
    {
        title: "Долговечность",
        content: "Блаблабла",
        url: "/electricity"
    }
]

const reliability = (props) => {
    const cards = Cards.map(card => 
        <TextCard 
            key={card.title} 
            title={card.title} 
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

export default reliability;