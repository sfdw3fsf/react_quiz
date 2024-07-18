function FinishScreen({ points, numberOfQuestions, dispatch }) {
    return (
        <><div className="result">
            <p>You have finish <strong>{points / 10}/{numberOfQuestions} correct answers</strong></p>
        </div><button className="btn" onClick={() => dispatch({ type: "restart" })}>Restart</button></>
    )
}
export default FinishScreen