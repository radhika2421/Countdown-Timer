import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from "./components/Input.jsx"
import TimerStart from "./components/TimerStart.jsx"
import './App.css'

function App() {

  const [isStart, setIsStart]=useState(false);
  const [isPaused, setIsPaused]=useState(false);
  const [hours, setHours]=useState(0);
  const [mins, setMins]=useState(0);
  const [secs, setSecs]=useState(0);
  const [timerId, setTimerId]=useState(0);


  const resetTimer=()=>{
    setIsStart(false);
    setHours(0);
    setMins(0);
    setSecs(0);
    clearInterval(timerId);
  }
  const handleStart=() =>
  {
    if(hours<0 || mins<0 || (hours===0 && mins===0 && secs<=0))
    {
      alert("Invalid input!");
      return;
    }
    else{
      setIsStart(true);
    }
  }

  const handleReset=() =>
  {
    resetTimer();
  }

  const handlePause=() =>
  {
    setIsPaused(true);
    clearInterval(timerId);
  }

  const handleResume=() =>
  {
    setIsPaused(false);
    runTimer(hours,mins,secs,timerId);
  }

  const handleTimeChange=(e)=>
  {
    if(e.target.id==='hours')
    {
      setHours(e.target.value);
    }
    else if(e.target.id==='mins')
    {
      setMins(e.target.value);
    }
    else if(e.target.id==='secs')
    {
      setSecs(e.target.value);
    }
    console.log(hours, mins, secs);
  }

  const runTimer = (hours,mins,secs,tid)=>{
    if(secs>0){
      setSecs((s)=>s-1);
    }
    else if(secs===0 && mins>0){
      setSecs(59);
      setMins((m)=>m-1);
    }
    else if(mins===0 && secs===0 && hours>0 )
    {
      setSecs(59);
      setMins(59);
      setHours((h)=>h-1);
    }
    else if(mins===0 && secs===0 && hours===0)
    {
      alert("Time Up!");
      resetTimer();
    }
  }

  //hook
  useEffect(()=>{

    let tid;
      if(isStart)
      {
        tid=setInterval(()=>{
          runTimer(hours,mins,secs,tid);
        },1000)
        setTimerId(tid);
      }
      return()=>{
        clearInterval(tid);
      }
  },[isStart, hours,mins,secs])
  return (
    <div className='App'>
       <h1>Countdown Timer</h1>
       {
        !isStart && <Input 
        handleTimeChange={handleTimeChange}
        handleStart={handleStart}/>
        }

       {
        isStart && <TimerStart
        hours={hours}
        mins={mins}
        secs={secs}
        handlePause={handlePause}
        handleResume={handleResume}
        handleReset={handleReset}
        isPaused={isPaused} />
       }
    </div>
  )
}

export default App