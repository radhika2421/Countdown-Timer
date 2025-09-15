const TimerStart=({hours,mins,secs,handlePause, handleResume,handleReset, isPaused})=>
{
    return (<div className='show-container'>
        <div className='timer-box'>
          <div>{hours<10 ? `0${hours}`:hours}</div>
          <span> : </span>
          <div>{mins<10 ? `0${mins}`:mins}</div>
          <span> : </span>
          <div>{secs<10 ? `0${secs}`:secs}</div>
        </div>

        <div className='action-box'>
          {
            !isPaused && (
              <button onClick={handlePause} className='timer-button'>Pause</button>
            )
          }
          {
            isPaused && (
              <button onClick={handleResume} className='timer-button'>Resume</button>
            )
          }
          <button onClick={handleReset} className='timer-button'>Reset</button>
        </div>
       </div>);
}

export default TimerStart;