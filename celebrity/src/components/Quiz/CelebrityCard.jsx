import React from 'react';
import styled from 'styled-components';

const StyledCelebCard = styled.div`
    display: flex; 
    flex-direction: column;
    background-color: black;
    color: white;
    width: 25vw;
    align-items: center;
    padding: 4rem;
    img{
        width: 80%;
        height: 20rem;
    }
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