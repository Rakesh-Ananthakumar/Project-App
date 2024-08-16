
import React, { useContext } from 'react';
import {
    Container,
    Card,
    CardContent,
    Button,
    Typography,
    Grid,
    Avatar,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import OrderIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountIcon from '@mui/icons-material/AccountCircle';
import { UserContext } from '../context/UserContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';

const ProfilePage = () => {
    const { user,logout } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/'); 
    };

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <>
        <NavBar/>
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Card>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
                            <Avatar sx={{ width: 80, height: 80, margin: 'auto' }}>
                                <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
                            </Avatar>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h5" component="div" gutterBottom>
                                {user.firstName} {user.lastName}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                {user.email}
                            </Typography>
                            
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<EditIcon />}
                                style={{ marginTop: '1rem' }}
                            >
                                Edit Profile
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider style={{ margin: '2rem 0' }} />
                    <Typography variant="h6" gutterBottom>
                        Recent Orders
                    </Typography>
                    <List>
                        <ListItem>
                            <OrderIcon style={{ marginRight: '1rem' }} />
                            <ListItemText
                                primary="Order #1234"
                                secondary="Placed on January 1, 2024"
                            />
                        </ListItem>
                        <ListItem>
                            <OrderIcon style={{ marginRight: '1rem' }} />
                            <ListItemText
                                primary="Order #5678"
                                secondary="Placed on February 15, 2024"
                            />
                        </ListItem>
                    </List>
                    <Divider style={{ margin: '2rem 0' }} />
                    <Typography variant="h6" gutterBottom>
                        Account Settings
                    </Typography>
                    <List>
                        <ListItem>
                            <AccountIcon style={{ marginRight: '1rem' }} />
                            <ListItemText primary="Update Email" />
                        </ListItem>
                        <ListItem>
                            <AccountIcon style={{ marginRight: '1rem' }} />
                            <ListItemText primary="Change Password" />
                        </ListItem>
                    </List>
                    <Divider style={{ margin: '2rem 0' }} />

                    <Grid container justifyContent="flex-end">
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<LogoutIcon />}
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
        </>
    );
};

export default ProfilePage;
