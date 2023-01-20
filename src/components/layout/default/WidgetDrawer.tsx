
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
 import SidebarWrapper from './sidebar/Main';

 import { useNavigate, useParams } from "react-router-dom";
 

const drawerWidth = 240
const  WidgetDrawer = ()=>{
    const navigate = useNavigate();
    const onSidebarMenuItemClick = (name:string)=>{
      console.log("[onSidebarMenuItemClick]", name)
      navigate(`/${name}`);


    }


    return (
        <Drawer
        sx={{
          width: drawerWidth,
      //    overflow:"hidden" ,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            display: "flex",
            flexDirection: "column",
            mt:9,
            pb:8,
          //  boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
 
        <Box   component="div"
            sx={{
              flexGrow:1,
              // background:"yellow",
              display: "flex",
              flexDirection: "column",
            }}>
          <SidebarWrapper  onClick={onSidebarMenuItemClick} />
        </Box>
        
        
      </Drawer>
    )
}


export default WidgetDrawer