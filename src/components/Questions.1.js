import Options from './Options'
export default function Questions({ question }) {
    console.log(question);
    return (<div className="options">
        <h4>{question.question}</h4>
        {<Options question={question} />}
    </div>);
}
