import React from 'react';

function CelebrityCard({currentCard}) {

    return (
        <div className="celeb_wrapper">
<<<<<<< HEAD
            <img src={currentCard.image_url} alt={`A picture of ${currentCard.name}`} />
            <h2>{currentCard.name}</h2>
            <p>{currentCard.info}</p>
=======
            <img src={mockCelebList[0].image_url} alt={`A picture of ${mockCelebList[0].name}`} />
            <h2>{mockCelebList[0].name}</h2>
            <p>{mockCelebList[0].info}</p>
>>>>>>> fa96cae469c8231df8747766cee3c129cdcee1d8
        </div>
    )
}

export default CelebrityCard;