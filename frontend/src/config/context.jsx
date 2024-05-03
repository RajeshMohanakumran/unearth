import { createContext } from "react";
import { useState } from "react";
import runChat from "../config/unearth"
export const Context = createContext();

const ContextProvider = (props) => {
    const[input,setInput]=useState("");
    const[recentPrompt,setRecentPrompt]=useState("");
    const[prePrompts,setPrePrompts]=useState([]);
    const[showResult,setShowResult]=useState(false);
    const[loading,setLoading]=useState(false);
    const[resultData,setResultData]=useState("");
    
    const delayPara=(index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },75*index
        )
    }

    const newChat=()=>{
        setLoading(false)
        setShowResult(false)
        setResultData('')
        
    }

    
    const onSent=async(prompt)=>{
        setShowResult(" ")
        setResultData('')
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrePrompts(prev=>[...prev,input])
        const response=await runChat(input)
        let responseArray=response.split("**");
        let newResponse="";
        for (let i=0;i<responseArray.length;i++){
            if(i===0 || i%2!==1){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+='<h4>'+responseArray[i]+"</h4>"
            }
        }
        let newResponse2=newResponse.split("*").join("</br>")
        let newResponseArray=newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord=newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        //setResultData(newResponse2)
        setLoading(false)
        setInput("")


        await runChat(input)
    }
    
    const contextValue={
        prePrompts,
        setPrePrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;