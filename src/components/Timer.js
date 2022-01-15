import { useState, useEffect } from "react"

const Timer = ({ time }) => {
    const [timeRemaining, setTimeRemaining] = useState(time*60)
    const [isPaused, setIsPaused] = useState(false)

    let minutes = Math.floor(timeRemaining/60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let seconds = (timeRemaining % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    useEffect(() => {
        const timer = setTimeout(() => {
            if(isPaused) return
            if(timeRemaining === 0) return
            setTimeRemaining(timeRemaining - 1)
        }, 1000)
        // return () => clearTimeout(timer)
    }, [timeRemaining, isPaused])

    const pauseTimer = () => {
        console.log(isPaused)
        setIsPaused(!isPaused)
    }

    return (
        <div>
            <h2>{minutes}:{seconds}</h2>
            <button onClick={pauseTimer}>Pause</button>         
        </div>
    )
}

export default Timer