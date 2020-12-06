import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {get_listings, delete_img} from "./../../Redux/MainListingRedux/mainListingActions"
import styles from "./MainListing.module.css"
import { v4 as uuidv4 } from 'uuid'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';




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
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPaper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

    

  }));

  

function MainListing()
{
    const classes = useStyles();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [itemID, setItemID] = React.useState("")

    const handleOpen = (id) => {
        setOpen(true);

        setItemID(id)

    };

    const handleClose = () => {
        setOpen(false);
        setItemID("")
    };

    let allListings = useSelector(state => state.listingsRoot.all_listings)
    // console.log(allListings)
    useEffect(()=> {

        dispatch( get_listings() )

    }, [])

    const handleDelete = () => {
    
        if(itemID)
        {
            dispatch( delete_img(itemID) )
            setOpen(false);
        }
    }

    console.log(itemID)
    
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
                                                    <DeleteIcon onClick={() =>handleOpen(item.id)} className={styles.deleteBtn} />
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                </Grid>
                            )
                    })
                }
                </Grid>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.modalPaper}>
                    <h2 id="transition-modal-title">Confirm Delete?</h2>
                    <p id="transition-modal-description">Once deleted the item will be removed forever</p>
                    <Button variant="contained" onClick={handleDelete} style={{backgroundColor: "crimson", color: "white"}}>
                        Delete
                    </Button>
                </div>
                </Fade>
            </Modal>
        </>
    )
}

export default MainListing