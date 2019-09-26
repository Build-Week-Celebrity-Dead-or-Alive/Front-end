
import React from 'react'
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


const CelebCard = (props) => {
  return (
    <StyledCelebCard>
    <div className='celeb-card'>
      <img src={props.data.image_url} alt={props.data.name} />
      <h3>{props.data.name}</h3>
      <h4>{props.data.info}</h4>
      <h4>Birth Year: {props.data.born}</h4>
    </div>
      </StyledCelebCard>
  )
}

export default CelebCard