export default function Options({ question, dispatch, answer }) {
    const hasAnswer = answer !== null;
    console.log(hasAnswer);
    return (question.options.map((op, index) => <button className={`btn btn-option ${hasAnswer ? index === question.correctOption ? 'correct' : 'wrong' : ""} ${index === answer ? "answer" : ""}`}
        onClick={() => dispatch({ type: "answer", answer: index })} disabled={hasAnswer} key={op}>{op}  </button>))
}