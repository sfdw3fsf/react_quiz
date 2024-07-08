export default function Options({ question }) {
    return (question.options.map((op) => <button className="btn btn-ui" key={op} >{op}</button>))
}