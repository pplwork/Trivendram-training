import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
  
function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const[lap,setLap]   = useState([]);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    let arr = [...lap];
    arr.reverse();

    if(arr.length>2)
    arr = arr.slice(arr.length -4,arr.length)

    if( isPaused && (arr.length === 0 || time!==arr[arr.length-1])){
      arr.push(time);
      arr.reverse();
      setLap(arr)
    }
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  
  return (
    <div className="stop-watch">
      <Timer time={time} />
      {
         lap.map((item)=>{
           return <div key={item}>
             <div className="lap">
                <span className="lapdigits">
                  {("0" + Math.floor((item/ 60000) % 60)).slice(-2)}:
                </span>
                <span className="lapdigits">
                  {("0" + Math.floor((item/ 1000) % 60)).slice(-2)}.
                </span>
                <span className="lapdigits lapmili-sec">
                  {("0" + ((item/ 10) % 100)).slice(-2)}
                </span>
                </div>
          </div>
         }) 
      }
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
      
    </div>
  );
}
  
export default StopWatch;