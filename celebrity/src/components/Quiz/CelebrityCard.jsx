import React from 'react';

function CelebrityCard({currentCard}) {

    return (
        <div className="celeb_wrapper">
            <img src={currentCard.image_url} alt={`A picture of ${currentCard.name}`} />
            <h2>{currentCard.name}</h2>
            <p>{currentCard.info}</p>
        </div>
    )
}

export default CelebrityCard;