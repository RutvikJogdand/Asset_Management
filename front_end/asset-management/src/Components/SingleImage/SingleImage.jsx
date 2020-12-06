import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import {get_single_img, fetch_comments} from "./../../Redux/MainListingRedux/mainListingActions"
import Button from '@material-ui/core/Button';
import styles from "./SingleImage.module.css"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },

  alignItemsToLeft:{
      textAlign:"left"
  }
}));

function SingleImage()
{
    const classes = useStyles();
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    console.log(params.id)
    
    const singleListing = useSelector(state => state.listingsRoot.single_listing)
    const commentsArr = useSelector(state => state.listingsRoot.comments_arr)
    console.log(commentsArr)
    useEffect(() => {

        dispatch( get_single_img(params.id) )
        dispatch( fetch_comments(params.id) )

    },[])

    const handleCLick = () => {

        history.push("/")

    }
    return(
        
         <>
            <div className={styles.singleImageTitle}>
                <p>
                    {singleListing ? singleListing.title: null}
                </p>
                <div>
                <Button onClick={handleCLick} variant="contained" color="primary">
                    Back
                </Button>
                </div>
            </div>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <img width="80%" height="auto" src={singleListing ? singleListing.imageURL: null} alt={singleListing ? singleListing.title: null}/>
                    </Grid>
                    <Grid className={classes.alignItemsToLeft} item xs={12} sm={12} md={4} lg={4}>
                        <p>{singleListing.title} </p>
                        <p> {singleListing.description} </p>
                        <p>Uploaded on: {new Date(singleListing.dateCreated).toLocaleDateString() } </p>
                    </Grid>
                </Grid>   
            </div>     
            <hr/>
            {
                commentsArr && commentsArr.map(item => {

                    return(
                        <div className={styles.CommentBox}>
                            <div className={styles.CommentUserDetails}>
                                <Avatar alt="Remy Sharp" src={item.avatar} />
                                <p> {item.name} </p>
                                <span> {new Date(item.dateCreated).toLocaleDateString()}  {new Date(item.dateCreated).toLocaleTimeString() } </span>
                            </div>
                            <p>
                                {item.comment}
                            </p>
                        </div>
                    )
                })
            }
            <br/>
            <br/>
            <div>
                <textarea placeholder="Post your comment" rows="10">

                </textarea>
                <br/>
                <div className={styles.PostCommentBtn}>
                    <Button  variant="contained" color="primary">
                        Post Comment
                    </Button>
                </div>
            </div>
            <br/>
         </>

        
    )
}

export default SingleImage