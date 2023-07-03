import React, {useState, useEffect } from 'react'
import Divider from '@mui/material/Divider';
import ControlsWrapper from './controls/ControlsWrapper';
import { Button, Box } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';


type VersionInfoObj = {
    sha:string,
    tag: string,
    date:string
}


const VersionInfo = ()=>{

    const [version_info, set_version_info] = useState<VersionInfoObj|null>(null)

    useEffect(()=>{

        fetch("/version.json", {
            method:"GET", 
            
            })
            .then(response => {
              if (response.ok) return response.json();
              else throw Error(`Server returned ${response.status}: ${response.statusText}`)
            })
            .then((data)=>{

              console.log("fetch data finish", data)
              set_version_info(data)
            })
        

    },[])

    return(
        <Box   component="div">
          <Divider />                        
          <ControlsWrapper 
                title={"Sample.App@2023"}
                subheader={version_info?`sha:${version_info.sha}`:"unknown"} 
                icon={<CopyrightIcon />} 
                expanded={false}
                expand={()=>{}}
                    
            >
            </ControlsWrapper>
        </Box>

    )
}



export default VersionInfo