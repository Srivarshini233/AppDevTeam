import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from './CartIcon';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = (props) => {
  const { window } = props;
  const { isAuthenticated, currentUser, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/products?search=${searchQuery}`);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <StoreIcon sx={{ my: 2, fontSize: 40, color: '#00796b' }} /> {/* Updated color */}
      </Link>
      <List>
        {['Home', 'Contact'].map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              {index === 0 && <HomeIcon sx={{ mr: 1, color: '#00796b' }} />} {/* Updated color */}
              {index === 1 && <ContactMailIcon sx={{ mr: 1, color: '#00796b' }} />} {/* Updated color */}
              <ListItemText primary={item} sx={{ color: 'black' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: '#e0f7fa' }}> {/* Adjusted background color */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#00796b' }} // Updated color
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://thetoystorelb.com/images/logo-3d.png"
                alt="Logo"
                style={{ height: '80px', marginRight: '400px' }}
              />
            </Link>
            <form onSubmit={handleSearchSubmit} style={{ width: '100%' }}>
              <TextField
                placeholder="Search..."
                variant="outlined"
                size="small"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{width: '50%', backgroundColor: 'white' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#00796b' }} /> 
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Link to="/" className="nav-item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 1, color: '#00796b' }} /> {/* Updated color */}
            </Link>
            <Link to="/contact" className="nav-item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
              <ContactMailIcon sx={{ mr: 1, color: '#00796b' }} /> {/* Updated color */}
            </Link>
            {isAuthenticated && currentUser?.role === 'admin' && (
              <Link to="/admin-dashboard" className="nav-item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                <AdminPanelSettingsIcon sx={{ mr: 1, color: '#00796b' }} /> {/* Updated color */}
                Admin Dashboard
              </Link>
            )}
            {isAuthenticated && currentUser?.role === 'user' && (
              <Link to="/user-dashboard" className="nav-item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                <DashboardIcon sx={{ mr: 1, color: '#00796b' }} /> {/* Updated color */}
                User Dashboard
              </Link>
            )}
            <Link to="/wishlist" className="nav-item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
              <FavoriteIcon sx={{ mr: 1, color: '#00796b' }} /> {/* Updated color */}
            </Link>
          </Box>
          <CartIcon sx={{ color: '#00796b' }} /> {/* Updated color */}
          {isAuthenticated ? (
            <Button color="inherit" onClick={logout} className="nav-item nav-button" sx={{ color: '#00796b' }}>
              Logout
            </Button>
          ) : (
            <Link to="/login" className="nav-item nav-button">
              <Button color="inherit" sx={{ color: '#00796b' }}>
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
