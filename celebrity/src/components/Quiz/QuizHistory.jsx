import React, { useState } from 'react';

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
        <div className="history_wrapper">
            <div className="score_wrapper">
                <h2>Score</h2>
                <h3>{getCurrentScore()}</h3>
            </div>
            <div className="history_list">
                {quizHistory.map(obj => {
                    return <p>{obj.name} - {obj.correct ? 'true' : 'false'}</p>
                })}
            </div>
        </div>
    )
}

export default QuizHistory;