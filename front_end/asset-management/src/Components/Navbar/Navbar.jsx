import React from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    //   padding: theme.spacing(1)
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },

  }));


function Navbar()
{
    const classes = useStyles();
    
    return(
        <>
             <div >
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        ABCD
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        
                    </Typography>
                    <Button color="inherit">
                        <AccountCircleIcon />
                    </Button>
                    </Toolbar>
                </AppBar>
            </div>
            
        </>
    )
}

export default Navbar