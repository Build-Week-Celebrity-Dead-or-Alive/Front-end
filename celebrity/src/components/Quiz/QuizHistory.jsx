import React, { useState } from 'react';
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

    const dummyHistoryData = [{ name: 'Tupac Shakur', correct: true }, { name: 'Biggie Smalls', correct: false }]
    const { quizHistory, mockCelebList } = props;
    function getCurrentScore() {
        let true_count = 0;
        let total_count = mockCelebList.length;
        quizHistory.forEach(element => {
            true_count += element.correct ? 1 : 0
        })
        return (`${true_count}/${total_count}`);
    }

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