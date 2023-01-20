import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import Badge from '@mui/material/Badge';

import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

 
import Modal from '@mui/material/Modal';
//import LoginRedirecModalContent from '../../../pages/anonimous/LoginRedirectLoadingModal';


import {
  useNavigate
} from "react-router-dom"; 


const pages = [ 'Docs', 'Blog'];
 

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#0ca878',
  border: '1px solid dimgray',
  borderRadius:2,
  boxShadow: 24,
  p: 1,
  color:"#044245"
};





function ResponsiveAppBar() {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(()=>{
    
      return true
    });
    
  }
  const handleCloseModal = () => {}//setOpenModal(false);



  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };





  const handleLogoutClick = ()=>{
    console.log("handleLogoutClick called")

  }


  return (
    <AppBar position="static"  sx={{ backgroundColor:"#B73C58" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <FreeBreakfastOutlinedIcon sx={{ display:  'flex', mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
          //  href="/"
            onClick={()=>navigate("/")}
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor:"pointer"
            }}
          >
             Sample.App
          </Typography>

  

          <Box sx={{ flexGrow: 0, display:  'flex' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1  }}></Box>

          <Box sx={{ display:  'flex' , pr:1 }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
 
          </Box>

          <Box sx={{ flexGrow: 0, }}>
            <Tooltip title="">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon     sx={{ color: "#fff",fontSize:40 }}  />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                <MenuItem onClick={handleOpenModal}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {/* <LoginRedirecModalContent /> */}
        </Box>
      </Modal>
    </AppBar>
  );
}
export default ResponsiveAppBar;
