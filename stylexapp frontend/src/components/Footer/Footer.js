import React from 'react';
import { Grid, Link, Typography, IconButton, Container } from '@mui/material';
import { Instagram, Twitter, Facebook } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'dimgray', color: 'whitesmoke', padding: '40px 0' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} md={3}>
                        <Typography variant="h4" gutterBottom>About Us</Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Who We Are</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Blog</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Work With Us</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Investor Relations</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Report Fraud</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Press Kit</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Contact Us</Link></li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h4" gutterBottom>Stylex</Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link href="/" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Shirts</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>T-shirts</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Sweatshirts</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Sarees</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Chudithars</Link></li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h4" gutterBottom>For Franchise</Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Partner With Us</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Apps For You</Link></li>
                        </ul>
                        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>For Enterprises</Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Stylex For Enterprise</Link></li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h4" gutterBottom>Learn More</Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Privacy</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Security</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Terms</Link></li>
                            <li><Link href="#" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Sitemap</Link></li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
                    <Grid item>
                        <IconButton href="#" style={{ color: 'whitesmoke' }}>
                            <Facebook />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href="#" style={{ color: 'whitesmoke' }}>
                            <Twitter />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href="#" style={{ color: 'whitesmoke' }}>
                            <Instagram />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
