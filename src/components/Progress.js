function Progress({ index, numberOfQuestions, points, maxPoints, answer }) {
    return (
        <div className="progress">
            <progress max={numberOfQuestions} value={index + Number(answer !== null)}></progress>
            <p>Question <strong>{index + 1}</strong>/{numberOfQuestions}</p>
            <p><strong>{points}</strong>/{maxPoints}</p>
        </div>
    )
}
export default Progress