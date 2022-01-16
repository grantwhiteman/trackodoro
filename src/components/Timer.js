import { useState, useEffect } from "react"

const Timer = ({ time, addTomato }) => {
    const [timeRemaining, setTimeRemaining] = useState(time*60*100)
    const [isPaused, setIsPaused] = useState(false)

    let minutes = Math.floor(timeRemaining / 60 / 100).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let seconds = (Math.floor(timeRemaining / 100 % 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let miliseconds = (timeRemaining % 100).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    useEffect(() => {
        const myTimer = setTimeout(() => {
            if(isPaused) return
            if(timeRemaining === 0) return addTomato()
            setTimeRemaining(timeRemaining - 1)
        }, 10)
        return () => clearTimeout(myTimer)
    }, [timeRemaining, isPaused])

    const pauseTimer = () => {
        setIsPaused(!isPaused)
    }

    return (
        <div>
            <h2>{minutes}:{seconds}.{miliseconds}</h2>
            <button onClick={pauseTimer}>{isPaused ? 'Resume' : 'Pause'}</button>         
        </div>
    )
}

export default Timer