import { createContext, useState } from "react";
import run from "../config/Gemini";
export const Context = createContext();

const ContextProvider = (props) => {

    const[input,setinput]=useState("")
    const[recentprompt,setrecentprompt]=useState("")
    const[previousprompt,setpreviousprompt]=useState([])
    const[showResult,setshowResult]=useState(false)
    const[loading,setloading]=useState(false)
    const[resultData,setresultData]=useState("")
    const delayPara=(index,nextWord)=>{ //typing effect
setTimeout(function()  {
    setresultData(prev=>prev+nextWord)
}, 75*index)
    }
  const onSent = async (prompt) => {
    setresultData("")
    setloading(true)
    setshowResult(true)
setrecentprompt(input)

   const response= await run(input);
   let responseArray=response.split("**");
   let newArray;
   for(let i=0;i<responseArray.length;i++){
    if(i==0||i%2!==1){
newArray+=responseArray[i];
    }
    else{
        newArray+="<b>"+responseArray[i]+"</b>"  //bold the text when get*
    }
   }
   let newArray2=newArray.split("*").join("</br>") //for getting into next line 
   let newResponseArray=newArray2.split(" "); // Typing effect
   for(let i=0;i<newResponseArray.length;i++){
    const nextWord=newResponseArray[i];
    delayPara(i,nextWord+" ")
   }
   setloading(false)
   setinput("")

  }
  
  const contextValue = {
previousprompt,
setpreviousprompt,
onSent,
setrecentprompt,
recentprompt,
showResult,
loading,
resultData,
input,
setinput
  }
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
