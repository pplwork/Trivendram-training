import { useState,useEffect } from "react";

const useFetch = (url) => {

    //// setBlogs is a function which changes the left part.
    const[data,setData] = useState(null);
    const[isPending,setIsPending] = useState(true);
    const[isError,setIsError] = useState(null);
   
    useEffect(()=>{

        const abortCont = new AbortController();
        //returns an promise
        setTimeout(() => {
           fetch(url,{signal:abortCont.signal}).then(res=>{
               if(!res.ok){
                   throw Error('Not able To get any response from the server');
               }
               return res.json();
           })
           .then(data=>{
               setData(data);
               setIsPending(false)
               setIsError(null)
           })
           .catch(error=>{
               if(error.name ==='AbortError'){
                   console.log('fetch Aborted')
               }else{
                 setIsPending(false)
                 setIsError(error.message)
               }
           })
        }, 1000);
        return ()=> abortCont.abort();
   },[url]);

//useEffect(()=>{},[]) , this will make this function to run only once [] dependency array,
// It will mamke useEffect run only when the state related to that dependency is changed
  return {data,isPending,isError};
}
 
export default useFetch;