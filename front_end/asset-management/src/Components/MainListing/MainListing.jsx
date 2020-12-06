import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {get_listings} from "./../../Redux/MainListingRedux/mainListingActions"
import styles from "./MainListing.module.css"
import { v4 as uuidv4 } from 'uuid'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1)
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    cardContentPadding:{
        padding:"10px"
    },
    itemTitle:{
        textAlign: "left",
        color: "black",
        fontFamily:"Montserrat, sans-serif"
    }
    

  }));


function MainListing()
{
    const classes = useStyles();
    const dispatch = useDispatch()

    let allListings = useSelector(state => state.listingsRoot.all_listings)
    // console.log(allListings)
    useEffect(()=> {

        dispatch( get_listings() )

    }, [])
    return(
        <>
            <div className={styles.AddImageDiv}>
                <Link to="/add-image">
                    <Button variant="contained" color="primary">
                        Add Image
                    </Button>
                </Link>
            </div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                {
                    allListings && allListings.map(item => {

                            return(
                                <Grid item xs={12} sm={4} lg={4} md={4} key={uuidv4()} className={styles.itemContainer} >
                                        <Paper elevation={3} className={classes.paper}>
                                            <Link to={`/image/${item.id}`}>
                                                <img height="auto" width="100%" src={item.imageURL} alt={item.title} />
                                            </Link>
                                            <Grid container className={classes.cardContentPadding}>
                                                <Grid item className={classes.itemTitle} xs={9}>
                                                    {item.title}
                                                </Grid>
                                                <Grid item xs={3} className={styles.icons}>
                                                  <Link style={{textDecoration:"none"}} to={`/edit-image/${item.id}`}>  <EditIcon className={styles.editBtn}/> </Link>
                                                    <DeleteIcon className={styles.deleteBtn} />
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                </Grid>
                            )
                    })
                }
                </Grid>
            </div>
            
        </>
    )
}

export default MainListing