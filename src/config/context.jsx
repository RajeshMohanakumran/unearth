import { createContext } from "react";
import { useState } from "react";
import runChat from "../config/unearth"
export const Context = createContext();

const ContextProvider = (props) => {
    const[input,setInput]=useState("");
    const[recentPrompt,setRecentPrompt]=useState("");
    const[prePrompts,setPrevPrompts]=useState([]);
    const[showResult,setShowResult]=useState(false);
    const[loading,setLoading]=useState(false);
    const[resultData,setResultData]=useState("");
    

    
    const onSent=async(prompt)=>{
        setShowResult("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response=await runChat(input)
        let responseArray=response.split("**");
        let newResponse;
        for (let i=0;i<responseArray.length;i++){
            if(i===0 || i%2!==1){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+='<b>'+responseArray[i]+"</b>"
            }
        }
        setResultData(newResponse)
        setLoading(false)
        setInput("")


        await runChat(input)
    }
    
    const contextValue={
        prePrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;