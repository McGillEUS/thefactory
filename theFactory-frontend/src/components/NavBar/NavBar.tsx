import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import './NavBar.css';
import {useTheme} from "@mui/material/styles";
import {Switch} from "@mui/material";
import {EditOutlined, VisibilityOutlined} from "@mui/icons-material";
import {useGlobalState} from "../../state/GlobalState.tsx";

const menuPages: { name: string, url: string }[] = [
    {name: 'Home', url: '/'},
    {name: 'Office Hours', url: '/office-hours'},
    {name: 'Workshops', url: '/workshops'},
];

export function NavBar() {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [state, dispatch] = useGlobalState();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" style={{
            top: 0,
            margin: 0,
            padding: '.75rem 0 .25rem 0',
        }}>
            <Container className="flex">
                <Toolbar disableGutters className="flex flex-grow basis-full justify-between">
                    {/* Mobile Menu */}
                    <Box
                        sx={{
                            flex: 1,
                            flexGrow: 1,
                            flexBasis: '100%',
                            display: {xs: 'flex', md: 'none'},
                            justifyContent: 'space-between',
                            width: '100%',
                        }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {menuPages.map((page) => (
                                <MenuItem key={page.name} href={page.url}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem href="/login">
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem>
                        </Menu>
                        <Box component="img"
                             src={'src/assets/logo/factory_logo_inline_white.png'}
                             alt={'Factory Logo'}
                             sx={{
                                 height: '3rem',
                                 marginRight: '0.5rem',
                                 translate: '0 -0.6rem',
                                 display: {xs: 'flex', md: 'none'},
                             }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    <Box className="flex flex-row justify-start basis-full">

                        <Box
                            component="img"
                            src={'src/assets/logo/factory_logo_inline_white.png'}
                            alt={'Factory Logo'}
                            className="h-12 mr-2"
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                window.location.href = '/';
                            }}
                        />


                        <Box sx={{
                            display: {xs: 'none', md: 'flex'},
                            ":hover": {
                                bgColor: theme.palette.primary.light,
                            },
                            flexGrow: 1,
                        }}
                        >
                            {menuPages.map((page) => (
                                <Button
                                    key={page.name}
                                    href={page.url}
                                    sx={{my: 2, color: 'white', display: 'block', height: '2.25rem'}}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                        {state.isAdmin &&
                            <Switch
                                icon={<VisibilityOutlined sx={{fontSize: '1rem'}}/>}
                                checkedIcon={<EditOutlined sx={{fontSize: '1rem'}}/>}
                                checked={state.isEditing}
                                onChange={() => dispatch({isEditing: !state.isEditing})}
                                className="self-center"
                                sx={{
                                    display: {xs: 'none', md: 'flex'},
                                    margin: 0,
                                    '& .MuiSwitch-switchBase': {
                                        color: theme.palette.primary.main,
                                        backgroundColor: theme.palette.common.white,
                                        height: '1.5rem',
                                        width: '1.5rem',
                                        translate: '0.40rem 0.4rem',
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                            backgroundColor: theme.palette.common.white,
                                        },
                                        '&.Mui-checked': {
                                            backgroundColor: theme.palette.secondary.main,
                                            '&:hover': {
                                                color: theme.palette.primary.main,
                                                backgroundColor: theme.palette.secondary.main,
                                            }
                                        },
                                        '&.Mui-checked+.MuiSwitch-track': {
                                            backgroundColor: theme.palette.secondary.main,
                                        },
                                    },
                                    '& .MuiSwitch-track': {
                                        backgroundColor: theme.palette.common.white,
                                    },

                                }}
                            />
                        }

                        <Button
                            href="/login"
                            variant="text"
                            color="secondary"
                            className="justify-self-end self-center"
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                ":hover": {
                                    bgColor: theme.palette.primary.light,
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
