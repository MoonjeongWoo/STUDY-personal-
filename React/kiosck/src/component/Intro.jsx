import * as React from 'react';
import '../style/Intro.css';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
const Main = () =>{

    return(
        <>
        <div className='wrap'>
            <Grid container spacing={0}>
                <Grid item md={12}>
                    <Paper elevation={3}>
                        <AppBar position="static" color='primary'>
                            <Toolbar>
                                <IconButton
                                size='large'
                                edge="start"
                                aria-label="menu"
                                sx={{ mr: 2}}>
                                <MenuIcon/>    
                                </IconButton>
                                <Typography variant='h6' component="div" sx={{flexGrow: 1}}>
                                    Parking
                                </Typography>
                                <Button color='inherit'>Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Paper>
                    <Paper elevation={3}>
                        <CssBaseline></CssBaseline>
                        <Container maxWidth="md">
                            <Box sx={{ bgcolor: "#eeee", hright: "auto"}}>
                                
                            </Box>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </>
    )


}
export default Main