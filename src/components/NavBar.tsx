import { AppBar, Box, Button, Divider, Drawer, IconButton, List, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logout, Login, Home, AddShoppingCart, AccountCircle } from '@mui/icons-material';
import { useAuth } from '../AuthContext';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

export default function NavBar(props: Props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        alert('Are you sure you want to logout ?');
        logout();
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {!isAuthenticated ?
                    <div>
                        <Button color="inherit" component={Link} to="/signUp" startIcon={<Login />} > SignUp </Button>
                    </div>
                    :
                    <div style={{ textAlign: 'center' }}>
                        <Button color="inherit" component={Link} to="/home"> <Home /> </Button>
                        <Button color="inherit" component={Link} to="/you"> <AccountCircle /> </Button>
                        <Button color="inherit" component={Link} to="/card"> <AddShoppingCart /> </Button>
                        <Button color="inherit" component={Link} to="/" endIcon={<Logout />} onClick={handleLogout}> Logout </Button>
                    </div>
                }
            </List>
        </Box>
    );

    const Container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar component="nav" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {!isAuthenticated ?
                            <div>
                                <Button color="inherit" component={Link} to="/signUp" startIcon={<Login />} > SignUp </Button>
                            </div>
                            :
                            <div style={{ textAlign: 'center' }}>
                                <Button color="inherit" component={Link} to="/home"> <Home /> </Button>
                                <Button color="inherit" component={Link} to="/you"> <AccountCircle /> </Button>
                                <Button color="inherit" component={Link} to="/card"> <AddShoppingCart /> </Button>
                                <Button color="inherit" component={Link} to="/" endIcon={<Logout />} onClick={handleLogout}> Logout </Button>
                            </div>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={Container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
}
