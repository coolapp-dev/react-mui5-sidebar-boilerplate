import React, { useState, useEffect,createContext } from "react";


import  {useActor} from '@xstate/react'
import {service as mainService} from '../../main'



interface AppContextProviderProps {
  children: React.ReactNode
}

function retrieveAccessTokenFake(): Promise<string> {
  return Promise.reject("Non implemented");
}

export const AppContext = createContext<{value:string,fn:()=>Promise<string>}>({ value:"",fn:retrieveAccessTokenFake});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
 

   
  const [state, send] = useActor(mainService)
  
  let value="",
      fn=retrieveAccessTokenFake



  useEffect(()=>{
      console.log("AppContext useEffect called")
  } ,[])






  return (
    <AppContext.Provider value={{ value, fn  }}>
      {children}
    </AppContext.Provider>
  );
};