// import DateCounter from './DateCounter.js'
import { useEffect, useReducer } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Loader from './Loader.js'
import Error from './Error.js'
import Questions from "./Questions.1.js"
import StartScreen from './StartScreen.js'
import Progress from './Progress.js'
import FinishScreen from './FinishScreen.js'
import Footer from './Footer.js'
import Timer from './Timer.js'
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  timeRemain: 310
}
function reducer(state, action) {
  switch (action.type) {
    case "received":
      return { ...state, questions: action.data, status: "received" }
    case "start":
      return { ...state, status: "start" }
    case "answer":
      const question = state.questions.at(state.index)
      console.log(action.answer)
      return {
        ...state, answer: action.answer,
        points: action.answer === question.correctOption ? state.points + question.points : state.points
      }
    case "nextAnswer":
      return {
        ...state, index: state.index + 1, answer: null
      }
    case "finish":
      return {
        ...state, status: "finish",
      }
    case "restart":
      return {
        ...initialState, status: "start", questions: state.questions
      }
    case "stick":
      return {
        ...state, timeRemain: state.timeRemain - 1,
        status:
          state.timeRemain === 0 ? "finish" : state.status
      }
    default:
      break;
  }
}
export default function App() {

  const [{ questions, status, index, answer, points, timeRemain }, dispatch] = useReducer(reducer, initialState)
  const maxPoints = questions.reduce((pre, cr) => pre + cr.points, 0)
  useEffect(() => {
    fetch("http://localhost:9000/questions").then(
      (res) => res.json()
    ).then((data) => dispatch({ type: "received", data: data }))
  }, [])
  const nb = questions.length
  console.log(index)
  console.log(nb)
  console.log(status)
  return (
    <div className='app'>
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "received" && <StartScreen numberQuestion={nb} dispatch={dispatch} />}
        {status === "start" && (
          <><Progress index={index} numberOfQuestions={nb} points={points} maxPoints={maxPoints} answer={answer} />
            <Questions question={questions[index]} dispatch={dispatch} answer={answer} index={index} numberOfQuestions={nb} />
            <Footer>
              <Timer dispatch={dispatch} timeRemain={timeRemain} />
            </Footer>
          </>)}
        {status === "finish" && <FinishScreen points={points} numberOfQuestions={nb} dispatch={dispatch} />}
      </Main>

    </div>
  )
}