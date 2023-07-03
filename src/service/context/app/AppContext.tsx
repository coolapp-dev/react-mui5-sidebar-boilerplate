import React, { useState, useEffect,createContext } from "react";





interface AppContextProviderProps {
  children: React.ReactNode
}

function retrieveAccessTokenFake(): Promise<string> {
  return Promise.reject("Non implemented");
}

export const AppContext = createContext<{value:string,fn:()=>Promise<string>}>({ value:"",fn:retrieveAccessTokenFake});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
 

  
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