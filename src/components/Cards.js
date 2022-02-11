import React from "react";
import Card from "./Card";

const Cards = ({ api, onOpen }) => {
    return (
        <div className="Cards">
            {api.map((element) => (
                <Card
                    title={element.title}
                    text={element.text}
                    onOpen={onOpen}
                    key={element.id}
                />
            ))}
        </div>
    );
};

export default Cards;
