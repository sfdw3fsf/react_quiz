import Options from "./Options";
export default function Questions({ question, dispatch, answer, index, numberOfQuestions }) {
    console.log(question);
    return (
        <>
            <div className="options">
                <h4>{question.question}</h4>
                {<Options question={question} dispatch={dispatch} answer={answer} />}
            </div>
            {answer !== null ? (
                <button
                    className="btn btn-ui"
                    onClick={() =>
                        index + 1 < numberOfQuestions ? dispatch({ type: "nextAnswer" }) : dispatch({ type: "finish" })}
                >
                    Next
                </button>
            ) : (
                ""
            )}
        </>
    );
}
