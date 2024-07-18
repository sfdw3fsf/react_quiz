import { useEffect } from "react";
function Timer({ dispatch, timeRemain }) {
    const min = Math.floor(timeRemain / 60)
    const second = timeRemain % 60
    useEffect(
        function () {
            const id = setInterval(() => {
                dispatch({ type: "stick" })
            }, 1000);
            return () => clearInterval(id)
        }
        , [dispatch])
    return <div className="timer">{min}:{second}</div>
}
export default Timer