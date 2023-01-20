import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import WidgetDrawer from './WidgetDrawer';
import AppBar from './AppBar'

import './App.css';
 

import {
  useLocation
} from "react-router-dom";

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    console.log(["pageview", location.pathname]);
  }, [location]);
}



export default function MainLayout() {

  //usePageViews() 

  const mainContainerRef = useRef<HTMLDivElement|null>(null)
  const outletContRef = useRef<HTMLDivElement|null>(null)


  const [scrollMainBlock, setScrollMainBlock] = useState(false)
  let location = useLocation();

  // const [scrollData,setScrollData]=useState(
  //   {
  //     clientHeight:0, 
  //     scrollHeight:0
  //   }
  // )
  




  // useEffect(()=>{
  //   if (undefined==outletContRef.current || null==outletContRef.current) return


  //   const {clientHeight, scrollHeight} =  outletContRef.current
  //   console.log("outletContRef.useLayoutEffect called", {clientHeight, scrollHeight} )
  //   setScrollData( {clientHeight, scrollHeight})

  // },[outletContRef.current ] )

  return (
    <Box 
      className='layout-root-node' 
      component="div"  
      sx={{
        height: '100vh' ,
        display: 'flex',  
        flexDirection:"column", 
        background:"maroon" 
      
      }}    
      data-testid="layoutroot-testid">
          <AppBar />
          <Box   
              component="div" 
              sx={{ 
                  display: 'flex', 
                  flexDirection:"row" ,  
                  overflow: "hidden",   
                  background:"azure" ,
                  flex:1
       //           height:"100%"
                  }} >
                <Box
                    ref={mainContainerRef}
                    component="div"
                    sx={{ 
                      flexGrow: 1,  
                      // overflowY:scrollMainBlock ? "scroll" : "hidden",   
                      // overflowY:"scroll",
                      background:"bluesky" ,
                      display: 'flex',  
                      flexDirection:"column",
                      //  height:"100%"
                    }}
                >
                    <div className="App">
                        <div className="App-header" ref={outletContRef} >
                            
                            <Outlet />
                        </div>
                    </div>
                </Box>
              <WidgetDrawer /> 
          </Box>

    </Box>
  );
}