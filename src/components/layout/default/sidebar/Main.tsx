
import ControlsWrapper from "../../../common/sidebar/controls/ControlsWrapper"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box } from "@mui/material"
import Divider from '@mui/material/Divider';
import VersionInfo from "../../../common/sidebar/VersionInfo";
import CopyrightIcon from '@mui/icons-material/Copyright';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import StyledTopSection from '../../../common/sidebar/sections/styled/Main'
import HomeIcon from '@mui/icons-material/Home';
import InterestsIcon from '@mui/icons-material/Interests';
import ViewListIcon from '@mui/icons-material/ViewList';
  const HomeSidebarMain = (props:{
    onClick:(name:string)=>void
}) => {
    const {onClick}  = props
    return (
        <Box component="div" sx={{ display:"flex", flexDirection:"column", flexGrow:1}}>
          
            <ControlsWrapper
                title="Home"
                subheader="Subheader string"
                icon={<HomeIcon />}
                expanded={false}
                expand={() => onClick('')}
            ></ControlsWrapper>

            {/* <ControlsWrapper
                title="Projects"
                subheader="Subheader string"
                icon={<InterestsIcon />}
                expanded={false}
                expand={() => onClick('projects')}
            ></ControlsWrapper> */}

{/* 
            <ControlsWrapper
                title="Blocks"
                subheader="Subheader string"
                icon={<RadioButtonCheckedIcon />}
                expanded={false}
                expand={() => onClick('blocksview')}
            ></ControlsWrapper> */}


            {/* <ControlsWrapper
                title="TestList2"
                subheader="Subheader string"
                icon={<ViewListIcon />}
                expanded={false}
                expand={() => onClick('testlist2')}
            ></ControlsWrapper> */}

            <ControlsWrapper
                title="WidgetA"
                subheader="Subheader string"
                icon={<RadioButtonCheckedIcon />}
                expanded={false}
                expand={() => onClick('widgeta')}
            ></ControlsWrapper>

            <ControlsWrapper
                title="About"
                subheader="Subheader string"
                icon={<ViewListIcon />}
                expanded={false}
                expand={() => onClick('about')}
            ></ControlsWrapper> 

        <Box component="div" sx={{ flexGrow:1 }}> </Box>
            <Divider />
            <VersionInfo />
        </Box>
      

    )
}


export default HomeSidebarMain

