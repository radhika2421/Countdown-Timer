


const Input=({handleTimeChange,handleStart})=>{
    return (<div className='input-container'>
          <div className='input-box'>
            <input id='hours' onChange={handleTimeChange} placeholder='HH' />
            <input id='mins' onChange={handleTimeChange} placeholder='MM' />
            <input id='secs' onChange={handleTimeChange} placeholder='SS' />
          </div>
          <button onClick={handleStart} className='timer-button'>Start</button>
        </div>);
}

export default Input;