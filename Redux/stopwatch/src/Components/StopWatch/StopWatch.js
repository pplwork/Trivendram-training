import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import {useSelector,useDispatch} from 'react-redux';
import {updateTime, resetTime, addLap, dropLap} from '../../redux/actions/actions'
  
function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const time =  useSelector(state => state.time.time);
  const lap = useSelector(state =>state.laps.laps)
  const dispatch = useDispatch();
  

  React.useEffect(() => {
    if (isActive && isPaused === false) {
      dispatch(updateTime());
    } 
  }, [isActive, isPaused,time]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    let arr = [...lap];
    arr.reverse();

    if(arr.length>2)
    arr = arr.slice(arr.length -3,arr.length)

    if( isPaused && (arr.length === 0 || time!==arr[arr.length-1])){
      arr.push(time);
      arr.reverse();
      dispatch(addLap(arr))
    }
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    dispatch(resetTime());
    handleDrop();
  };
  const handleDrop = ()=>{
    dispatch(dropLap());
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