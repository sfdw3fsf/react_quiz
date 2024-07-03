function StartScreen({ numberQuestion, dispatch }) {
    return (<div className="start">
        <h2>Sola em pas hd ed sherran</h2>
        <h3>{numberQuestion} Ko la lumba ndu yh</h3>
        <button className="btn btn-ui" onClick={() => dispatch({ type: 'start' })}>Let's Start</button>
    </div>)
}
export default StartScreen;