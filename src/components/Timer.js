import { useState, useEffect } from "react"

const Timer = ({ time }) => {
    const [timeRemaining, setTimeRemaining] = useState(time*60)
    let minutes = Math.floor(timeRemaining/60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let seconds = (timeRemaining % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    useEffect(() => {
        setTimeout(() => {
            if(timeRemaining === 0) return
            setTimeRemaining(timeRemaining - 1)
        }, 1000)
    }, [timeRemaining])

    return (
        <div>
            <h2>{minutes}:{seconds}</h2>
            <button>Pause</button>         
        </div>
    )
}

export default Timer