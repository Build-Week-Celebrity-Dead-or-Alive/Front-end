import React from 'react';
import styled from "styled-components";

const StyledQuizHistory = styled.div`
    .check-mark {
        color: green;
    }

    .error-ex {
        color: red;
    }
`;

function QuizHistory(props) {
    const { quizHistory, getCurrentScore } = props;


    return (
        <StyledQuizHistory>
            <div className="history_wrapper">
                <div className="score_wrapper">
                    <h2>Score</h2>
                    <h3>{getCurrentScore()}</h3>
                </div>
                <div className="history_list">
                    {quizHistory.map(obj => {
                        if (obj.correct) {
                            return <p>{obj.name} <span className="check-mark">&#10004;</span></p>
                        }
                        else {
                            return <p>{obj.name} <span className="error-ex">&#10006;</span></p>
                        }
                    })}
                </div>
            </div>
        </StyledQuizHistory>
    )
}

export default QuizHistory;