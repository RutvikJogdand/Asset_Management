import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {get_single_img} from "./../../Redux/MainListingRedux/mainListingActions"
import styles from "./SingleImage.module.css"

function SingleImage()
{
    const params = useParams()
    const dispatch = useDispatch()
    console.log(params.id)
    
    const singleListing = useSelector(state => state.listingsRoot.single_listing)
    console.log(singleListing)
    useEffect(() => {

        dispatch( get_single_img(params.id) )

    },[])
    return(
        
         <>
            <div className={styles.singleImageTitle}>
                <p>
                    {singleListing ? singleListing.title: null}
                </p>
                <div>
                    <button>Back </button>
                </div>
            </div>
         </>

        
    )
}

export default SingleImage