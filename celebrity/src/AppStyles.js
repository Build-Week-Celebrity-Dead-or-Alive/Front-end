import styled from 'styled-components';

export const StyledGame = styled.div`
    display: flex;
    padding: 2rem;
    height: 100vh;
    justify-content: space-around;
`;
export const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    background-color: black;
    color: white;
    align-items: center;
    padding: 0 2rem;
    a {
        text-decoration:none;
        color: white;
        margin-left: 1rem;
    }
`;
export const StyledCard = styled.div`
    width:30vw;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 80vh;
    img {
        width: 80%;
        height: 40%;
    }
    .buttons {
       display: flex;
       button {
           width: 5rem;
           border-radius: 10px;
           height: 3rem;
           color: white;
           border: none;
           margin: 1rem;
           font-size: 1.5rem;
           cursor: pointer;
           &#dead{
               background-color:red;
           }
           &#alive{
               background-color:green;
           }
       }
    }
`;

export const StyledScoreBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;