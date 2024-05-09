/* eslint-disable */
import { useEffect, useState } from "react"
import LapList from "./LapList"
import TimeControls from "./TimeControls"
import TimeDisplay from "./TimeDisplay"


//Compenente 
function Time() {
  
  const [ milliseconds, setMilliseconds ] = useState(0)
  const [ timeOn, setTimeOn ] = useState(false)
  const [ laps, setLaps ] = useState([])


  // Formatação do minutos, segundo e milésimos 
  const formatTime = () => {
    const minutos = ('0' + Math.floor(milliseconds / 60000) % 60).slice(-2)
    const seconds = ('0' + Math.floor(milliseconds / 1000) % 60).slice(-2)
    const centiseconds = ('0' + Math.floor(milliseconds / 10) % 100).slice(-2)

    return `${minutos}:${seconds}:${centiseconds}`
  }

  // Estartando os contadores
  const starTimer = () => {
    return setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10)
    },10)
  }

  const resetTime = () => {
    setMilliseconds(0)
    setTimeOn(false)
    setLaps([])
  }

  const addLaps = () => {
    setLaps([...laps, formatTime()])
  }

  const stopTime = (interval) => {
    clearInterval(interval)
    return interval
  }

  useEffect(() => {
    let interval = null

    if (timeOn) {
      interval = starTimer(interval)
    }else {
      interval = stopTime(interval)
    }

    return () => stopTime(interval)
  }, [timeOn])


  

  return (
    <div className="flex flex-col place-items-center min-h-[50vh] w-[400px] bg-slate-400 p-5 font-sans rounded-xl">
      <TimeDisplay 
      time={formatTime()} 
      />
      <TimeControls
      onLap={addLaps}
      timeOn={timeOn}
      reset={resetTime}
      onStart={() => setTimeOn(true)} 
      onStop={() => setTimeOn(false)}
      />
      <LapList laps={laps} />
    </div>
  )
}

export default Time
