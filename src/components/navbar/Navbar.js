import * as React from 'react';
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router';
import './Navbar.css';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Box, Drawer, CssBaseline, Toolbar, List, Divider,
IconButton, ListItem, ListItemIcon, ListItemText, Avatar, Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import NoteIcon from '@mui/icons-material/Note';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  background: "#1565D8",
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
}));

const StyledList = styled(List)({
    // selected and (selected + hover) states
    '&& .Mui-selected, && .Mui-selected:hover': {
      backgroundColor: '#1D2B4F;',
      '&, & .MuiListItemIcon-root': {
        color: '#FFFFFF',
      },
    },
    // hover states
    '& .MuiListItemButton-root:hover': {
      backgroundColor: 'orange',
      '&, & .MuiListItemIcon-root': {
        color: 'yellow',
      },
    },
});

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  setInterval(() => {
    if (window.screen.width > 1000) {
      setOpen(true)
    }
  }, 1000);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
            sx={{
                background: 'white',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <IconButton
                    color="default"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
            </IconButton>
            <div className="flex gap-6 topProfileArea">
                <div className="pt-2">
                    <Badge badgeContent={4} color="primary">
                        <NotificationsIcon color="action" />
                    </Badge>
                </div>
                <div>
                    <Avatar alt="Remy Sharp" src="https://cdn.vuetifyjs.com/images/john.png" />
                </div>
            </div>
        {/* <div className="grid grid-cols-5 gap-2">
            <div className="col-span-4">
                
            </div>
            <div className="col-span-1">
                
            </div>
        </div> */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#1565D8',
            color: 'white'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAeCAYAAAAcsu0PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUKSURBVHgB7ZrdceJIEMf/I1N3t0/HZaB9tF8WR3BsBIcjQERgOwLjCNZEINgEjCNAjmC5qjv73qyNwOzTubaMZrtFywxiwMZIwrD6VU2BWvPRM+qZ6R5JYQ2i256GwkhpNaTf4TgaX1cOWn2U7CQKaxAbyzyhgtN9wGPv3X4rRMnO4CB7XI2o/SucweM/voeSnSEPY0lwnT3H1/99/oSSnSBPY4nRWp+Mbz/7KNl6cjcWRkF75Qqz/RRiLEy8wtz4JyjJFRpnl1JdUg0Zkkc0tKy1kfo/eq8OWyOsCHWctzJXLntKqW7qPg/M0+pF9z8iB6gdbqO2SI8FZar0c2mIPCr3FSvw0nYpH8ubchlkOQ4VFIlGNfrF4dWljdWpY2os15b7VcmTNzWjnRk96EF5xmWfHlQyKbLQbWG7L4F0a4gezJB0G2JFijUWQu3hWH/xL16zumwBpiM/oLSJPgbgaTkhNOTHmBrbOaW3byy8ujz+Fs+SACWZI9tTFzlQmIM706h2GigQ9mcoDSjd6wl37AOIL5HkYYfQl3sJ9yJzn6n/ksulxIHUdWEpcij6JPimLuvAgYS0eyf1NkQ309k9TvIY5dJjNNf34lcWwnHwJ9ajSZ1I12EdbNmrL1NilxL7TjyAiQN4hnm/guv0WE71HBo+CCz5XEsbzO+W/D5m9fUofROd1sXUxYVdtyqM9sUgBpjVKek7j9EhCzaysuh55VfFxeTBmmlRmGie73ykB84R4KlcxyGm/L/CZGvk/fxIUmi0tywM7Uk5k47Iriz52ehalPqGrIl8GIoeoSELRJbobBrKaWqMeMWJjXgjKwv7LViPEeadx5nZEjczMQRXLoeGzHTu+CFxiMnbxYXMMrNM8p/LBbCQhLFU9swQf0rCY8s2dsTRCMlD+t8w9M8ciXqGshK7Ir4meVt0qxnyUPLWMen7CNNI7qKy8lnJ26CTdDZBOjhI5TMfQM1yn/lDynO00EZODy3FPd4OZn9d2Mco3korfFCWwUxfDVVYSBmm/rcseUZiaBdGvmTZ9jC/PRSle1GMUv+PFuXhbSjE8v04e/TqB0KvJMR0KXUp8VKc+BB1vqYV6ih1mDbibUWiE5sj/s34z442188HcKHRFsNb2pXIsu6vzcFnvCVlvqbKx1u59DXE1BnmycE+GMvqlP6CTDJHR9HKp4HrQsr9jQKQ6OXUELUpfZHEjm9DVpU+pjOMHTreJjisdC3Vmk6pK/XU5dp0ZtkX4ajHQ/a4mHfw68+U6abKs95JyG6uuB4mWxH3n/VviAxOpGY6XwgOogAFIc4nL63p2c3GEWAyu5LlN5R7VbnftdTH49WxtxaHvr2U7APeAKR3gPmoiHHlHh8hBJaiQSJXdPRe1e+cuwL9ltDZb77HBpBZ5EKiKdu5iUQHI9lWnquL84bpvGY7z9WzCfT0bXSYHoNlYxS/dR7/67eV45yhACj0Ot/bb7ZRsnXEh3LOd4oEiolQwu+IuijZSmJj4TfA5OieI2ciROflF//by9Nx/95Bi0K9qIOc0Bqdyn6ri5KtZe5LufFNr0tvBjJ9T0F+So/8FA8lW83ci8S9g6aX5QrDK0ppKLuB9a0zbUkn5F/wQU2I16L4GD06JeM7QclOsPSDbX3ruxF/XAyHtyUXL6uRjaTjPGBXP538aXnx1/2PN36DjKaulP5Ax4G1p0O8OOTWoY7UdaSifuUBw9JIdpMfS3J2QWiIEKoAAAAASUVORK5CYII=" alt="logo" />
            <IconButton onClick={handleDrawerClose} className="hideSideBar">
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider /> 
        <StyledList>
            <ListItem sx={{ marginBottom: '1rem' }} component={Link} to="/dashboard" selected={'/dashboard' === location.pathname ? true : false}>
              <ListItemIcon sx={{ color: 'white'}}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Dashboard</ListItemText>
            </ListItem>
            <ListItem sx={{ marginBottom: '1rem'}} button>
              <ListItemIcon sx={{ color: 'white'}}>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Waiting Room</ListItemText>
            </ListItem>
            <ListItem sx={{ marginBottom: '1rem'}} component={Link} to="/schedule" selected={'/schedule' === location.pathname ? true : false}>
              <ListItemIcon sx={{ color: 'white'}}>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Schedule</ListItemText>
            </ListItem>
            <ListItem sx={{ marginBottom: '1rem'}} button>
              <ListItemIcon sx={{ color: 'white'}}>
                <PersonAddAlt1Icon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>My Patients</ListItemText>
            </ListItem>
            <ListItem sx={{ marginBottom: '1rem'}} button>
              <ListItemIcon sx={{ color: 'white'}}>
                <NoteIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Notes</ListItemText>
            </ListItem>
            <ListItem sx={{ marginBottom: '1rem'}} button>
              <ListItemIcon sx={{ color: 'white'}}>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Chats</ListItemText>
            </ListItem>
        </StyledList>
        <StyledList sx={{ marginTop: '7rem' }}>
            <ListItem sx={{ marginBottom: '1rem'}} button>
              <ListItemIcon sx={{ color: 'white'}}>
                <Avatar alt="Remy Sharp" src="https://cdn.vuetifyjs.com/images/john.png" />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>My Profile</ListItemText>
            </ListItem>
            <ListItem sx={{ marginBottom: '1rem'}} button>
              <ListItemIcon sx={{ color: 'white'}}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Settings</ListItemText>
            </ListItem>
            <ListItem sx={{ marginBottom: '1rem'}} button onClick={handleLogout}>
              <ListItemIcon sx={{ color: 'white'}}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Logout</ListItemText>
            </ListItem>
        </StyledList>
      </Drawer>
    </Box>
  );
}
