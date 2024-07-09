import './App.css';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ButtonGroup from '@mui/material/ButtonGroup';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Introduction from './components/Introduction';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Resume from './components/Resume';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Template from './components/Template';
import profileImage from "./images/profile-pic.png";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scheduleLink : "https://calendly.com/rafat-khandaker/30min",
      anchorElNav : false,
      anchorElUser : null,
      imgUrl : profileImage
    };
  }
  
  pages = [
    {display: 'Home', path: ""},
    {display: 'Introduction', path: "Introduction"}, 
    {display: 'Templates', path: "Template"}, 
    {display: 'Pricing', path: 'Pricing'},
    {display: 'Resume', path: 'Resume'}
  ];

  handleOpenNavMenu = () => { 
    this.setState(()=>({
      anchorElNav : !this.state.anchorElNav
    }));
  };

  setAnchorElUser =(event) => {}


  handleOpenUserMenu = (event) => {
    this.setAnchorElUser(event.currentTarget);
  };

  handleCloseNavMenu = () => {
    this.setState(()=>({
      anchorElNav : !this.state.anchorElNav
    }));
  };

  handleCloseUserMenu = () => {
    this.setAnchorElUser(null);
  };

router = createBrowserRouter([
  {path: "/", children: [ 
    { path:"", element: <Home/>},
    { path: "introduction",element: <Introduction />},
    {path: "template",  element: <Template /> },
    {path: "pricing",  element: <Pricing /> },
    {path: "blog",  element: <Blog /> },
    {path: "resume",  element: <Resume /> }
  ]
}]);

  render() {
    return (  
      <div  style={{height: "-webkit-fill-available", width: "-webkit-fill-available"}}>
        <div className="app-header">
          <div className="app-header-photo">
            <img className="header-photo" src={this.state.imgUrl}></img>
          </div>
          <AppBar style={{height: "fit-content", width: "82%", float: "right", background:"black"}} position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <PersonPinIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                  className="nav-hide-name"
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Rafat Khandaker
                </Typography>

                <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' }} }>
                  <IconButton
                    size="large"
                    style={{ right: "40%"}}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    style={{ left: "60%", background: 'black'}}
                    anchorEl={this.state.anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(this.state.anchorElNav)}
                    onClose={this.handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    <div className="side-appbar">
                      <img alt="Rafat Khandaker" src={this.state.imgUrl} class="photo-drawer"/>
                      {this.pages.map((page) => (
                        <a href={ "/"+page.path } >
                          <ButtonGroup key={page.display} style={{ width: '100%', background: 'black', paddingTop: 0, paddingBottom: 0, height: 50}}>
                            <Button  style={{backgroundColor: 'black', paddingTop: 0, paddingBottom: 0}} textAlign="center">{page.display}</Button>
                          </ButtonGroup>
                        </a>
                      ))}
                      <Button sx={{display: { xs: 'flex', md: 'none' }}} variant="contained" href={this.state.scheduleLink} startIcon={<CalendarMonthIcon />}>Schedule</Button>
                    </div>
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }} >
                </Typography>
                <Box style={{marginLeft: 50 }} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                  {this.pages.map((page) => (
                    <Button
                        key={page.display}
                        href={ "/"+page.path }
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                      {page.display}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 0, marginRight: "50px" }}>
                  <Tooltip title="Hydrablend Technology Owner">
                      <Button sx={{display: { xs: 'none', md: 'flex' }}}  style={{right: "1px", marginRight: 80}} variant="contained" href={this.state.scheduleLink} startIcon={<CalendarMonthIcon />}><b class='nav-scheduleButton'>Schedule Video Call</b></Button>
                  </Tooltip>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div> 
        <div className="side-panel-left"></div>
        <div className="side-panel-right"></div>
        <div className="app-body">
          <RouterProvider router={this.router} />
        </div>
        <footer class="footer">
          <div class="container">
              <div class="row">
                  <div class="credits ml-auto">
                      <span class="contact">
                          <p style={{color: "black"}}>Rafat.Khandaker.developer@gmail.com </p>
                      </span>
                      <span class="copyright">
                          <p style={{color: "black"}}>Copyright © 2024, made with <FontAwesomeIcon color={"crimson"} icon={faHeart}/> by Rafat Khandaker</p>
                      </span>
                  </div>
              </div>
          </div>
        </footer>
      </div>
    );
  }
  
}

export default App;
