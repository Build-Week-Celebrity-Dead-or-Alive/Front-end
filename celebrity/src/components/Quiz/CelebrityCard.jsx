import React from 'react';
import styled from 'styled-components';

const StyledCelebCard = styled.div`
    display: flex; 
    flex-direction: column;
    background-color: black;
    color: white;
    width: 30vw;
    align-items: center;
    height: 60vh;
    justify-content: center;
    img{
        width: 60%;
        height: 60%;
    }
    border-radius: .3rem;
`;

function CelebrityCard({ currentCard,loading }) {

    return ( !loading ?
        <StyledCelebCard>
            <img src={currentCard.image_url} alt={`${currentCard.name}`} />
            <h2>{currentCard.name}</h2>
            <p>{currentCard.info}</p>
        </StyledCelebCard> : <p>loading...</p>
    )
}

export default CelebrityCard;