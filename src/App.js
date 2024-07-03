// import DateCounter from './DateCounter.js'
import { useEffect, useReducer } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Loader from './Loader.js'
import Error from './Error.js'
import Questions from './Questions.js'
import StartScreen from './StartScreen.js'
function reducer(state, action) {
  switch (action.type) {
    case "received":
      return { ...state.questions, questions: action.data, status: "received" }

    case "start":
      return { ...state, status: "start" }
    default:
      break;
  }
}
export default function App() {
  const initialState = {
    questions: [],
    status: "loading"
  }
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetch("http://localhost:9000/questions").then(
      (res) => res.json()
    ).then((data) => dispatch({ type: "received", data: data }))
  }, [])
  const nb = questions.length
  console.log(nb)
  return (
    <div className='app'>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "received" && <StartScreen numberQuestion={nb} dispatch={dispatch} />}
        {status === "start" && <Questions />}
      </Main>
    </div>
  )
}